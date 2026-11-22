-- ================================================================
-- IberTrabajo - Schéma Supabase complet
-- Migration: 001_initial_schema.sql
-- Base de données: PostgreSQL (Supabase)
-- Auteur: IberTrabajo Team
-- Date: 2026-11-22
-- ================================================================

-- ================================================================
-- EXTENSIONS NÉCESSAIRES
-- ================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";       -- Full-text search rapide
CREATE EXTENSION IF NOT EXISTS "unaccent";       -- Recherche sans accents

-- ================================================================
-- ENUM TYPES
-- ================================================================
CREATE TYPE user_role AS ENUM ('candidate', 'employer', 'admin');

CREATE TYPE legal_status AS ENUM (
  'status_nie_valid',
  'status_nie_renewal',
  'status_arraigo_social',
  'status_arraigo_sociolaboral',
  'status_arraigo_socioformativo',
  'status_arraigo_segunda_oportunidad',
  'status_arraigo_familiar',
  'status_arraigo_needed',
  'status_eu_citizen',
  'status_origin_visa'
);

CREATE TYPE contract_type AS ENUM (
  'indefinido',
  'temporal',
  'fijo',
  'practicas',
  'autonomo'
);

CREATE TYPE application_stage AS ENUM (
  'applied',
  'reviewing',
  'interview',
  'hired',
  'rejected'
);

CREATE TYPE language_level AS ENUM (
  'basico',
  'intermedio',
  'avanzado',
  'nativo'
);

-- ================================================================
-- TABLE: profiles (Extension de auth.users de Supabase)
-- ================================================================
CREATE TABLE IF NOT EXISTS profiles (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role            user_role NOT NULL DEFAULT 'candidate',
  full_name       TEXT NOT NULL,
  phone           TEXT,
  province        TEXT,
  avatar_url      TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ================================================================
-- TABLE: candidate_profiles (Profil détaillé candidat)
-- ================================================================
CREATE TABLE IF NOT EXISTS candidate_profiles (
  id                      UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id                 UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  profession              TEXT,
  legal_status            legal_status DEFAULT 'status_arraigo_needed',
  birth_date              DATE,
  has_driving_license     BOOLEAN DEFAULT FALSE,
  driving_license_types   TEXT[] DEFAULT '{}',
  has_vehicle             BOOLEAN DEFAULT FALSE,
  target_sectors          TEXT[] DEFAULT '{}',
  target_positions        TEXT,
  academic_education      TEXT,
  other_certifications    TEXT,
  skills                  TEXT,
  experience              TEXT,
  bio                     TEXT,
  is_available            BOOLEAN DEFAULT TRUE,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ================================================================
-- TABLE: candidate_languages (Langues du candidat)
-- ================================================================
CREATE TABLE IF NOT EXISTS candidate_languages (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  language    TEXT NOT NULL,
  level       language_level NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ================================================================
-- TABLE: employer_profiles (Profil entreprise/employeur)
-- ================================================================
CREATE TABLE IF NOT EXISTS employer_profiles (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  company_name    TEXT NOT NULL,
  cif             TEXT,
  sector          TEXT,
  contact_person  TEXT,
  bio             TEXT,
  website         TEXT,
  is_verified     BOOLEAN DEFAULT FALSE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ================================================================
-- TABLE: job_offers (Offres d'emploi)
-- ================================================================
CREATE TABLE IF NOT EXISTS job_offers (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  employer_id       UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Titre multilingue
  title_es          TEXT NOT NULL,
  title_ar          TEXT,
  title_en          TEXT,

  -- Description multilingue
  description_es    TEXT NOT NULL,
  description_ar    TEXT,
  description_en    TEXT,

  -- Infos poste
  company           TEXT NOT NULL,
  cif               TEXT,
  province          TEXT NOT NULL,
  city              TEXT,
  sector            TEXT,
  salary            INTEGER NOT NULL DEFAULT 1200,
  salary_type       TEXT DEFAULT 'neto',
  contract_type     contract_type NOT NULL DEFAULT 'indefinido',
  
  -- Critères spéciaux
  arraigo_ok        BOOLEAN DEFAULT FALSE,
  nie_required      BOOLEAN DEFAULT FALSE,
  has_housing       BOOLEAN DEFAULT FALSE,

  -- Contact
  whatsapp          TEXT,

  -- Compétences requises
  skills            TEXT[] DEFAULT '{}',

  -- Statut
  is_active         BOOLEAN DEFAULT TRUE,
  is_verified       BOOLEAN DEFAULT FALSE,
  views_count       INTEGER DEFAULT 0,

  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ================================================================
-- TABLE: applications (Candidatures / Postulations)
-- ================================================================
CREATE TABLE IF NOT EXISTS applications (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id            UUID NOT NULL REFERENCES job_offers(id) ON DELETE CASCADE,
  candidate_id      UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Données au moment de la candidature
  candidate_legal   legal_status DEFAULT 'status_arraigo_needed',
  candidate_phone   TEXT,
  cover_note        TEXT,
  
  -- Pipeline ATS
  stage             application_stage DEFAULT 'applied',
  employer_notes    TEXT,

  applied_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  UNIQUE(job_id, candidate_id)   -- Un candidat ne peut postuler qu'une fois par offre
);

-- ================================================================
-- TABLE: saved_jobs (Offres sauvegardées / bookmarks)
-- ================================================================
CREATE TABLE IF NOT EXISTS saved_jobs (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id       UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  job_id        UUID NOT NULL REFERENCES job_offers(id) ON DELETE CASCADE,
  saved_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, job_id)
);

-- ================================================================
-- INDEXES (Performance pour les requêtes fréquentes)
-- ================================================================

-- Recherche par province et secteur (filtres les plus utilisés)
CREATE INDEX idx_jobs_province ON job_offers(province);
CREATE INDEX idx_jobs_sector ON job_offers(sector);
CREATE INDEX idx_jobs_active ON job_offers(is_active) WHERE is_active = TRUE;
CREATE INDEX idx_jobs_arraigo ON job_offers(arraigo_ok) WHERE arraigo_ok = TRUE;
CREATE INDEX idx_jobs_created ON job_offers(created_at DESC);
CREATE INDEX idx_jobs_salary ON job_offers(salary);
CREATE INDEX idx_jobs_contract ON job_offers(contract_type);
CREATE INDEX idx_jobs_employer ON job_offers(employer_id);

-- Recherche full-text sur les titres et descriptions
CREATE INDEX idx_jobs_fts_es ON job_offers 
  USING gin(to_tsvector('spanish', coalesce(title_es, '') || ' ' || coalesce(description_es, '')));

CREATE INDEX idx_jobs_skills ON job_offers USING gin(skills);

-- Applications
CREATE INDEX idx_applications_job ON applications(job_id);
CREATE INDEX idx_applications_candidate ON applications(candidate_id);
CREATE INDEX idx_applications_stage ON applications(stage);
CREATE INDEX idx_applications_employer ON applications(job_id, stage);

-- Candidats
CREATE INDEX idx_candidates_province ON candidate_profiles(user_id);
CREATE INDEX idx_candidates_legal ON candidate_profiles(legal_status);
CREATE INDEX idx_candidates_available ON candidate_profiles(is_available) WHERE is_available = TRUE;
CREATE INDEX idx_candidate_languages ON candidate_languages(user_id);

-- ================================================================
-- ROW LEVEL SECURITY (RLS) — Sécurité par ligne (critique !)
-- ================================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidate_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidate_languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;

-- Profiles: chaque utilisateur voit et modifie uniquement son profil
CREATE POLICY "profiles_select_own" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON profiles FOR UPDATE USING (auth.uid() = id);
-- Les profils candidats sont visibles par les employeurs (pour la base de talents)
CREATE POLICY "profiles_select_employers" ON profiles FOR SELECT 
  USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'employer'));

-- Candidate profiles: lecture par employeurs, écriture par l'utilisateur
CREATE POLICY "candidate_profiles_own" ON candidate_profiles 
  FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "candidate_profiles_employers_view" ON candidate_profiles 
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('employer', 'admin'))
  );

-- Langues candidat
CREATE POLICY "languages_own" ON candidate_languages 
  FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "languages_employers_view" ON candidate_languages 
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('employer', 'admin'))
  );

-- Employer profiles: tous peuvent lire, seul l'employeur peut modifier
CREATE POLICY "employer_profiles_select_all" ON employer_profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "employer_profiles_own" ON employer_profiles 
  FOR ALL USING (auth.uid() = user_id);

-- Job offers: toutes les offres actives sont publiques
CREATE POLICY "jobs_public_read" ON job_offers FOR SELECT USING (is_active = TRUE);
CREATE POLICY "jobs_employer_all" ON job_offers 
  FOR ALL USING (auth.uid() = employer_id);

-- Applications: candidat voit ses propres candidatures, employeur voit celles liées à ses offres
CREATE POLICY "applications_candidate_own" ON applications 
  FOR ALL USING (auth.uid() = candidate_id);
CREATE POLICY "applications_employer_view" ON applications 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM job_offers jo 
      WHERE jo.id = applications.job_id AND jo.employer_id = auth.uid()
    )
  );
CREATE POLICY "applications_employer_update_stage" ON applications 
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM job_offers jo 
      WHERE jo.id = applications.job_id AND jo.employer_id = auth.uid()
    )
  );

-- Saved jobs: uniquement pour l'utilisateur propriétaire
CREATE POLICY "saved_jobs_own" ON saved_jobs 
  FOR ALL USING (auth.uid() = user_id);

-- ================================================================
-- TRIGGER: auto mise à jour de updated_at
-- ================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_candidate_profiles_updated_at
  BEFORE UPDATE ON candidate_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_employer_profiles_updated_at
  BEFORE UPDATE ON employer_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_job_offers_updated_at
  BEFORE UPDATE ON job_offers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ================================================================
-- TRIGGER: Création automatique du profil après inscription
-- ================================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, role, full_name, phone)
  VALUES (
    NEW.id,
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'candidate'),
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    NEW.raw_user_meta_data->>'phone'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ================================================================
-- VUES UTILITAIRES (Performance des jointures fréquentes)
-- ================================================================

-- Vue: liste des offres avec infos employeur (page principale)
CREATE OR REPLACE VIEW v_job_offers_public AS
SELECT
  jo.id,
  jo.employer_id,
  jo.title_es,
  jo.title_ar,
  jo.title_en,
  jo.description_es,
  jo.description_ar,
  jo.description_en,
  jo.company,
  jo.province,
  jo.city,
  jo.sector,
  jo.salary,
  jo.salary_type,
  jo.contract_type,
  jo.arraigo_ok,
  jo.nie_required,
  jo.has_housing,
  jo.whatsapp,
  jo.skills,
  jo.views_count,
  jo.is_verified,
  jo.created_at,
  ep.is_verified AS employer_verified
FROM job_offers jo
LEFT JOIN employer_profiles ep ON ep.user_id = jo.employer_id
WHERE jo.is_active = TRUE
ORDER BY jo.created_at DESC;

-- Vue: candidats disponibles (base de talents pour employeurs)
CREATE OR REPLACE VIEW v_candidates_public AS
SELECT
  p.id,
  p.full_name,
  p.province,
  p.avatar_url,
  cp.profession,
  cp.legal_status,
  cp.birth_date,
  cp.has_driving_license,
  cp.driving_license_types,
  cp.has_vehicle,
  cp.target_sectors,
  cp.target_positions,
  cp.skills,
  cp.experience,
  cp.is_available,
  p.phone
FROM profiles p
JOIN candidate_profiles cp ON cp.user_id = p.id
WHERE p.role = 'candidate' AND cp.is_available = TRUE;

-- ================================================================
-- FUNCTION: Recherche full-text optimisée
-- ================================================================
CREATE OR REPLACE FUNCTION search_jobs(
  p_keyword TEXT DEFAULT NULL,
  p_province TEXT DEFAULT NULL,
  p_sector TEXT DEFAULT NULL,
  p_arraigo BOOLEAN DEFAULT NULL,
  p_has_housing BOOLEAN DEFAULT NULL,
  p_contract contract_type DEFAULT NULL,
  p_min_salary INTEGER DEFAULT NULL,
  p_limit INTEGER DEFAULT 20,
  p_offset INTEGER DEFAULT 0
)
RETURNS TABLE (
  id UUID, title_es TEXT, title_ar TEXT, company TEXT, province TEXT,
  city TEXT, sector TEXT, salary INTEGER, salary_type TEXT,
  contract_type contract_type, arraigo_ok BOOLEAN, nie_required BOOLEAN,
  has_housing BOOLEAN, whatsapp TEXT, skills TEXT[], is_verified BOOLEAN,
  employer_verified BOOLEAN, created_at TIMESTAMPTZ, rank FLOAT4
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    jo.id, jo.title_es, jo.title_ar, jo.company, jo.province,
    jo.city, jo.sector, jo.salary, jo.salary_type,
    jo.contract_type, jo.arraigo_ok, jo.nie_required,
    jo.has_housing, jo.whatsapp, jo.skills, jo.is_verified,
    ep.is_verified AS employer_verified, jo.created_at,
    CASE 
      WHEN p_keyword IS NOT NULL AND p_keyword != '' THEN
        ts_rank(
          to_tsvector('spanish', coalesce(jo.title_es, '') || ' ' || coalesce(jo.description_es, '')),
          plainto_tsquery('spanish', p_keyword)
        )
      ELSE 1.0
    END AS rank
  FROM job_offers jo
  LEFT JOIN employer_profiles ep ON ep.user_id = jo.employer_id
  WHERE
    jo.is_active = TRUE
    AND (p_keyword IS NULL OR p_keyword = '' OR
      to_tsvector('spanish', coalesce(jo.title_es, '') || ' ' || coalesce(jo.description_es, ''))
      @@ plainto_tsquery('spanish', p_keyword)
      OR jo.company ILIKE '%' || p_keyword || '%'
    )
    AND (p_province IS NULL OR p_province = '' OR jo.province = p_province)
    AND (p_sector IS NULL OR p_sector = '' OR jo.sector = p_sector)
    AND (p_arraigo IS NULL OR jo.arraigo_ok = p_arraigo)
    AND (p_has_housing IS NULL OR jo.has_housing = p_has_housing)
    AND (p_contract IS NULL OR jo.contract_type = p_contract)
    AND (p_min_salary IS NULL OR jo.salary >= p_min_salary)
  ORDER BY rank DESC, jo.created_at DESC
  LIMIT p_limit OFFSET p_offset;
END;
$$ LANGUAGE plpgsql STABLE;

-- ================================================================
-- DONNÉES DE TEST (Seed data)
-- ================================================================
-- NOTE: Les utilisateurs réels sont créés via Supabase Auth.
-- Ce seed insère uniquement des offres d'emploi de démonstration.
-- À exécuter APRÈS création des comptes via l'interface.

-- ================================================================
-- FIN DU SCHÉMA
-- ================================================================
