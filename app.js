/**
 * IberTrabajo - Plataforma de Intermediación Laboral en España
 * Sistema de Autenticación, Control de Acceso por Roles (RBAC), i18n, ATS & Base de Talentos
 */

// --- 1. DICCIONARIO MULTILINGÜE COMPLETO (ES / AR / EN) ---
const TRANSLATIONS = {
  es: {
    brand_title: "IberTrabajo",
    brand_subtitle: "Intermediación Laboral España",
    nav_explore: "Buscar Empleo",
    nav_post_job: "Publicar Oferta",
    nav_ats: "Panel ATS (Candidaturas)",
    nav_my_offers: "Mis Ofertas Publicadas",
    nav_talents: "Base de Talentos",
    nav_cv: "Mi Currículum",
    nav_guide: "Guía Legal & Arraigo",
    nav_my_apps: "Mis Solicitudes",
    nav_login: "Iniciar Sesión",
    nav_register: "Crear Cuenta",
    nav_logout: "Cerrar Sesión",
    
    role_candidate: "Candidato / Demandante",
    role_employer: "Empresa / Empleador",
    
    hero_tag: "Portal de Empleo & Asesoría de Extranjería en España",
    hero_title: "Conectamos Trabajadores y Empresas en España",
    hero_subtitle: "Plataforma con cuentas dedicadas para candidatos y empleadores. Gestión integral de permisos de trabajo, ofertas para procesos de arraigo y contratación legal.",
    stat_jobs: "Ofertas Activas",
    stat_contracts: "Contratos Gestionados",
    stat_provinces: "Provincias Españolas",
    stat_verified: "Empresas Verificadas",
    
    search_keyword_placeholder: "Puesto, oficio o palabra clave (ej. camarero, peón, albañil)...",
    search_province_all: "Todas las provincias",
    search_sector_all: "Todos los sectores",
    btn_search: "Buscar Empleo",
    quick_tags_label: "Frecuentes:",
    
    filter_title: "Filtros de Búsqueda",
    filter_permit_title: "Situación Legal / Extranjería",
    filter_permit_all: "Cualquier situación",
    filter_permit_arraigo: "Acepta precontrato para Arraigo",
    filter_permit_nie: "Requiere NIE / Permiso en vigor",
    filter_housing_title: "Beneficios",
    filter_housing_only: "Con Alojamiento incluido",
    filter_contract_title: "Tipo de Contrato",
    filter_contract_all: "Todos los contratos",
    filter_contract_indefinido: "Contrato Indefinido",
    filter_contract_temporal: "Temporal / Campaña",
    filter_contract_fijo: "Fijo Discontinuo",
    filter_clear: "Limpiar filtros",
    results_found: "ofertas encontradas",
    
    badge_verified: "Verificada",
    badge_arraigo: "Acepta Arraigo / Precontrato",
    badge_nie_req: "Permiso de trabajo requerido",
    badge_housing: "Alojamiento incluido",
    btn_apply: "Inscribirme",
    btn_whatsapp: "WhatsApp RRHH",
    btn_save: "Guardar",
    btn_saved: "Guardada",
    posted_on: "Publicado hace",
    salary_unit: "€/mes",
    
    // Auth Modal
    modal_auth_title: "Acceso a IberTrabajo",
    tab_login: "Iniciar Sesión",
    tab_register: "Crear Nueva Cuenta",
    auth_email: "Correo Electrónico",
    auth_password: "Contraseña",
    auth_role_title: "¿Qué tipo de cuenta deseas abrir?",
    role_candidate_desc: "Busco ofertas de trabajo, preparar mi CV y solicitar empleo con o sin permiso de trabajo.",
    role_employer_desc: "Deseo publicar ofertas de empleo, gestionar candidatos en el panel ATS y buscar personal.",
    auth_candidatename: "Nombre y Apellidos",
    auth_companyname: "Nombre de la Empresa o Empleador",
    auth_cif: "CIF / NIF de la Empresa",
    auth_contactperson: "Persona o Responsable de Selección",
    auth_phone: "Teléfono / WhatsApp",
    auth_province: "Provincia en España",
    auth_profession: "Profesión u Oficio Principal",
    auth_legal_status: "Situación Legal / Extranjería en España",
    status_nie_valid: "NIE / Permiso de residencia y trabajo en vigor",
    status_nie_renewal: "En trámite de renovación / Prórroga",
    status_arraigo_needed: "Sin permiso vigente (Busco precontrato para Arraigo)",
    status_eu_citizen: "DNI español o Ciudadano de la Unión Europea",
    status_origin_visa: "En país de origen (Interesado en visado de trabajo)",
    btn_do_login: "Entrar a mi Cuenta",
    btn_do_register: "Registrar mi Cuenta",
    demo_box_title: "Acceso Rápido de Prueba (Sin contraseña)",
    demo_as_candidate: "Entrar como Candidato (Ahmed)",
    demo_as_employer: "Entrar como Empresa (Taberna Ibérica)",

    // Application Modal
    modal_apply_title: "Solicitud de Empleo",
    btn_submit_application: "Enviar Solicitud a la Empresa",
    
    // Post Job Modal
    modal_post_title: "Publicar Nueva Oferta de Trabajo",
    form_job_title: "Título del puesto de trabajo",
    form_company_name: "Nombre de la Empresa o Empleador",
    form_cif: "CIF / NIF de la Empresa",
    form_sector: "Sector Laboral",
    form_salary: "Salario Neto / Bruto mensual (€)",
    form_salary_help: "Debe respetar el SMI (Salario Mínimo) o Convenio colectivo aplicable.",
    form_contract_type: "Modalidad de Contrato",
    form_arraigo_support: "¿La empresa emite precontrato para trámite de Arraigo (Extranjería)?",
    form_yes: "Sí, apoyamos regularización",
    form_no: "No, requiere permiso en vigor",
    form_housing_support: "¿La oferta incluye alojamiento para el trabajador?",
    form_job_desc: "Descripción del puesto, funciones y requisitos",
    form_whatsapp_contact: "Número de WhatsApp para contacto directo (ej. 34612345678)",
    btn_publish_job: "Publicar Oferta Ahora",

    // ATS
    ats_title: "Gestión de Candidatos (Pipeline ATS)",
    ats_subtitle: "Exclusivo para empresas: organiza y avanza las solicitudes en tiempo real",
    ats_col_applied: "Nuevas Solicitudes",
    ats_col_reviewing: "En Revisión",
    ats_col_interview: "Entrevista Agendada",
    ats_col_hired: "Contratados / Oferta Formal",

    // My Offers
    my_offers_title: "Mis Ofertas de Trabajo Publicadas",
    my_offers_subtitle: "Gestiona las vacantes de tu empresa, visualiza postulantes y el estado de la oferta",
    btn_delete_offer: "Eliminar",
    btn_view_applicants: "Ver Candidatos",

    // Talents
    talents_title: "Base de Talentos en España",
    talents_subtitle: "Exclusivo para empresas: contacta directamente con profesionales disponibles",
    btn_contact_talent: "Contactar por WhatsApp",

    // CV Builder
    cv_title: "Creador de Currículum para España",
    cv_subtitle: "Genera un CV adaptado a los estándares de selección de empresas españolas",
    cv_export_btn: "Imprimir / Guardar en PDF",

    // Legal Guide
    guide_title: "Guía de Extranjería y Contratación Laboral",
    guide_subtitle: "Información clave sobre el Nuevo Reglamento de Extranjería, tipos de arraigo y derechos del trabajador en España"
  },

  ar: {
    brand_title: "إيبير تراباخو",
    brand_subtitle: "منصة التوظيف والوساطة بإسبانيا",
    nav_explore: "تصفح الوظائف",
    nav_post_job: "إضافة عرض عمل",
    nav_ats: "لوحة المشغلين (ATS)",
    nav_my_offers: "عروضي المنشورة",
    nav_talents: "قاعدة الكفاءات",
    nav_cv: "سيرتي الذاتية (CV)",
    nav_guide: "الدليل القانوني وعقود العمل",
    nav_my_apps: "طلباتي المرسلة",
    nav_login: "تسجيل الدخول",
    nav_register: "إنشاء حساب",
    nav_logout: "تسجيل الخروج",

    role_candidate: "باحث عن عمل",
    role_employer: "مشغل / شركة",

    hero_tag: "المنصة الأولى للتوظيف والاستشارات القانونية بإسبانيا",
    hero_title: "صلة الوصل الموثوقة بين الباحثين عن عمل والشركات في إسبانيا",
    hero_subtitle: "منصة بحسابات وصلاحيات مخصصة لكل من الباحث عن عمل والمشغل. عقود عمل قانونية، ودعم لملفات تسوية الوضعية (Arraigo).",
    stat_jobs: "عروض عمل نشطة",
    stat_contracts: "عقود موثقة هذا العام",
    stat_provinces: "محافظات إسبانية",
    stat_verified: "شركات معتمدة ومحققة",

    search_keyword_placeholder: "المهنة أو التخصص (مثال: نادل، بناء، فلاح، رعاية، سائق)...",
    search_province_all: "جميع محافظات إسبانيا",
    search_sector_all: "جميع القطاعات",
    btn_search: "بحث عن عمل",
    quick_tags_label: "أكثر بحثاً:",

    filter_title: "تصفية العروض",
    filter_permit_title: "الوضعية القانونية بإسبانيا",
    filter_permit_all: "كل الوضعيات",
    filter_permit_arraigo: "يقبل تقديم عقد للتسوية (Arraigo)",
    filter_permit_nie: "يشترط بطاقة إقامة وعمل سارية (NIE)",
    filter_housing_title: "المزايا الإضافية",
    filter_housing_only: "يوفر السكن مع العمل",
    filter_contract_title: "نوع العقد",
    filter_contract_all: "جميع العقود",
    filter_contract_indefinido: "عقد دائم (Indefinido)",
    filter_contract_temporal: "عقد مؤقت / موسمي (Temporal)",
    filter_contract_fijo: "عقد دوري مستمر (Fijo Discontinuo)",
    filter_clear: "إعادة ضبط الفلاتر",
    results_found: "عرض عمل متوفر",

    badge_verified: "شركة موثقة",
    badge_arraigo: "يقبل عقد أرايغو / تسوية",
    badge_nie_req: "يتطلب تصريح عمل ساري",
    badge_housing: "سكن متوفر",
    btn_apply: "تقديم الطلب",
    btn_whatsapp: "واتساب الموارد البشرية",
    btn_save: "حفظ",
    btn_saved: "تم الحفظ",
    posted_on: "نشر منذ",
    salary_unit: "يورو/شهرياً",

    // Auth Modal
    modal_auth_title: "الدخول إلى منصة إيبير تراباخو",
    tab_login: "تسجيل الدخول",
    tab_register: "إنشاء حساب جديد",
    auth_email: "البريد الإلكتروني",
    auth_password: "كلمة المرور",
    auth_role_title: "اختر نوع الحساب الذي ترغب بفتحه:",
    role_candidate_desc: "أبحث عن وظائف بإسبانيا، إنشاء سيرة ذاتية إسبانية، والتقديم على عروض العمل بعقد عادي أو أرايغو.",
    role_employer_desc: "أريد نشر وظائف لمؤسستي، فحص وفرز المترشحين بلوحة ATS، والبحث في قاعدة الكفاءات.",
    auth_candidatename: "الاسم الكامل",
    auth_companyname: "اسم الشركة أو المؤسسة المشغلة",
    auth_cif: "الرقم الضريبي للمؤسسة (CIF / NIF)",
    auth_contactperson: "اسم مسؤول التوظيف والموارد البشرية",
    auth_phone: "رقم الهاتف / الواتساب",
    auth_province: "المحافظة بإسبانيا",
    auth_profession: "المهنة أو الحرفة الرئيسية",
    auth_legal_status: "الوضعية الإدارية والقانونية في إسبانيا",
    status_nie_valid: "أملك بطاقة إقامة وعمل سارية المفعول (NIE / TIE)",
    status_nie_renewal: "في طور تجديد الإقامة / التمديد (En trámite)",
    status_arraigo_needed: "بدون أوراق حالياً (أبحث عن عقد لتسوية الوضعية - Arraigo)",
    status_eu_citizen: "حامل للجنسية الإسبانية أو جنسية أوروبية",
    status_origin_visa: "مقيم خارج إسبانيا (أرغب في عقد عمل من بلد الأصل)",
    btn_do_login: "دخول إلى حسابي",
    btn_do_register: "تأكيد وإنشاء الحساب",
    demo_box_title: "دخول سريع للتجربة (بدون كلمة مرور):",
    demo_as_candidate: "دخول تجريبي كباحث عن عمل (أحمد)",
    demo_as_employer: "دخول تجريبي كمشغل (طبرنة إيبيريكا)",

    // Application Modal
    modal_apply_title: "التقديم على عرض العمل",
    btn_submit_application: "إرسال طلب التوظيف للشركة",

    // Post Job Modal
    modal_post_title: "نشر عرض عمل جديد",
    form_job_title: "المسمى الوظيفي",
    form_company_name: "اسم الشركة أو المشغل",
    form_cif: "الرقم الضريبي للشركة (CIF / NIF)",
    form_sector: "قطاع النشاط",
    form_salary: "الراتب الشهري الصافي أو الإجمالي (€)",
    form_salary_help: "يجب احترام الحد الأدنى للأجور في إسبانيا (SMI) أو الاتفاقية الجماعية للقطاع.",
    form_contract_type: "صيغة العقد المقترح",
    form_arraigo_support: "هل تقدم الشركة عقداً لمساعدة العامل في مسطرة التسوية (Arraigo)؟",
    form_yes: "نعم، نقدم عقد عمل للبيرمي",
    form_no: "لا، يشترط توفر أوراق العمل مسبقاً",
    form_housing_support: "هل يتضمن العرض توفير السكن للعامل؟",
    form_job_desc: "وصف المهام والمسؤوليات والشروط المطلوبة",
    form_whatsapp_contact: "رقم الواتساب للتواصل السريع (مثال: 34612345678)",
    btn_publish_job: "نشر العرض فوراً",

    // ATS
    ats_title: "نظام إدارة المترشحين (ATS المشغلين)",
    ats_subtitle: "خاص بالشركات: تتبع وفرز المترشحين لمؤسستك في منصة واحدة",
    ats_col_applied: "طلبات جديدة",
    ats_col_reviewing: "قيد المراجعة",
    ats_col_interview: "مقابلة مبرمجة",
    ats_col_hired: "تم القبول وتوقيع العقد",

    // My Offers
    my_offers_title: "عروض العمل المنشورة لشركتك",
    my_offers_subtitle: "متابعة وإدارة الوظائف التي نشرتها مؤسستك وعدد المتقدمين لكل وظيفة",
    btn_delete_offer: "حذف العرض",
    btn_view_applicants: "عرض المتقدمين",

    // Talents
    talents_title: "قاعدة بيانات الكفاءات بإسبانيا",
    talents_subtitle: "خاص بالشركات: تصفح وتواصل مباشرة مع العمال والمهنيين المتاحين",
    btn_contact_talent: "تواصل عبر واتساب",

    // CV Builder
    cv_title: "منشئ السيرة الذاتية المتوافقة مع معايير إسبانيا",
    cv_subtitle: "صمم سيرة ذاتية احترافية بالصيغة المقبولة لدى الشركات الإسبانية",
    cv_export_btn: "طباعة / تحميل بصيغة PDF",

    // Legal Guide
    guide_title: "الدليل القانوني لعقود العمل وقانون الأجانب بإسبانيا",
    guide_subtitle: "معلومات شاملة حول قانون الهجرة الجديد، شروط عقد العمل للتسوية (Arraigo)، والحد الأدنى للأجور"
  },

  en: {
    brand_title: "IberTrabajo",
    brand_subtitle: "Spain Employment & Mediation Platform",
    nav_explore: "Find Jobs",
    nav_post_job: "Post a Job",
    nav_ats: "Employer ATS Board",
    nav_my_offers: "My Posted Jobs",
    nav_talents: "Talent Pool",
    nav_cv: "My Resume",
    nav_guide: "Legal Guide & Permits",
    nav_my_apps: "My Applications",
    nav_login: "Sign In",
    nav_register: "Create Account",
    nav_logout: "Sign Out",

    role_candidate: "Candidate / Job Seeker",
    role_employer: "Employer / Company",

    hero_tag: "Verified Jobs & Immigration Mediation in Spain",
    hero_title: "Connecting Workers and Employers in Spain",
    hero_subtitle: "Platform with dedicated accounts and permissions for job seekers and employers. Work permit management, Arraigo regularization sponsorship, and legal contracting.",
    stat_jobs: "Active Openings",
    stat_contracts: "Contracts Facilitated",
    stat_provinces: "Spanish Provinces",
    stat_verified: "Verified Employers",

    search_keyword_placeholder: "Job title, trade, or keywords (e.g. chef, builder, farm worker)...",
    search_province_all: "All Spanish Provinces",
    search_sector_all: "All Sectors",
    btn_search: "Find Jobs",
    quick_tags_label: "Trending:",

    filter_title: "Search Filters",
    filter_permit_title: "Legal / Work Permit Status",
    filter_permit_all: "Any Status",
    filter_permit_arraigo: "Accepts pre-contract for Arraigo (Residency)",
    filter_permit_nie: "Requires valid work permit (NIE)",
    filter_housing_title: "Perks & Benefits",
    filter_housing_only: "Accommodation Included",
    filter_contract_title: "Contract Type",
    filter_contract_all: "All Contracts",
    filter_contract_indefinido: "Permanent (Indefinido)",
    filter_contract_temporal: "Seasonal / Temporary",
    filter_contract_fijo: "Fixed-Discontinuous",
    filter_clear: "Reset filters",
    results_found: "jobs found",

    badge_verified: "Verified",
    badge_arraigo: "Accepts Arraigo Pre-contract",
    badge_nie_req: "Work permit required",
    badge_housing: "Housing included",
    btn_apply: "Apply Now",
    btn_whatsapp: "HR WhatsApp",
    btn_save: "Save",
    btn_saved: "Saved",
    posted_on: "Posted",
    salary_unit: "€/month",

    // Auth Modal
    modal_auth_title: "Access IberTrabajo",
    tab_login: "Sign In",
    tab_register: "Create New Account",
    auth_email: "Email Address",
    auth_password: "Password",
    auth_role_title: "Select account type:",
    role_candidate_desc: "Look for jobs, build my Spanish resume, and apply to jobs with or without work permits.",
    role_employer_desc: "Post job openings, manage applicants on the ATS pipeline, and search the talent database.",
    auth_candidatename: "Full Name",
    auth_companyname: "Company or Employer Name",
    auth_cif: "Company Tax ID (CIF / NIF)",
    auth_contactperson: "HR or Recruitment Contact Person",
    auth_phone: "Phone / WhatsApp",
    auth_province: "Province in Spain",
    auth_profession: "Primary Occupation / Trade",
    auth_legal_status: "Legal / Residency Status in Spain",
    status_nie_valid: "Valid Spanish Work & Residency Permit (NIE/TIE)",
    status_nie_renewal: "Renewal in progress (En trámite)",
    status_arraigo_needed: "Seeking pre-contract for Arraigo (Legalization)",
    status_eu_citizen: "Spanish Citizen or EU Passport Holder",
    status_origin_visa: "Abroad (Seeking Work Visa from origin country)",
    btn_do_login: "Sign In to My Account",
    btn_do_register: "Register Account",
    demo_box_title: "Quick 1-Click Demo Login (No password needed):",
    demo_as_candidate: "Login as Candidate (Ahmed)",
    demo_as_employer: "Login as Employer (Taberna Ibérica)",

    // Application Modal
    modal_apply_title: "Submit Job Application",
    btn_submit_application: "Send Application to Employer",

    // Post Job Modal
    modal_post_title: "Post a New Job Opening",
    form_job_title: "Job Title",
    form_company_name: "Company or Employer Name",
    form_cif: "Company Tax ID (CIF / NIF)",
    form_sector: "Industry Sector",
    form_salary: "Monthly Net / Gross Salary (€)",
    form_salary_help: "Must comply with Spain Minimum Wage (SMI) or collective bargaining agreement.",
    form_contract_type: "Contract Type",
    form_arraigo_support: "Is the company willing to issue a pre-contract for Arraigo (residency)?",
    form_yes: "Yes, we support legalization",
    form_no: "No, valid permit required upfront",
    form_housing_support: "Does this job include worker housing/accommodation?",
    form_job_desc: "Job description, responsibilities and requirements",
    form_whatsapp_contact: "HR WhatsApp phone number (e.g. 34612345678)",
    btn_publish_job: "Publish Job Offer",

    // ATS
    ats_title: "Applicant Tracking System (ATS)",
    ats_subtitle: "Exclusive for Employers: organize and advance applicants in real time",
    ats_col_applied: "New Applicants",
    ats_col_reviewing: "Under Review",
    ats_col_interview: "Interview Scheduled",
    ats_col_hired: "Hired & Contracted",

    // My Offers
    my_offers_title: "My Posted Job Vacancies",
    my_offers_subtitle: "Manage your company job openings and view applicant counts",
    btn_delete_offer: "Delete",
    btn_view_applicants: "View Candidates",

    // Talents
    talents_title: "Candidate Talent Pool in Spain",
    talents_subtitle: "Exclusive for Employers: contact available candidates directly on WhatsApp",
    btn_contact_talent: "Contact via WhatsApp",

    // CV Builder
    cv_title: "Spanish Standard CV Builder",
    cv_subtitle: "Generate a professional Europass-styled Spanish resume in seconds",
    cv_export_btn: "Print / Export to PDF",

    // Legal Guide
    guide_title: "Spanish Labor & Immigration Legal Guide",
    guide_subtitle: "Clear insights on Spanish immigration regulations, Arraigo work contracts, and employee rights"
  }
};

// --- 2. BASE DE DATOS INICIAL DE USUARIOS (CANDIDATOS Y EMPLEADORES) ---
const INITIAL_USERS = [
  {
    id: "usr-cand-1",
    role: "candidate",
    name: "Ahmed Mansouri",
    email: "ahmed@candidato.es",
    password: "123",
    phone: "+34 612 345 678",
    province: "Madrid",
    profession: "Cocinero & Ayudante de Hostelería",
    legalStatus: "status_arraigo_needed",
    skills: "Cocina tradicional española, manipulación de alimentos, corte, parrilla",
    experience: "3 años en Restaurante El Olivo (Madrid) como ayudante de cocina.\n2 años de experiencia previa en sector hostelero.",
    languages: "Árabe (Nativo), Español (Fluido / B2), Francés (Básico)",
    education: "Certificado de Profesionalidad en Cocina - Madrid"
  },
  {
    id: "usr-cand-2",
    role: "candidate",
    name: "Karim Hadad",
    email: "karim@candidato.es",
    password: "123",
    phone: "+34 655 432 109",
    province: "Almería",
    profession: "Peón Agrícola Especializado & Carretillero",
    legalStatus: "status_nie_valid",
    skills: "Recolección invernadero, carnet de carretillero, riego por goteo, mantenimiento",
    experience: "4 años de trabajo continuo en explotaciones agrícolas en Campo de Dalías (Almería).",
    languages: "Árabe (Nativo), Español (Avanzado)",
    education: "Carnet de Carretillero homologado (UNE 58451)"
  },
  {
    id: "usr-cand-3",
    role: "candidate",
    name: "Fatima Ezzahra",
    email: "fatima@candidato.es",
    password: "123",
    phone: "+34 677 889 900",
    province: "Barcelona",
    profession: "Cuidadora Sociosanitaria & Servicios del Hogar",
    legalStatus: "status_nie_valid",
    skills: "Atención a personas dependientes, geriatría, cocina dietética, primeros auxilios",
    experience: "3 años atendiendo a personas mayores con movilidad reducida en Barcelona y Hospitalet.",
    languages: "Árabe (Nativo), Español (Fluido), Catalán (Básico)",
    education: "Certificado de Atención Sociosanitaria a Personas Dependientes en Instituciones Sociales"
  },
  {
    id: "usr-emp-1",
    role: "employer",
    name: "Restaurante Taberna Ibérica S.L.",
    email: "contacto@tabernaiberica.es",
    password: "123",
    cif: "B-84930211",
    contactPerson: "María Gómez (Directora RRHH)",
    phone: "+34 611 22 33 44",
    province: "Madrid",
    sector: "Hostelería",
    verified: true,
    bio: "Grupo hostelero tradicional en el centro de Madrid con más de 15 años de trayectoria."
  },
  {
    id: "usr-emp-2",
    role: "employer",
    name: "AgroSur Levante S.L.",
    email: "info@agrosurlevante.es",
    password: "123",
    cif: "B-04128934",
    contactPerson: "Javier Navarro (Gerente)",
    phone: "+34 655 44 33 22",
    province: "Almería",
    sector: "Agricultura",
    verified: true,
    bio: "Empresa líder en producción y exportación hortofrutícola en Almería."
  }
];

// Base de datos de ofertas iniciales
const INITIAL_JOBS = [
  {
    id: "job-1",
    employerId: "usr-emp-1",
    title: {
      es: "Ayudante de Cocina y Planchista",
      ar: "مساعد طباخ ومسؤول الشواء",
      en: "Kitchen Assistant & Grill Cook"
    },
    company: "Restaurante Taberna Ibérica S.L.",
    cif: "B-84930211",
    province: "Madrid",
    city: "Madrid Centro (Lavapiés)",
    sector: "Hostelería",
    salary: 1480,
    salaryType: "neto",
    contractType: "indefinido",
    arraigoOk: true,
    nieRequired: false,
    hasHousing: false,
    verified: true,
    whatsapp: "34611223344",
    postedDaysAgo: 1,
    description: {
      es: "Buscamos ayudante de cocina con experiencia en comida tradicional y manejo de plancha. 40h semanales, dos días libres consecutivos. Ofrecemos formalizar precontrato de trabajo para regularización por Arraigo Social o Sociolaboral si el candidato reúne los requisitos de permanencia en España.",
      ar: "مطلوب مساعد طباخ ذو خبرة في الطهي والشواء. 40 ساعة أسبوعياً مع يومين راحة متتاليين. نحن مستعدون لتقديم عقد عمل رسمي (Precontrato) لتسوية الوضعية القانونية (Arraigo) للمترشح المستوفي لشروط الإقامة في إسبانيا.",
      en: "Seeking a kitchen assistant with experience in traditional food and grilling. 40 hours/week, 2 consecutive days off. We are willing to issue an official pre-contract for Arraigo Social/Sociolaboral legalization if the applicant qualifies."
    },
    skills: ["Hostelería", "Cocina", "Manipulador de Alimentos", "Trabajo en equipo"]
  },
  {
    id: "job-2",
    employerId: "usr-emp-2",
    title: {
      es: "Peón Agrícola / Recolección en Invernaderos",
      ar: "عامل فلاحي لجني المحاصيل في البيوت البلاستيكية",
      en: "Agricultural Worker / Greenhouse Harvesting"
    },
    company: "AgroSur Levante S.L.",
    cif: "B-04128934",
    province: "Almería",
    city: "El Ejido / Roquetas de Mar",
    sector: "Agricultura",
    salary: 1390,
    salaryType: "neto",
    contractType: "fijo",
    arraigoOk: true,
    nieRequired: false,
    hasHousing: true,
    verified: true,
    whatsapp: "34655443322",
    postedDaysAgo: 2,
    description: {
      es: "Contratación para campaña de recolección de hortalizas en invernadero (tomate y pimiento). Convenio del campo de Almería. Se facilita alojamiento en finca para trabajadores de fuera de la provincia. Apoyamos tramitación de contrato para extranjería a trabajadores con arraigo demostrable.",
      ar: "مطلوب عمال للموسم الفلاحي لجني الخضروات في البيوت البلاستيكية (طماطم وفلفل). وفق اتفاقية العمل الفلاحي بألميريا. يتوفر سكن داخل المزرعة للعمال القادمين من خارج المنطقة. نوفر عقد عمل لتسوية الوضعية عبر الأرايغو لمن يثبت إقامته بإسبانيا.",
      en: "Hiring for vegetable harvesting campaign in greenhouses. Almeria agricultural union agreement. Housing is provided on the farm for workers relocating. We support immigration contract processing for eligible arraigo workers."
    },
    skills: ["Agricultura", "Invernadero", "Carga", "Convivencia"]
  },
  {
    id: "job-3",
    employerId: "usr-emp-ext",
    title: {
      es: "Oficial de 1ª de Albañilería y Reformas",
      ar: "معلم بناء وتجديدات (Oficial de 1ª)",
      en: "Senior Bricklayer & Renovation Builder"
    },
    company: "Construcciones y Reformas Mediterráneo",
    cif: "B-46781290",
    province: "Valencia",
    city: "Valencia / Paterna",
    sector: "Construcción",
    salary: 1750,
    salaryType: "neto",
    contractType: "indefinido",
    arraigoOk: false,
    nieRequired: true,
    hasHousing: false,
    verified: true,
    whatsapp: "34699887766",
    postedDaysAgo: 3,
    description: {
      es: "Empresa constructora precisa oficial de primera para reformas de viviendas y locales en Valencia. Imprescindible curso de 20 horas de prevención de riesgos laborales de la construcción (PRL) y permiso de trabajo en regla.",
      ar: "شركة بناء وتشطيبات تطلب معلم بناء من الدرجة الأولى لتجديد المنازل والمحلات في فالنسيا. يشترط التوفر على دورة السلامة المهنية (PRL 20h) وبطاقة عمل سارية المفعول (NIE).",
      en: "Construction company requires an experienced bricklayer for apartment and shop renovations in Valencia. Must have the 20-hour construction occupational risk prevention certificate (PRL) and valid work authorization in Spain."
    },
    skills: ["Albañilería", "Alicatado", "Curso PRL 20h", "Yeso y Pladur"]
  },
  {
    id: "job-4",
    employerId: "usr-emp-ext2",
    title: {
      es: "Cuidadora Interna para Persona Mayor",
      ar: "مرافقة ومقدمة رعاية مسنين (نظام الإقامة الكاملة Interna)",
      en: "Live-in Caregiver for Elderly Person"
    },
    company: "Familia García / ServiHogar",
    cif: "F-28941032",
    province: "Barcelona",
    city: "Barcelona (Sarrià - Sant Gervasi)",
    sector: "Servicios y Cuidados",
    salary: 1323,
    salaryType: "neto",
    contractType: "indefinido",
    arraigoOk: true,
    nieRequired: false,
    hasHousing: true,
    verified: true,
    whatsapp: "34622334455",
    postedDaysAgo: 1,
    description: {
      es: "Atención a señora de 82 años con movilidad reducida. Labores de compañía, preparación de comidas y control de medicación. Habitación individual con baño propio, manutención completa y 36 horas libres de fin de semana según ley. Ofrecemos alta en Seguridad Social con contrato para arraigo.",
      ar: "مطلوب سيدة لرعاية سيدة مسنة (82 سنة) بنظام المبيت (Interna). إعداد الوجبات، المرافقة وتنظيم الأدوية. غرفة خاصة مع حمام، التغذية متوفرة، وراحة أسبوعية 36 ساعة وفق القانون الإسباني. إمكانية تقديم عقد عمل لتسوية الإقامة.",
      en: "Live-in caregiver for an 82-year-old lady with reduced mobility. Companionship, cooking, and medication management. Private room with bathroom, full board, and 36 consecutive hours weekend off per Spanish law."
    },
    skills: ["Cuidados", "Primeros Auxilios", "Cocina Española", "Paciencia"]
  }
];

const SPANISH_PROVINCES = [
  "A Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", 
  "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", 
  "Córdoba", "Cuenca", "Girona", "Granada", "Guadalajara", "Gipuzkoa", "Huelva", "Huesca", 
  "Illes Balears", "Jaén", "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid", 
  "Málaga", "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra", "Salamanca", 
  "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", 
  "Toledo", "Valencia", "Valladolid", "Bizkaia", "Zamora", "Zaragoza", "Ceuta", "Melilla"
];

const SECTORS = [
  "Hostelería", "Agricultura", "Construcción", "Servicios y Cuidados", 
  "Logística y Almacén", "Limpieza", "Electricidad y Energía", 
  "Administrativo y Asesoría", "Comercio", "Tecnología e Informática"
];

// --- 3. ESTADO GLOBAL DE LA APLICACIÓN (APP STATE) ---
class AppState {
  constructor() {
    this.lang = localStorage.getItem("iber_lang") || "es";
    this.activeTab = "jobs";
    
    // Usuarios y Autenticación
    const savedUsers = localStorage.getItem("iber_users");
    this.users = savedUsers ? JSON.parse(savedUsers) : INITIAL_USERS;

    const savedAuth = localStorage.getItem("iber_auth_user");
    this.currentUser = savedAuth ? JSON.parse(savedAuth) : null;

    // Ofertas
    const savedJobs = localStorage.getItem("iber_jobs");
    this.jobs = savedJobs ? JSON.parse(savedJobs) : INITIAL_JOBS;

    // Guardados
    const savedBookmarks = localStorage.getItem("iber_saved_jobs");
    this.savedJobIds = savedBookmarks ? JSON.parse(savedBookmarks) : [];

    // Solicitudes
    const savedApps = localStorage.getItem("iber_applications");
    this.applications = savedApps ? JSON.parse(savedApps) : [
      {
        id: "app-101",
        jobId: "job-1",
        employerId: "usr-emp-1",
        jobTitle: "Ayudante de Cocina y Planchista",
        company: "Restaurante Taberna Ibérica S.L.",
        candidateId: "usr-cand-1",
        candidateName: "Ahmed Mansouri",
        candidatePhone: "+34 612 345 678",
        candidateLegal: "status_arraigo_needed",
        appliedDate: "2026-11-20",
        stage: "reviewing"
      },
      {
        id: "app-102",
        jobId: "job-2",
        employerId: "usr-emp-2",
        jobTitle: "Peón Agrícola / Recolección en Invernaderos",
        company: "AgroSur Levante S.L.",
        candidateId: "usr-cand-2",
        candidateName: "Karim Hadad",
        candidatePhone: "+34 655 432 109",
        candidateLegal: "status_nie_valid",
        appliedDate: "2026-11-19",
        stage: "applied"
      }
    ];

    // Filtros
    this.filters = {
      keyword: "",
      province: "",
      sector: "",
      permit: "all",
      contract: "all",
      housing: false
    };

    // CV Data
    this.cvData = JSON.parse(localStorage.getItem("iber_cv")) || {
      fullName: "Ahmed Mansouri",
      profession: "Cocinero & Ayudante de Hostelería",
      phone: "+34 612 345 678",
      email: "ahmed.mansouri@ejemplo.es",
      province: "Madrid",
      legalStatus: "Sin permiso vigente (Busco precontrato para Arraigo)",
      languages: "Árabe (Nativo), Español (Fluido / B2), Francés (Básico)",
      skills: "Cocina tradicional española, manipulación de alimentos, corte, parrilla",
      experience: "3 años en Restaurante El Olivo (Madrid) como ayudante de cocina.\n2 años de experiencia previa en sector hostelero.",
      education: "Certificado de Profesionalidad en Cocina - Madrid"
    };
  }

  saveUsers() {
    localStorage.setItem("iber_users", JSON.stringify(this.users));
  }

  saveJobs() {
    localStorage.setItem("iber_jobs", JSON.stringify(this.jobs));
  }

  saveApplications() {
    localStorage.setItem("iber_applications", JSON.stringify(this.applications));
  }

  saveBookmarks() {
    localStorage.setItem("iber_saved_jobs", JSON.stringify(this.savedJobIds));
  }

  saveCV() {
    localStorage.setItem("iber_cv", JSON.stringify(this.cvData));
  }

  // --- MÉTODOS DE AUTENTICACIÓN ---
  login(email, password) {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) {
      showToast(this.lang === 'ar' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Correo electrónico o contraseña incorrectos', "error");
      return false;
    }
    this.currentUser = user;
    localStorage.setItem("iber_auth_user", JSON.stringify(user));
    
    // Redirigir a vista según rol
    if (user.role === "employer") {
      this.activeTab = "ats";
    } else {
      this.activeTab = "jobs";
      if (user.profession) this.cvData.profession = user.profession;
      if (user.name) this.cvData.fullName = user.name;
      if (user.phone) this.cvData.phone = user.phone;
      if (user.province) this.cvData.province = user.province;
      this.saveCV();
    }

    closeAuthModal();
    showToast(
      this.lang === 'ar' ? `مرحباً بك مجدداً، ${user.name}!` : `¡Bienvenido/a de nuevo, ${user.name}!`,
      "success"
    );
    this.render();
    return true;
  }

  register(userData) {
    const exists = this.users.some(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (exists) {
      showToast(this.lang === 'ar' ? 'هذا البريد الإلكتروني مسجل بالفعل' : 'Este correo electrónico ya está registrado', "error");
      return false;
    }

    const newUser = {
      id: "usr-" + Date.now(),
      ...userData
    };

    this.users.push(newUser);
    this.saveUsers();

    this.currentUser = newUser;
    localStorage.setItem("iber_auth_user", JSON.stringify(newUser));

    if (newUser.role === "employer") {
      this.activeTab = "my-offers";
    } else {
      this.activeTab = "jobs";
      this.cvData.fullName = newUser.name;
      this.cvData.email = newUser.email;
      this.cvData.phone = newUser.phone;
      this.cvData.province = newUser.province;
      if (newUser.profession) this.cvData.profession = newUser.profession;
      this.saveCV();
    }

    closeAuthModal();
    showToast(
      this.lang === 'ar' ? `تم إنشاء حسابك بنجاح كـ ${newUser.role === 'employer' ? 'مشغل' : 'باحث عن عمل'}!` : `¡Cuenta creada con éxito como ${newUser.role === 'employer' ? 'Empresa' : 'Candidato'}!`,
      "success"
    );
    this.render();
    return true;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("iber_auth_user");
    this.activeTab = "jobs";
    showToast(this.lang === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Sesión cerrada correctamente', "info");
    this.render();
  }

  quickDemoLogin(role) {
    if (role === "candidate") {
      this.login("ahmed@candidato.es", "123");
    } else {
      this.login("contacto@tabernaiberica.es", "123");
    }
  }

  setLanguage(newLang) {
    this.lang = newLang;
    localStorage.setItem("iber_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = (newLang === "ar") ? "rtl" : "ltr";
    this.render();
  }

  toggleSaveJob(jobId) {
    const idx = this.savedJobIds.indexOf(jobId);
    if (idx === -1) {
      this.savedJobIds.push(jobId);
      showToast(this.t("btn_saved"), "success");
    } else {
      this.savedJobIds.splice(idx, 1);
    }
    this.saveBookmarks();
    this.renderJobsList();
  }

  t(key) {
    return (TRANSLATIONS[this.lang] && TRANSLATIONS[this.lang][key]) || 
           (TRANSLATIONS["es"] && TRANSLATIONS["es"][key]) || 
           key;
  }

  getJobLocalized(job, field) {
    if (typeof job[field] === "object" && job[field] !== null) {
      return job[field][this.lang] || job[field]["es"] || "";
    }
    return job[field] || "";
  }
}

const state = new AppState();

// --- 4. MOTOR DE RENDERIZADO Y CONTROL DE NAVEGACIÓN ---

function initApp() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = (state.lang === "ar") ? "rtl" : "ltr";
  
  populateProvinces();
  populateSectors();
  setupEventListeners();
  state.render();
}

AppState.prototype.render = function() {
  applyTranslations();
  this.renderNavbar();

  const views = {
    jobs: document.getElementById("jobs-view"),
    ats: document.getElementById("ats-view"),
    "my-offers": document.getElementById("my-offers-view"),
    talents: document.getElementById("talents-view"),
    cv: document.getElementById("cv-view"),
    "my-apps": document.getElementById("my-apps-view"),
    guide: document.getElementById("guide-view")
  };

  Object.keys(views).forEach(k => {
    if (views[k]) views[k].style.display = (this.activeTab === k) ? "block" : "none";
  });

  if (this.activeTab === "jobs") {
    this.renderJobsList();
  } else if (this.activeTab === "ats") {
    this.renderAtsBoard();
  } else if (this.activeTab === "my-offers") {
    this.renderMyOffers();
  } else if (this.activeTab === "talents") {
    this.renderTalentsPool();
  } else if (this.activeTab === "cv") {
    this.renderCVPreview();
  } else if (this.activeTab === "my-apps") {
    this.renderMyApplications();
  }
};

AppState.prototype.renderNavbar = function() {
  const navContainer = document.getElementById("nav-links-list");
  const authContainer = document.getElementById("nav-auth-container");
  if (!navContainer || !authContainer) return;

  let navItemsHtml = `
    <li><a href="#" class="nav-link ${this.activeTab === 'jobs' ? 'active' : ''}" data-tab="jobs">${this.t("nav_explore")}</a></li>
  `;

  if (this.currentUser) {
    if (this.currentUser.role === "candidate") {
      const myCount = this.applications.filter(a => a.candidateId === this.currentUser.id || a.candidateName === this.currentUser.name).length;
      navItemsHtml += `
        <li><a href="#" class="nav-link ${this.activeTab === 'my-apps' ? 'active' : ''}" data-tab="my-apps">${this.t("nav_my_apps")} (${myCount})</a></li>
        <li><a href="#" class="nav-link ${this.activeTab === 'cv' ? 'active' : ''}" data-tab="cv">${this.t("nav_cv")}</a></li>
      `;
    } else if (this.currentUser.role === "employer") {
      navItemsHtml += `
        <li><a href="#" class="nav-link ${this.activeTab === 'ats' ? 'active' : ''}" data-tab="ats">${this.t("nav_ats")}</a></li>
        <li><a href="#" class="nav-link ${this.activeTab === 'my-offers' ? 'active' : ''}" data-tab="my-offers">${this.t("nav_my_offers")}</a></li>
        <li><a href="#" class="nav-link ${this.activeTab === 'talents' ? 'active' : ''}" data-tab="talents">${this.t("nav_talents")}</a></li>
      `;
    }
  }

  navItemsHtml += `
    <li><a href="#" class="nav-link ${this.activeTab === 'guide' ? 'active' : ''}" data-tab="guide">${this.t("nav_guide")}</a></li>
  `;

  navContainer.innerHTML = navItemsHtml;

  navContainer.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = link.getAttribute("data-tab");
      if (tab) switchTab(tab);
    });
  });

  if (this.currentUser) {
    const isEmployer = this.currentUser.role === "employer";
    authContainer.innerHTML = `
      <div class="user-nav-profile" title="${this.currentUser.name}">
        <div class="user-avatar ${isEmployer ? 'employer' : ''}">
          ${isEmployer ? '🏢' : '👤'}
        </div>
        <div class="user-meta-header">
          <span class="user-name-text">${this.currentUser.name}</span>
          <span class="role-badge-pill ${this.currentUser.role}">
            ${isEmployer ? '🏢 ' + this.t("role_employer") : '🧑‍🔧 ' + this.t("role_candidate")}
          </span>
        </div>
      </div>
      <button class="btn btn-outline btn-sm" onclick="state.logout()" title="${this.t('nav_logout')}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        <span>${this.t("nav_logout")}</span>
      </button>
    `;
  } else {
    authContainer.innerHTML = `
      <button class="btn btn-outline btn-sm" onclick="openAuthModal('login')">
        ${this.t("nav_login")}
      </button>
      <button class="btn btn-primary btn-sm" onclick="openAuthModal('register')">
        ${this.t("nav_register")}
      </button>
    `;
  }

  const postBtn = document.getElementById("header-post-job-btn");
  if (postBtn) {
    if (this.currentUser && this.currentUser.role === "candidate") {
      postBtn.style.display = "none";
    } else {
      postBtn.style.display = "inline-flex";
    }
  }
};

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    elem.textContent = state.t(key);
  });
  
  document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-placeholder");
    elem.placeholder = state.t(key);
  });

  const langSelect = document.getElementById("lang-switcher");
  if (langSelect) langSelect.value = state.lang;
}

function populateProvinces() {
  const selects = [
    document.getElementById("search-province"),
    document.getElementById("post-job-province"),
    document.getElementById("apply-province"),
    document.getElementById("auth-province-candidate"),
    document.getElementById("auth-province-employer")
  ];
  selects.forEach(sel => {
    if (!sel) return;
    const firstOption = sel.firstElementChild;
    sel.innerHTML = "";
    if (firstOption) sel.appendChild(firstOption);
    SPANISH_PROVINCES.forEach(prov => {
      const opt = document.createElement("option");
      opt.value = prov;
      opt.textContent = prov;
      sel.appendChild(opt);
    });
  });
}

function populateSectors() {
  const selects = [document.getElementById("search-sector"), document.getElementById("post-job-sector"), document.getElementById("auth-sector-employer")];
  selects.forEach(sel => {
    if (!sel) return;
    const firstOption = sel.firstElementChild;
    sel.innerHTML = "";
    if (firstOption) sel.appendChild(firstOption);
    SECTORS.forEach(sec => {
      const opt = document.createElement("option");
      opt.value = sec;
      opt.textContent = sec;
      sel.appendChild(opt);
    });
  });
}

// --- 5. RENDERIZADO DE OFERTAS DE TRABAJO ---
AppState.prototype.renderJobsList = function() {
  const container = document.getElementById("jobs-container");
  const countElem = document.getElementById("results-count-number");
  if (!container) return;

  const filtered = this.jobs.filter(job => {
    if (this.filters.keyword) {
      const kw = this.filters.keyword.toLowerCase();
      const titleEs = (job.title.es || "").toLowerCase();
      const titleAr = (job.title.ar || "").toLowerCase();
      const descEs = (job.description.es || "").toLowerCase();
      const company = (job.company || "").toLowerCase();
      const skills = (job.skills || []).join(" ").toLowerCase();
      if (!titleEs.includes(kw) && !titleAr.includes(kw) && !descEs.includes(kw) && !company.includes(kw) && !skills.includes(kw)) {
        return false;
      }
    }
    if (this.filters.province && job.province !== this.filters.province) return false;
    if (this.filters.sector && job.sector !== this.filters.sector) return false;
    if (this.filters.permit === "arraigo" && !job.arraigoOk) return false;
    if (this.filters.permit === "nie" && !job.nieRequired) return false;
    if (this.filters.housing && !job.hasHousing) return false;
    if (this.filters.contract !== "all" && job.contractType !== this.filters.contract) return false;
    return true;
  });

  if (countElem) countElem.textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
        <p style="font-size: 1.25rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.5rem;">
          ${state.lang === 'ar' ? 'لم يتم العثور على عروض مطابقة' : 'No se encontraron ofertas con estos criterios'}
        </p>
        <button class="btn btn-primary btn-sm" onclick="clearAllFilters()">
          ${state.t("filter_clear")}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(job => {
    const isSaved = state.savedJobIds.includes(job.id);
    const title = state.getJobLocalized(job, "title");
    const desc = state.getJobLocalized(job, "description");
    
    return `
      <div class="job-card ${job.arraigoOk ? 'featured' : ''}" data-job-id="${job.id}">
        <div class="job-card-top">
          <div class="job-main-info">
            <div class="company-avatar">
              ${job.company.substring(0, 2).toUpperCase()}
            </div>
            <div class="job-title-group">
              <h3>${title}</h3>
              <div class="job-company-name">
                <span>${job.company}</span>
                ${job.verified ? `<span class="verified-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> ${state.t("badge_verified")}</span>` : ''}
              </div>
            </div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="state.toggleSaveJob('${job.id}')" title="${state.t('btn_save')}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? '#d97706' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>

        <div class="job-meta-badges">
          <span class="meta-badge salary">💶 ${job.salary.toLocaleString()} ${state.t("salary_unit")} (${job.salaryType})</span>
          <span class="meta-badge">📍 ${job.city || job.province} (${job.province})</span>
          <span class="meta-badge">📑 ${job.contractType.toUpperCase()}</span>
          ${job.arraigoOk ? `<span class="meta-badge arraigo-badge">🤝 ${state.t("badge_arraigo")}</span>` : ''}
          ${job.nieRequired ? `<span class="meta-badge nie-badge">📋 ${state.t("badge_nie_req")}</span>` : ''}
          ${job.hasHousing ? `<span class="meta-badge housing-badge">🏠 ${state.t("badge_housing")}</span>` : ''}
        </div>

        <p class="job-description-preview">${desc}</p>

        <div class="job-tags-list">
          ${(job.skills || []).map(skill => `<span class="job-skill-tag">#${skill}</span>`).join('')}
        </div>

        <div class="job-card-footer">
          <span class="posted-date">
            🕒 ${state.t("posted_on")} ${job.postedDaysAgo} ${state.lang === 'ar' ? 'أيام' : (job.postedDaysAgo === 1 ? 'día' : 'días')}
          </span>
          <div class="job-card-actions">
            ${job.whatsapp ? `
              <a href="https://wa.me/${job.whatsapp}?text=${encodeURIComponent('Hola, me pongo en contacto desde IberTrabajo por la oferta de ' + title)}" target="_blank" class="btn btn-whatsapp btn-sm">
                💬 ${state.t("btn_whatsapp")}
              </a>
            ` : ''}
            <button class="btn btn-primary btn-sm" onclick="handleJobApplyClick('${job.id}')">
              ${state.t("btn_apply")}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

function handleJobApplyClick(jobId) {
  if (!state.currentUser) {
    showToast(state.lang === 'ar' ? 'يرجى تسجيل الدخول أو إنشاء حساب كباحث عن عمل للتقديم' : 'Por favor inicia sesión o crea una cuenta como Candidato para inscribirte', "warning");
    openAuthModal("login");
    return;
  }
  if (state.currentUser.role === "employer") {
    showToast(state.lang === 'ar' ? 'أنت مسجل بحساب مشغل (شركة). التقديم متاح فقط للباحثين عن عمل.' : 'Has iniciado sesión como Empresa. Las inscripciones son exclusivas para cuentas de Candidato.', "warning");
    return;
  }
  openApplyModal(jobId);
}

// --- 6. GESTIÓN DE CANDIDATURAS (ATS KANBAN PARA EMPRESAS) ---
AppState.prototype.renderAtsBoard = function() {
  const container = document.getElementById("ats-board-container");
  if (!container) return;

  if (!this.currentUser || this.currentUser.role !== "employer") {
    container.innerHTML = `
      <div class="access-denied-box">
        <div class="access-denied-icon">🔒</div>
        <h3 class="access-denied-title">${state.lang === 'ar' ? 'هذه اللوحة خاصة بأصحاب العمل والشركات' : 'Acceso Exclusivo para Empresas y Empleadores'}</h3>
        <p class="access-denied-desc">
          ${state.lang === 'ar' ? 'سجل دخولك بحساب مشغل لمتابعة المترشحين وفرز طلبات التوظيف عبر لوحة كانبان.' : 'Inicia sesión con tu cuenta de Empresa para gestionar las candidaturas y filtrar candidatos en el pipeline ATS.'}
        </p>
        <button class="btn btn-primary" onclick="state.quickDemoLogin('employer')">
          🏢 ${state.t("demo_as_employer")}
        </button>
      </div>
    `;
    return;
  }

  const myApplications = this.applications;

  const stages = [
    { key: "applied", titleKey: "ats_col_applied", cssClass: "status-applied" },
    { key: "reviewing", titleKey: "ats_col_reviewing", cssClass: "status-interview" },
    { key: "interview", titleKey: "ats_col_interview", cssClass: "status-offered" },
    { key: "hired", titleKey: "ats_col_hired", cssClass: "status-hired" }
  ];

  container.innerHTML = `
    <div class="ats-board">
      ${stages.map(stage => {
        const stageApps = myApplications.filter(app => app.stage === stage.key);
        return `
          <div class="ats-column">
            <div class="ats-column-header">
              <span class="ats-col-title">${state.t(stage.titleKey)}</span>
              <span class="ats-col-count">${stageApps.length}</span>
            </div>
            <div class="ats-cards-list" ondragover="event.preventDefault()" ondrop="handleDropAts(event, '${stage.key}')">
              ${stageApps.map(app => `
                <div class="ats-candidate-card" draggable="true" ondragstart="handleDragAts(event, '${app.id}')">
                  <div class="ats-card-name">👤 ${app.candidateName}</div>
                  <div class="ats-card-job">💼 ${app.jobTitle}</div>
                  <div class="ats-card-status-badge ${stage.cssClass}">
                    ${state.t(app.candidateLegal || 'status_nie_valid')}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    📞 ${app.candidatePhone}
                  </div>
                  <div class="ats-actions">
                    <button class="btn btn-outline btn-sm" style="flex: 1;" onclick="advanceCandidateStage('${app.id}')" title="Avanzar">
                      ➡️ ${state.lang === 'ar' ? 'المرحلة التالية' : 'Avanzar'}
                    </button>
                    <a href="https://wa.me/${app.candidatePhone.replace(/[^0-9]/g, '')}" target="_blank" class="btn btn-whatsapp btn-sm" title="WhatsApp">
                      💬
                    </a>
                  </div>
                </div>
              `).join('')}
              ${stageApps.length === 0 ? `
                <div style="text-align: center; padding: 2.5rem 0.5rem; color: var(--text-light); font-size: 0.85rem;">
                  ${state.lang === 'ar' ? 'لا توجد طلبات في هذه المرحلة' : 'Sin candidatos en esta fase'}
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
};

function advanceCandidateStage(appId) {
  const app = state.applications.find(a => a.id === appId);
  if (!app) return;
  const stageFlow = ["applied", "reviewing", "interview", "hired"];
  const curIdx = stageFlow.indexOf(app.stage);
  if (curIdx < stageFlow.length - 1) {
    app.stage = stageFlow[curIdx + 1];
    state.saveApplications();
    state.renderAtsBoard();
    showToast(state.lang === 'ar' ? 'تم تحديث مرحلة المترشح بنجاح' : 'Candidato avanzado a la siguiente fase', "success");
  }
}

let draggedAppId = null;
function handleDragAts(e, appId) {
  draggedAppId = appId;
  e.dataTransfer.setData("text/plain", appId);
}

function handleDropAts(e, targetStage) {
  e.preventDefault();
  if (!draggedAppId) return;
  const app = state.applications.find(a => a.id === draggedAppId);
  if (app) {
    app.stage = targetStage;
    state.saveApplications();
    state.renderAtsBoard();
    showToast(state.lang === 'ar' ? 'تم نقل المترشح' : 'Estado del candidato actualizado', "success");
  }
  draggedAppId = null;
}

// --- 7. MIS OFERTAS PUBLICADAS (EMPRESAS) ---
AppState.prototype.renderMyOffers = function() {
  const container = document.getElementById("my-offers-container");
  if (!container) return;

  if (!this.currentUser || this.currentUser.role !== "employer") {
    container.innerHTML = `
      <div class="access-denied-box">
        <div class="access-denied-icon">🏢</div>
        <h3 class="access-denied-title">${state.lang === 'ar' ? 'هذا القسم مخصص للشركات والمشغلين' : 'Sección Exclusiva para Empresas'}</h3>
        <p class="access-denied-desc">${state.lang === 'ar' ? 'سجل دخولك بحساب مشغل لإدارة عروضك الوظيفية.' : 'Inicia sesión con cuenta de Empresa para gestionar tus ofertas.'}</p>
        <button class="btn btn-primary" onclick="state.quickDemoLogin('employer')">${state.t("demo_as_employer")}</button>
      </div>
    `;
    return;
  }

  const myJobs = this.jobs.filter(j => j.employerId === this.currentUser.id || j.company.toLowerCase().includes(this.currentUser.name.toLowerCase().substring(0, 8)));

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
      <div>
        <h3 style="font-size: 1.35rem; font-weight: 700;">${this.currentUser.name} (${myJobs.length} ${state.lang === 'ar' ? 'عروض نشطة' : 'ofertas'})</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">CIF: ${this.currentUser.cif || 'B-84930211'} · ${this.currentUser.province || 'Madrid'}</p>
      </div>
      <button class="btn btn-primary" onclick="openPostJobModal()">
        ➕ ${state.t("nav_post_job")}
      </button>
    </div>

    <div class="employer-jobs-grid">
      ${myJobs.map(job => {
        const title = state.getJobLocalized(job, "title");
        const applicantCount = state.applications.filter(a => a.jobId === job.id).length;
        return `
          <div class="employer-job-item">
            <div>
              <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">${title}</h4>
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; font-size: 0.85rem; color: var(--text-muted);">
                <span>📍 ${job.province}</span>
                <span>💶 ${job.salary} €/mes</span>
                <span>📑 ${job.contractType}</span>
                ${job.arraigoOk ? '<span style="color: #b45309; font-weight: 700;">🤝 Arraigo OK</span>' : ''}
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <button class="btn btn-outline btn-sm" onclick="switchTab('ats')">
                👥 ${applicantCount} ${state.lang === 'ar' ? 'مترشحين' : 'candidatos'}
              </button>
              <button class="btn btn-outline btn-sm" style="color: var(--danger); border-color: #fecaca;" onclick="deleteJobOffer('${job.id}')">
                🗑️ ${state.t("btn_delete_offer")}
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
};

function deleteJobOffer(jobId) {
  if (confirm(state.lang === 'ar' ? 'هل أنت متأكد من رغبتك في حذف هذا العرض؟' : '¿Estás seguro de que deseas eliminar esta oferta?')) {
    state.jobs = state.jobs.filter(j => j.id !== jobId);
    state.saveJobs();
    state.renderMyOffers();
    state.renderJobsList();
    showToast(state.lang === 'ar' ? 'تم حذف عرض العمل' : 'Oferta eliminada correctamente', "info");
  }
}

// --- 8. BASE DE TALENTOS (EMPRESAS) ---
AppState.prototype.renderTalentsPool = function() {
  const container = document.getElementById("talents-container");
  if (!container) return;

  if (!this.currentUser || this.currentUser.role !== "employer") {
    container.innerHTML = `
      <div class="access-denied-box">
        <div class="access-denied-icon">👥</div>
        <h3 class="access-denied-title">${state.lang === 'ar' ? 'قاعدة الكفاءات خاصة بالشركات المشغلة' : 'Base de Talentos Exclusiva para Empresas'}</h3>
        <p class="access-denied-desc">${state.lang === 'ar' ? 'سجل دخولك بحساب مشغل للاطلاع على بروفايلات العمال والتواصل معهم مباشرة.' : 'Inicia sesión como Empresa para acceder a perfiles de candidatos y contactar por WhatsApp.'}</p>
        <button class="btn btn-primary" onclick="state.quickDemoLogin('employer')">${state.t("demo_as_employer")}</button>
      </div>
    `;
    return;
  }

  const candidates = this.users.filter(u => u.role === "candidate");

  container.innerHTML = `
    <div class="talent-grid">
      ${candidates.map(cand => `
        <div class="talent-card">
          <div>
            <div class="talent-card-header">
              <div class="talent-avatar">${cand.name.substring(0, 2).toUpperCase()}</div>
              <div>
                <h4 class="talent-name">${cand.name}</h4>
                <div class="talent-profession">${cand.profession || 'Profesional'}</div>
                <div class="talent-location">📍 ${cand.province || 'España'}</div>
              </div>
            </div>
            
            <div style="font-size: 0.825rem; font-weight: 600; color: #1e40af; background: #eff6ff; padding: 0.25rem 0.5rem; border-radius: 4px; margin-bottom: 0.65rem;">
              ⚖️ ${state.t(cand.legalStatus || 'status_nie_valid')}
            </div>

            <p style="font-size: 0.85rem; color: #475569; margin-bottom: 0.65rem; line-height: 1.4;">
              ${cand.experience ? cand.experience.substring(0, 100) + '...' : 'Experiencia contrastada en el sector.'}
            </p>

            <div class="talent-skills-tags">
              ${(cand.skills || 'Hostelería, Responsabilidad').split(',').map(s => `<span class="talent-tag">#${s.trim()}</span>`).join('')}
            </div>
          </div>

          <div style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 0.85rem;">
            <a href="https://wa.me/${(cand.phone || '34612345678').replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hola ' + cand.name + ', hemos visto tu perfil en IberTrabajo y nos gustaría proponerte una oferta laboral.')}" target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%;">
              💬 ${state.t("btn_contact_talent")}
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

// --- 9. CREADOR DE CV EN ESPAÑOL ---
AppState.prototype.renderCVPreview = function() {
  const container = document.getElementById("cv-preview-sheet");
  if (!container) return;

  const cv = this.cvData;
  container.innerHTML = `
    <div class="cv-header-print">
      <h1 class="cv-name">${cv.fullName}</h1>
      <div class="cv-profession">${cv.profession}</div>
      <div class="cv-contact-row">
        <span>📍 ${cv.province}, España</span>
        <span>📞 ${cv.phone}</span>
        <span>✉️ ${cv.email}</span>
      </div>
    </div>

    <div class="cv-section">
      <div class="cv-section-title">⚖️ Situación Administrativa / Extranjería</div>
      <p style="font-size: 0.95rem; font-weight: 600; color: #1e3a8a;">${cv.legalStatus}</p>
    </div>

    <div class="cv-section">
      <div class="cv-section-title">💼 Experiencia Laboral</div>
      <div style="font-size: 0.925rem; white-space: pre-line; line-height: 1.6;">${cv.experience}</div>
    </div>

    <div class="cv-section">
      <div class="cv-section-title">🎓 Formación y Certificados</div>
      <div style="font-size: 0.925rem; white-space: pre-line; line-height: 1.6;">${cv.education}</div>
    </div>

    <div class="cv-section">
      <div class="cv-section-title">🌐 Idiomas</div>
      <div style="font-size: 0.925rem;">${cv.languages}</div>
    </div>

    <div class="cv-section">
      <div class="cv-section-title">⚡ Habilidades y Competencias</div>
      <div style="font-size: 0.925rem;">${cv.skills}</div>
    </div>
  `;
};

function saveCVForm(e) {
  e.preventDefault();
  state.cvData = {
    fullName: document.getElementById("cv-name-input").value,
    profession: document.getElementById("cv-profession-input").value,
    phone: document.getElementById("cv-phone-input").value,
    email: document.getElementById("cv-email-input").value,
    province: document.getElementById("cv-province-input").value,
    legalStatus: document.getElementById("cv-legal-input").value,
    languages: document.getElementById("cv-languages-input").value,
    skills: document.getElementById("cv-skills-input").value,
    experience: document.getElementById("cv-experience-input").value,
    education: document.getElementById("cv-education-input").value
  };
  state.saveCV();
  state.renderCVPreview();
  showToast(state.lang === 'ar' ? 'تم حفظ وتحديث السيرة الذاتية بنجاح' : 'Currículum actualizado correctamente', "success");
}

function printCV() {
  window.print();
}

// --- 10. MIS SOLICITUDES (CANDIDATO) ---
AppState.prototype.renderMyApplications = function() {
  const container = document.getElementById("my-apps-container");
  if (!container) return;

  if (!this.currentUser || this.currentUser.role !== "candidate") {
    container.innerHTML = `
      <div class="access-denied-box">
        <div class="access-denied-icon">📑</div>
        <h3 class="access-denied-title">${state.lang === 'ar' ? 'هذا القسم خاص بالباحثين عن عمل' : 'Sección para Candidatos'}</h3>
        <p class="access-denied-desc">${state.lang === 'ar' ? 'سجل دخولك كباحث عن عمل لمتابعة حالة طلباتك المرسلة للشركات.' : 'Inicia sesión como Candidato para consultar el estado de tus solicitudes.'}</p>
        <button class="btn btn-primary" onclick="state.quickDemoLogin('candidate')">${state.t("demo_as_candidate")}</button>
      </div>
    `;
    return;
  }

  const myApps = this.applications.filter(a => a.candidateId === this.currentUser.id || a.candidateName === this.currentUser.name);

  if (myApps.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3.5rem; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
        <p style="font-size: 1.15rem; color: var(--text-muted); margin-bottom: 1rem;">
          ${state.lang === 'ar' ? 'لم تقم بتقديم أي طلب توظيف حتى الآن' : 'Aún no te has inscrito en ninguna oferta de empleo'}
        </p>
        <button class="btn btn-primary btn-sm" onclick="switchTab('jobs')">
          ${state.t("nav_explore")}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="jobs-list">
      ${myApps.map(app => `
        <div class="job-card">
          <div class="job-card-top">
            <div class="job-main-info">
              <div class="company-avatar">💼</div>
              <div class="job-title-group">
                <h3>${app.jobTitle}</h3>
                <div class="job-company-name">${app.company}</div>
              </div>
            </div>
            <span class="meta-badge status-${app.stage}" style="font-weight: 700;">
              ${getStageLabel(app.stage)}
            </span>
          </div>
          <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted); flex-wrap: wrap;">
            <span>📅 ${state.lang === 'ar' ? 'تاريخ التقديم:' : 'Fecha de solicitud:'} ${app.appliedDate}</span>
            <span>⚖️ ${state.t(app.candidateLegal)}</span>
            <span>📞 ${app.candidatePhone}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

function getStageLabel(stage) {
  const dict = {
    applied: state.lang === 'ar' ? 'طلب جديد قيد الانتظار' : 'Enviada / Pendiente',
    reviewing: state.lang === 'ar' ? 'المشغل يراجع ملفك' : 'CV en revisión por RRHH',
    interview: state.lang === 'ar' ? 'مبرمج للمقابلة' : 'Entrevista agendada',
    hired: state.lang === 'ar' ? 'تم القبول وتجهيز العقد' : 'Candidatura Aceptada / Contrato'
  };
  return dict[stage] || stage;
}

// --- 11. MODAL DE AUTENTICACIÓN (LOGIN / REGISTRO CON ROLES) ---
let currentAuthRole = "candidate";

function openAuthModal(initialTab = "login") {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  switchAuthTab(initialTab);
  modal.classList.add("open");
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.remove("open");
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById("auth-login-form");
  const regForm = document.getElementById("auth-register-form");
  const tabLoginBtn = document.getElementById("auth-tab-login");
  const tabRegBtn = document.getElementById("auth-tab-register");

  if (tab === "login") {
    if (loginForm) loginForm.style.display = "block";
    if (regForm) regForm.style.display = "none";
    if (tabLoginBtn) tabLoginBtn.classList.add("active");
    if (tabRegBtn) tabRegBtn.classList.remove("active");
  } else {
    if (loginForm) loginForm.style.display = "none";
    if (regForm) regForm.style.display = "block";
    if (tabLoginBtn) tabLoginBtn.classList.remove("active");
    if (tabRegBtn) tabRegBtn.classList.add("active");
  }
}

function selectAuthRole(role) {
  currentAuthRole = role;
  const candCard = document.getElementById("role-card-candidate");
  const empCard = document.getElementById("role-card-employer");
  const candFields = document.getElementById("fields-candidate");
  const empFields = document.getElementById("fields-employer");

  if (role === "candidate") {
    if (candCard) candCard.classList.add("selected");
    if (empCard) empCard.classList.remove("selected");
    if (candFields) candFields.style.display = "block";
    if (empFields) empFields.style.display = "none";
  } else {
    if (candCard) candCard.classList.remove("selected");
    if (empCard) empCard.classList.add("selected");
    if (candFields) candFields.style.display = "none";
    if (empFields) empFields.style.display = "block";
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-password").value;
  state.login(email, pass);
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("reg-email").value;
  const pass = document.getElementById("reg-password").value;

  if (currentAuthRole === "candidate") {
    const name = document.getElementById("reg-cand-name").value;
    const phone = document.getElementById("reg-cand-phone").value;
    const province = document.getElementById("auth-province-candidate").value;
    const profession = document.getElementById("reg-cand-profession").value;
    const legalStatus = document.getElementById("reg-cand-legal").value;

    state.register({
      role: "candidate",
      name,
      email,
      password: pass,
      phone,
      province,
      profession,
      legalStatus,
      skills: profession,
      experience: "Experiencia laboral en " + profession,
      languages: "Español, Árabe",
      education: "Formación básica"
    });
  } else {
    const compName = document.getElementById("reg-emp-company").value;
    const cif = document.getElementById("reg-emp-cif").value;
    const contact = document.getElementById("reg-emp-contact").value;
    const phone = document.getElementById("reg-emp-phone").value;
    const province = document.getElementById("auth-province-employer").value;
    const sector = document.getElementById("auth-sector-employer").value;

    state.register({
      role: "employer",
      name: compName,
      cif,
      contactPerson: contact,
      email,
      password: pass,
      phone,
      province,
      sector,
      verified: true,
      bio: "Empresa del sector " + sector + " ubicada en " + province
    });
  }
}

// --- 12. MODAL DE POSTULACIÓN ---
let currentApplyingJobId = null;

function openApplyModal(jobId) {
  currentApplyingJobId = jobId;
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) return;

  const modal = document.getElementById("apply-modal");
  const jobNameSpan = document.getElementById("apply-modal-job-name");
  if (jobNameSpan) {
    jobNameSpan.textContent = state.getJobLocalized(job, "title") + " - " + job.company;
  }

  if (state.currentUser && state.currentUser.role === "candidate") {
    const nameInput = document.getElementById("apply-fullname");
    const phoneInput = document.getElementById("apply-phone");
    const emailInput = document.getElementById("apply-email");
    const legalInput = document.getElementById("apply-legal-status");
    if (nameInput) nameInput.value = state.currentUser.name || "";
    if (phoneInput) phoneInput.value = state.currentUser.phone || "";
    if (emailInput) emailInput.value = state.currentUser.email || "";
    if (legalInput && state.currentUser.legalStatus) legalInput.value = state.currentUser.legalStatus;
  }

  if (modal) modal.classList.add("open");
}

function closeApplyModal() {
  const modal = document.getElementById("apply-modal");
  if (modal) modal.classList.remove("open");
  currentApplyingJobId = null;
}

function handleApplySubmit(e) {
  e.preventDefault();
  if (!currentApplyingJobId) return;

  const job = state.jobs.find(j => j.id === currentApplyingJobId);
  const fullName = document.getElementById("apply-fullname").value;
  const phone = document.getElementById("apply-phone").value;
  const legalStatus = document.getElementById("apply-legal-status").value;

  const newApp = {
    id: "app-" + Date.now(),
    jobId: currentApplyingJobId,
    employerId: job.employerId || "usr-emp-1",
    jobTitle: state.getJobLocalized(job, "title"),
    company: job.company,
    candidateId: state.currentUser ? state.currentUser.id : "guest",
    candidateName: fullName,
    candidatePhone: phone,
    candidateLegal: legalStatus,
    appliedDate: new Date().toISOString().split("T")[0],
    stage: "applied"
  };

  state.applications.unshift(newApp);
  state.saveApplications();
  closeApplyModal();

  showToast(
    state.lang === 'ar' ? 'تم إرسال طلبك للمشغل بنجاح!' : '¡Solicitud enviada a la empresa con éxito!',
    "success"
  );
  
  if (state.activeTab === "my-apps") {
    state.renderMyApplications();
  }
}

// --- 13. MODAL PUBLICAR OFERTA ---
function openPostJobModal() {
  if (!state.currentUser) {
    showToast(state.lang === 'ar' ? 'يرجى تسجيل الدخول بحساب مشغل لنشر عروض العمل' : 'Por favor inicia sesión con cuenta de Empresa para publicar ofertas', "warning");
    openAuthModal("login");
    return;
  }
  if (state.currentUser.role !== "employer") {
    showToast(state.lang === 'ar' ? 'حسابات الباحثين عن عمل لا يمكنها نشر وظائف. يرجى إنشاء حساب مشغل.' : 'Las cuentas de Candidato no pueden publicar ofertas. Crea o accede con una cuenta de Empresa.', "warning");
    return;
  }

  const compInput = document.getElementById("post-job-company");
  const cifInput = document.getElementById("post-job-cif");
  const phoneInput = document.getElementById("post-job-whatsapp");
  if (compInput) compInput.value = state.currentUser.name;
  if (cifInput) cifInput.value = state.currentUser.cif || "B-84930211";
  if (phoneInput) phoneInput.value = (state.currentUser.phone || "34612345678").replace(/[^0-9]/g, '');

  const modal = document.getElementById("post-job-modal");
  if (modal) modal.classList.add("open");
}

function closePostJobModal() {
  const modal = document.getElementById("post-job-modal");
  if (modal) modal.classList.remove("open");
}

function handlePostJobSubmit(e) {
  e.preventDefault();
  
  const titleVal = document.getElementById("post-job-title").value;
  const companyVal = document.getElementById("post-job-company").value;
  const cifVal = document.getElementById("post-job-cif").value;
  const sectorVal = document.getElementById("post-job-sector").value;
  const provinceVal = document.getElementById("post-job-province").value;
  const salaryVal = parseInt(document.getElementById("post-job-salary").value, 10) || 1400;
  const contractVal = document.getElementById("post-job-contract").value;
  const arraigoVal = document.getElementById("post-job-arraigo").value === "yes";
  const housingVal = document.getElementById("post-job-housing").value === "yes";
  const descVal = document.getElementById("post-job-desc").value;
  const whatsappVal = document.getElementById("post-job-whatsapp").value.replace(/[^0-9]/g, '');

  const newJob = {
    id: "job-" + Date.now(),
    employerId: state.currentUser ? state.currentUser.id : "usr-emp-1",
    title: { es: titleVal, ar: titleVal, en: titleVal },
    company: companyVal,
    cif: cifVal,
    province: provinceVal,
    city: provinceVal,
    sector: sectorVal,
    salary: salaryVal,
    salaryType: "neto",
    contractType: contractVal,
    arraigoOk: arraigoVal,
    nieRequired: !arraigoVal,
    hasHousing: housingVal,
    verified: true,
    whatsapp: whatsappVal || "34600000000",
    postedDaysAgo: 0,
    description: { es: descVal, ar: descVal, en: descVal },
    skills: [sectorVal, provinceVal]
  };

  state.jobs.unshift(newJob);
  state.saveJobs();
  closePostJobModal();

  showToast(
    state.lang === 'ar' ? 'تم نشر عرض العمل بنجاح وهو متاح للمترشحين الآن!' : '¡Oferta publicada con éxito y disponible para los candidatos!',
    "success"
  );

  if (state.activeTab === "my-offers") {
    state.renderMyOffers();
  } else {
    state.renderJobsList();
  }
}

// --- 14. EVENTOS GLOBALES ---
function setupEventListeners() {
  const langSel = document.getElementById("lang-switcher");
  if (langSel) langSel.addEventListener("change", (e) => state.setLanguage(e.target.value));

  const searchInput = document.getElementById("search-keyword");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.filters.keyword = e.target.value;
      state.renderJobsList();
    });
  }

  const provSearch = document.getElementById("search-province");
  if (provSearch) {
    provSearch.addEventListener("change", (e) => {
      state.filters.province = e.target.value;
      state.renderJobsList();
    });
  }

  const secSearch = document.getElementById("search-sector");
  if (secSearch) {
    secSearch.addEventListener("change", (e) => {
      state.filters.sector = e.target.value;
      state.renderJobsList();
    });
  }

  document.querySelectorAll("input[name='filter-permit']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.filters.permit = e.target.value;
      state.renderJobsList();
    });
  });

  const housingCheck = document.getElementById("filter-housing");
  if (housingCheck) {
    housingCheck.addEventListener("change", (e) => {
      state.filters.housing = e.target.checked;
      state.renderJobsList();
    });
  }

  document.querySelectorAll("input[name='filter-contract']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.filters.contract = e.target.value;
      state.renderJobsList();
    });
  });

  document.querySelectorAll(".quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const kw = tag.getAttribute("data-query");
      if (searchInput) searchInput.value = kw;
      state.filters.keyword = kw;
      state.renderJobsList();
    });
  });

  const applyForm = document.getElementById("apply-form");
  if (applyForm) applyForm.addEventListener("submit", handleApplySubmit);

  const postJobForm = document.getElementById("post-job-form");
  if (postJobForm) postJobForm.addEventListener("submit", handlePostJobSubmit);

  const cvForm = document.getElementById("cv-edit-form");
  if (cvForm) cvForm.addEventListener("submit", saveCVForm);

  const loginForm = document.getElementById("auth-login-form");
  if (loginForm) loginForm.addEventListener("submit", handleLoginSubmit);

  const registerForm = document.getElementById("auth-register-form");
  if (registerForm) registerForm.addEventListener("submit", handleRegisterSubmit);
}

function switchTab(tabName) {
  state.activeTab = tabName;
  state.render();
  window.scrollTo({ top: 380, behavior: 'smooth' });
}

function clearAllFilters() {
  state.filters = { keyword: "", province: "", sector: "", permit: "all", contract: "all", housing: false };
  const kw = document.getElementById("search-keyword"); if (kw) kw.value = "";
  const prov = document.getElementById("search-province"); if (prov) prov.value = "";
  const sec = document.getElementById("search-sector"); if (sec) sec.value = "";
  const hous = document.getElementById("filter-housing"); if (hous) hous.checked = false;
  const pAll = document.querySelector("input[name='filter-permit'][value='all']"); if (pAll) pAll.checked = true;
  const cAll = document.querySelector("input[name='filter-contract'][value='all']"); if (cAll) cAll.checked = true;
  state.renderJobsList();
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

document.addEventListener("DOMContentLoaded", initApp);
