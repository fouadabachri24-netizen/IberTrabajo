// IberTrabajo - Supabase Client Configuration
// Ce fichier est le SEUL point de connexion avec Supabase.
// Remplacez les valeurs par vos vraies clés depuis https://app.supabase.com/project/_/settings/api

// ================================================================
// CONFIGURATION
// ================================================================

const SUPABASE_CONFIG = {
  // Obtenez ces valeurs depuis: Supabase Dashboard > Settings > API
  url: window.SUPABASE_URL || 'https://YOUR_PROJECT_ID.supabase.co',
  anonKey: window.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY',
};

// ================================================================
// DÉTECTION: Mode démo (localStorage) vs Mode production (Supabase)
// ================================================================
// Si les vraies clés ne sont pas configurées, l'app tourne en mode
// démo local (localStorage). Idéal pour le développement et les tests.

const IS_DEMO_MODE = (
  SUPABASE_CONFIG.url.includes('YOUR_PROJECT_ID') ||
  SUPABASE_CONFIG.anonKey.includes('YOUR_SUPABASE_ANON_KEY')
);

if (IS_DEMO_MODE) {
  console.info(
    '%c🎭 IberTrabajo - Mode Démonstration (localStorage)\n' +
    'Pour activer la base de données Supabase, configurez les variables\n' +
    'SUPABASE_URL et SUPABASE_ANON_KEY dans votre fichier .env ou vercel.json',
    'color: #d97706; font-weight: bold; font-size: 12px;'
  );
} else {
  console.info('✅ IberTrabajo - Connecté à Supabase');
}

// ================================================================
// COUCHE D'ABSTRACTION DATA (Demo ↔ Supabase)
// ================================================================
// Cette couche permet de basculer entre localStorage (demo)
// et Supabase (production) sans changer le code principal.

const DataLayer = {

  // --- AUTH ---
  async signUp({ email, password, role, fullName, phone }) {
    if (IS_DEMO_MODE) {
      // Mode démo: simulé dans AppState
      return { user: null, error: null, demoMode: true };
    }
    // Mode production: Supabase Auth
    // const { data, error } = await supabase.auth.signUp({
    //   email, password,
    //   options: { data: { role, full_name: fullName, phone } }
    // });
    // return { user: data?.user, error };
  },

  async signIn({ email, password }) {
    if (IS_DEMO_MODE) return { user: null, error: null, demoMode: true };
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    // return { user: data?.user, error };
  },

  async signOut() {
    if (IS_DEMO_MODE) return;
    // await supabase.auth.signOut();
  },

  // --- JOBS ---
  async getJobs({ keyword, province, sector, arraigoOk, hasHousing, contractType, limit = 20, offset = 0 } = {}) {
    if (IS_DEMO_MODE) {
      // Retourné par AppState.jobs (localStorage)
      return { data: null, error: null, demoMode: true };
    }
    // const { data, error } = await supabase.rpc('search_jobs', {
    //   p_keyword: keyword, p_province: province, p_sector: sector,
    //   p_arraigo: arraigoOk, p_has_housing: hasHousing,
    //   p_contract: contractType, p_limit: limit, p_offset: offset
    // });
    // return { data, error };
  },

  async createJob(jobData) {
    if (IS_DEMO_MODE) return { data: null, error: null, demoMode: true };
    // const { data, error } = await supabase.from('job_offers').insert(jobData).select().single();
    // return { data, error };
  },

  async deleteJob(jobId) {
    if (IS_DEMO_MODE) return { error: null, demoMode: true };
    // const { error } = await supabase.from('job_offers').update({ is_active: false }).eq('id', jobId);
    // return { error };
  },

  // --- APPLICATIONS ---
  async applyToJob(applicationData) {
    if (IS_DEMO_MODE) return { data: null, error: null, demoMode: true };
    // const { data, error } = await supabase.from('applications').insert(applicationData).select().single();
    // return { data, error };
  },

  async updateApplicationStage(appId, stage) {
    if (IS_DEMO_MODE) return { error: null, demoMode: true };
    // const { error } = await supabase.from('applications').update({ stage }).eq('id', appId);
    // return { error };
  },

  // --- CANDIDATES ---
  async getCandidates() {
    if (IS_DEMO_MODE) return { data: null, error: null, demoMode: true };
    // const { data, error } = await supabase.from('v_candidates_public').select('*');
    // return { data, error };
  },

  async updateCandidateProfile(userId, profileData) {
    if (IS_DEMO_MODE) return { error: null, demoMode: true };
    // const { error } = await supabase.from('candidate_profiles').upsert({ user_id: userId, ...profileData });
    // return { error };
  },

  // --- STORAGE (Photos de profil) ---
  async uploadAvatar(userId, file) {
    if (IS_DEMO_MODE) {
      // En mode démo: conversion base64 limitée à 500KB
      return new Promise((resolve, reject) => {
        if (file.size > 500 * 1024) {
          reject(new Error('Photo trop lourde en mode démo (max 500 KB). En production, jusqu\'à 5 MB via Supabase Storage.'));
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => resolve({ url: e.target.result, error: null });
        reader.onerror = () => reject(new Error('Erreur de lecture du fichier'));
        reader.readAsDataURL(file);
      });
    }
    // Mode production: Supabase Storage
    // const fileExt = file.name.split('.').pop();
    // const fileName = `${userId}/avatar.${fileExt}`;
    // const { data, error } = await supabase.storage.from('avatars').upload(fileName, file, { upsert: true });
    // if (error) return { url: null, error };
    // const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(fileName);
    // return { url: publicUrl, error: null };
  }
};

// Export pour usage global
window.DataLayer = DataLayer;
window.IS_DEMO_MODE = IS_DEMO_MODE;
