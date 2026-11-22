/**
 * IberTrabajo - Plataforma de Intermediación Laboral en España
 * Sistema de Autenticación, Control de Acceso por Roles (RBAC), i18n, ATS & Base de Talentos
 * Perfil Completo: Foto, Permiso de Conducir, Fecha de Nacimiento/Edad, Sectores de Interés,
 * Doble Formación (Académica vs Otros Diplomas) e Idiomas con 4 Niveles
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
    hero_subtitle: "Plataforma con cuentas dedicadas para candidatos y empleadores. Perfiles detallados con carnet de conducir, edad, formación académica, certificados profesionales y niveles de idiomas.",
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
    years_old: "años",
    
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
    auth_birthdate: "Fecha de Nacimiento",
    auth_age: "Edad",
    auth_has_license: "¿Dispone de carnet de conducir?",
    auth_license_types: "Tipos de permiso que posee",
    auth_has_vehicle: "¿Tiene vehículo propio disponible?",
    auth_target_sectors: "Sectores laborales de su interés",
    auth_target_positions: "Puestos de trabajo que busca",
    auth_photo: "Foto de Perfil",
    auth_legal_status: "Situación Legal / Extranjería en España",
    status_nie_valid: "NIE / Permiso de residencia y trabajo en vigor",
    status_nie_renewal: "En trámite de renovación / Prórroga",
    status_arraigo_needed: "Sin permiso vigente (Busco precontrato para Arraigo)",
    status_arraigo_social: "Arraigo Social (+2 años en España - RD 1155/2024)",
    status_arraigo_sociolaboral: "Arraigo Sociolaboral (+2 años con oferta de empleo)",
    status_arraigo_socioformativo: "Arraigo Socioformativo (Formación + trabajo hasta 30h)",
    status_arraigo_segunda_oportunidad: "Arraigo de Segunda Oportunidad (Residencia previa no renovada)",
    status_arraigo_familiar: "Arraigo Familiar (Familiar de ciudadano español/UE)",
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

    // CV Builder & Dual Education
    cv_title: "Creador de Currículum para España",
    cv_subtitle: "Genera un CV adaptado a los estándares de selección de empresas españolas",
    cv_export_btn: "Imprimir / Guardar en PDF",
    cv_academic_title: "🎓 Formación Académica y Titulaciones Oficiales",
    cv_certs_title: "📜 Otros Diplomas, Cursos y Certificados Profesionales",
    cv_languages_title: "🌐 Idiomas y Nivel de Dominio",
    cv_license_title: "🚗 Carnet de Conducir y Movilidad",
    cv_interest_title: "🎯 Puestos y Sectores de Interés",
    lang_level_basico: "Básico (A1 - A2)",
    lang_level_intermedio: "Intermedio (B1 - B2)",
    lang_level_avanzado: "Avanzado (C1)",
    lang_level_nativo: "Nativo / Bilingüe (C2)",

    // Legal Guide
    guide_title: "Guía de Extranjería y Contratación Laboral",
    guide_subtitle: "Nuevo Reglamento de Extranjería (RD 1155/2024 - En vigor el 20 de mayo de 2025): las 5 figuras de arraigo y contratación laboral en España"
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
    hero_subtitle: "ملفات متقدمة للباحثين عن عمل: رخصة السياقة، تاريخ الميلاد والعمر التلقائي، القطاعات المستهدفة، الفصل بين الشواهد الأكاديمية والمهنية، وتقييم اللغات بـ 4 مستويات.",
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
    years_old: "سنة",

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
    auth_birthdate: "تاريخ الميلاد",
    auth_age: "العمر",
    auth_has_license: "هل تملك رخصة سياقة (بيرمي)؟",
    auth_license_types: "أصناف رخصة السياقة المتوفرة لديك",
    auth_has_vehicle: "هل تتوفر على سيارة أو وسيلة تنقل خاصة؟",
    auth_target_sectors: "القطاعات ومجالات النشاط التي تهمك",
    auth_target_positions: "الوظائف والمناصب التي تبحث عنها",
    auth_photo: "الصورة الشخصية للبروفايل",
    auth_legal_status: "الوضعية الإدارية والقانونية في إسبانيا",
    status_nie_valid: "أملك بطاقة إقامة وعمل سارية المفعول (NIE / TIE)",
    status_nie_renewal: "في طور تجديد الإقامة / التمديد (En trámite)",
    status_arraigo_needed: "بدون أوراق حالياً (أبحث عن عقد لتسوية الوضعية - Arraigo)",
    status_arraigo_social: "أرايغو اجتماعي Arraigo Social (+سنتان بإسبانيا - قانون 2025)",
    status_arraigo_sociolaboral: "أرايغو مهني Arraigo Sociolaboral (+سنتان مع عقد عمل)",
    status_arraigo_socioformativo: "أرايغو تكويني Arraigo Socioformativo (تكوين مهني + عمل 30 ساعة)",
    status_arraigo_segunda_oportunidad: "أرايغو الفرصة الثانية Segunda Oportunidad (إقامة سابقة فُقدت)",
    status_arraigo_familiar: "أرايغو عائلي Arraigo Familiar (أحد أفراد عائلة مواطن إسباني/أوروبي)",
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

    // CV Builder & Dual Education
    cv_title: "منشئ السيرة الذاتية المتوافقة مع معايير إسبانيا",
    cv_subtitle: "صمم سيرة ذاتية احترافية بالصيغة المقبولة لدى الشركات الإسبانية",
    cv_export_btn: "طباعة / تحميل بصيغة PDF",
    cv_academic_title: "🎓 الشواهد والتكوينات الأكاديمية الرسمية",
    cv_certs_title: "📜 الديبلومات المهنية والشهادات التكوينية والتدريبية",
    cv_languages_title: "🌐 اللغات ومستوى الإتقان",
    cv_license_title: "🚗 رخصة السياقة والقدرة على التنقل",
    cv_interest_title: "🎯 المناصب والقطاعات المستهدفة",
    lang_level_basico: "مستوى أساسي (A1 - A2)",
    lang_level_intermedio: "مستوى متوسط (B1 - B2)",
    lang_level_avanzado: "مستوى متقدم (C1)",
    lang_level_nativo: "لغة أم / إتقان تام (C2)",

    // Legal Guide
    guide_title: "الدليل القانوني لعقود العمل وقانون الأجانب بإسبانيا",
    guide_subtitle: "قانون الهجرة الجديد (مرسوم ملكي 1155/2024 - يدخل حيز التنفيذ في 20 ماي 2025): الأنواع الـ5 للتسوية (Arraigo) وتصاريح العمل"
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
    hero_subtitle: "Enhanced profiles: driver's license types, birth date & automatic age calculation, target job fields, separate academic degrees vs professional certificates, and 4-level language scale.",
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
    years_old: "years old",

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
    auth_birthdate: "Birth Date",
    auth_age: "Age",
    auth_has_license: "Do you have a driver's license?",
    auth_license_types: "Driver's license categories you hold",
    auth_has_vehicle: "Do you have your own vehicle?",
    auth_target_sectors: "Target Industry Sectors",
    auth_target_positions: "Target Job Titles / Positions",
    auth_photo: "Profile Picture",
    auth_legal_status: "Legal / Residency Status in Spain",
    status_nie_valid: "Valid Spanish Work & Residency Permit (NIE/TIE)",
    status_nie_renewal: "Renewal in progress (En trámite)",
    status_arraigo_needed: "Seeking pre-contract for Arraigo (Legalization)",
    status_arraigo_social: "Arraigo Social (+2 years stay - 2025 Reform RD 1155/2024)",
    status_arraigo_sociolaboral: "Arraigo Sociolaboral (+2 years with job offer)",
    status_arraigo_socioformativo: "Arraigo Socioformativo (Vocational training + work 30h)",
    status_arraigo_segunda_oportunidad: "Second Chance Arraigo (Previously held residence permit)",
    status_arraigo_familiar: "Family Arraigo (Relative of Spanish/EU citizen)",
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

    // CV Builder & Dual Education
    cv_title: "Spanish Standard CV Builder",
    cv_subtitle: "Generate a professional Europass-styled Spanish resume in seconds",
    cv_export_btn: "Print / Export to PDF",
    cv_academic_title: "🎓 Academic Education & Official Degrees",
    cv_certs_title: "📜 Vocational Diplomas, Certificates & Courses",
    cv_languages_title: "🌐 Languages & Proficiency Levels",
    cv_license_title: "🚗 Driving License & Mobility",
    cv_interest_title: "🎯 Target Roles & Industry Sectors",
    lang_level_basico: "Basic (A1 - A2)",
    lang_level_intermedio: "Intermediate (B1 - B2)",
    lang_level_avanzado: "Advanced (C1)",
    lang_level_nativo: "Native / Bilingual (C2)",

    // Legal Guide
    guide_title: "Spanish Labor & Immigration Legal Guide",
    guide_subtitle: "New Spanish Immigration Regulations (RD 1155/2024 - In force May 20, 2025): the 5 Arraigo figures & work permits"
  }
};

// Helper: Calculateur d'âge dynamique à partir de la date de naissance
function calculateAge(birthDateString) {
  if (!birthDateString) return null;
  const today = new Date();
  const birthDate = new Date(birthDateString);
  if (isNaN(birthDate.getTime())) return null;
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 0 ? age : null;
}

// Avatars par défaut professionnels
const PRESET_AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
];

// --- HELPER DE SEGURIDAD: Escapa HTML para prevenir XSS ---
// Usa Security.sanitizeHTML() si está disponible (security.js cargado), o escapa caracteres peligrosos directamente.
function s(str) {
  if (typeof Security !== 'undefined' && Security.sanitizeHTML) {
    return Security.sanitizeHTML(String(str == null ? '' : str));
  }
  // Fallback mínimo: escapar caracteres HTML críticos
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// --- 2. BASE DE DATOS INICIAL DE USUARIOS (CANDIDATOS Y EMPLEADORES) ---
// NOTA DE SEGURIDAD (PRODUCCIÓN):
// En producción, los usuarios se gestionan exclusivamente via Supabase Auth.
// Las contraseñas son procesadas por bcrypt de Supabase y nunca se almacenan en texto plano.
// Estos usuarios demo solo existen en modo localStorage para demostración.
// La contraseña demo para todos es "demo123" (acceso rápido sin contraseña real).
const DEMO_PASS_TOKEN = "demo123"; // token demo únicamente

const INITIAL_USERS = [
  {
    id: "usr-cand-1",
    role: "candidate",
    name: "Ahmed Mansouri",
    email: "ahmed@candidato.es",
    password: DEMO_PASS_TOKEN,
    phone: "+34 612 345 678",
    province: "Madrid",
    profession: "Cocinero & Ayudante de Hostelería",
    legalStatus: "status_arraigo_needed",
    photo: PRESET_AVATARS[0],
    birthDate: "1998-04-12",
    hasDrivingLicense: true,
    drivingLicenseTypes: ["B", "Carretillero"],
    hasVehicle: true,
    targetSectors: ["Hostelería", "Logística y Almacén"],
    targetPositions: "Cocinero, Ayudante de cocina, Mozo de almacén",
    academicEducation: "Bachillerato en Ciencias Sociales - Título Homologado\nEducación Secundaria Obligatoria (ESO)",
    otherCertifications: "Certificado de Profesionalidad en Operaciones Básicas de Cocina (HOTR0108 - SEPE)\nCarnet Oficial de Manipulador de Alimentos de Mayor Riesgo\nCurso de Prevención de Riesgos Laborales en Hostelería (PRL 30h)",
    languagesList: [
      { language: "Árabe", level: "nativo" },
      { language: "Español", level: "intermedio" },
      { language: "Francés", level: "basico" }
    ],
    skills: "Cocina tradicional española, manipulación de alimentos, corte, parrilla, recepción de mercancías",
    experience: "3 años en Restaurante El Olivo (Madrid) como ayudante de cocina y plancha.\n2 años de experiencia previa en sector hostelero y servicio de barra."
  },
  {
    id: "usr-cand-2",
    role: "candidate",
    name: "Karim Hadad",
    email: "karim@candidato.es",
    password: DEMO_PASS_TOKEN,
    phone: "+34 655 432 109",
    province: "Almería",
    profession: "Peón Agrícola Especializado & Carretillero",
    legalStatus: "status_nie_valid",
    photo: PRESET_AVATARS[1],
    birthDate: "1995-09-20",
    hasDrivingLicense: true,
    drivingLicenseTypes: ["B", "C", "Carretillero"],
    hasVehicle: true,
    targetSectors: ["Agricultura", "Logística y Almacén", "Construcción"],
    targetPositions: "Peón agrícola especializado, Carretillero de almacén, Conductor de reparto",
    academicEducation: "Educación Secundaria (Certificado de Estudios Medios)",
    otherCertifications: "Carnet Oficial de Conductor de Carretillas Elevadoras (Norma UNE 58451)\nCertificado de Profesionalidad en Actividades Auxiliares en Agricultura (AGAX0208)\nCarnet de Aplicador de Productos Fitosanitarios (Nivel Cualificado)",
    languagesList: [
      { language: "Árabe", level: "nativo" },
      { language: "Español", level: "avanzado" }
    ],
    skills: "Recolección invernadero, carnet de carretillero, riego por goteo, mantenimiento de aperos, carga y descarga",
    experience: "4 años de trabajo continuo en explotaciones agrícolas en Campo de Dalías (Almería).\n1 año en almacén de empaquetado de hortalizas como carretillero."
  },
  {
    id: "usr-cand-3",
    role: "candidate",
    name: "Fatima Ezzahra",
    email: "fatima@candidato.es",
    password: DEMO_PASS_TOKEN,
    phone: "+34 677 889 900",
    province: "Barcelona",
    profession: "Cuidadora Sociosanitaria & Servicios del Hogar",
    legalStatus: "status_nie_valid",
    photo: PRESET_AVATARS[2],
    birthDate: "1992-02-15",
    hasDrivingLicense: true,
    drivingLicenseTypes: ["B"],
    hasVehicle: false,
    targetSectors: ["Servicios y Cuidados", "Limpieza", "Hostelería"],
    targetPositions: "Cuidadora sociosanitaria, Ayuda a domicilio, Camarera de pisos",
    academicEducation: "Diplomatura en Trabajo Social (País de origen)\nHomologación de título universitario en trámite ante el Ministerio de Educación",
    otherCertifications: "Certificado de Profesionalidad en Atención Sociosanitaria a Personas Dependientes en Instituciones Sociales (SSCS0208)\nCurso de Primeros Auxilios y Soporte Vital Básico (Cruz Roja Española)\nCarnet de Manipulador de Alimentos",
    languagesList: [
      { language: "Árabe", level: "nativo" },
      { language: "Español", level: "avanzado" },
      { language: "Catalán", level: "basico" }
    ],
    skills: "Atención a personas dependientes, geriatría, cocina dietética, control de medicación, acompañamiento",
    experience: "3 años atendiendo a personas mayores con movilidad reducida en Barcelona y Hospitalet.\n1 año en servicio de limpieza y mantenimiento hospitalario."
  },
  {
    id: "usr-emp-1",
    role: "employer",
    name: "Restaurante Taberna Ibérica S.L.",
    email: "contacto@tabernaiberica.es",
    password: DEMO_PASS_TOKEN,
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
    password: DEMO_PASS_TOKEN,
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

    // CV Data enriquecido con foto, carnet, edad, doble formación y lenguas con 4 niveles
    const cand1 = INITIAL_USERS[0];
    this.cvData = JSON.parse(localStorage.getItem("iber_cv")) || {
      fullName: cand1.name,
      profession: cand1.profession,
      phone: cand1.phone,
      email: cand1.email,
      province: cand1.province,
      legalStatus: "Sin permiso vigente (Busco precontrato para Arraigo)",
      photo: cand1.photo,
      birthDate: cand1.birthDate,
      hasDrivingLicense: cand1.hasDrivingLicense,
      drivingLicenseTypes: cand1.drivingLicenseTypes,
      hasVehicle: cand1.hasVehicle,
      targetSectors: cand1.targetSectors,
      targetPositions: cand1.targetPositions,
      academicEducation: cand1.academicEducation,
      otherCertifications: cand1.otherCertifications,
      languagesList: cand1.languagesList,
      skills: cand1.skills,
      experience: cand1.experience
    };
  }

  saveUsers() {
    // Strip passwords before persisting — NEVER store plaintext passwords in localStorage
    const safeUsers = this.users.map(u => {
      if (typeof Security !== 'undefined') return Security.sanitizeUserForStorage(u);
      const { password, ...rest } = u;
      return rest;
    });
    localStorage.setItem("iber_users", JSON.stringify(safeUsers));
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
  // SECURITY: En mode demo, comparaison directe. En production, Supabase Auth gère bcrypt.
  login(email, password) {
    // Rate limiting: max 5 tentatives par minute
    if (typeof Security !== 'undefined' && !Security.checkRateLimit('login_' + email, 5, 60000)) {
      showToast(this.lang === 'ar' ? 'عدد كبير من المحاولات، انتظر دقيقة' : 'Demasiados intentos. Espera 1 minuto.', "error");
      return false;
    }

    if (typeof Security !== 'undefined' && !Security.isValidEmail(email)) {
      showToast(this.lang === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Formato de correo electrónico inválido', "error");
      return false;
    }

    // Comparaison des identifiants (mode démo uniquement - clés fictives)
    // En production: await supabase.auth.signInWithPassword({ email, password })
    const demoKey = typeof DEMO_PASSWORDS !== 'undefined' ? DEMO_PASSWORDS[email.toLowerCase()] : null;
    const isDemo = demoKey && password === "demo";
    const isDirectMatch = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    const user = isDemo
      ? this.users.find(u => u.email.toLowerCase() === email.toLowerCase())
      : isDirectMatch;

    if (!user) {
      showToast(this.lang === 'ar' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Correo electrónico o contraseña incorrectos', "error");
      return false;
    }

    // SÉCURITÉ: Stocker le profil sans mot de passe dans localStorage
    const safeUser = typeof Security !== 'undefined' ? Security.sanitizeUserForStorage(user) : (({ password, ...rest }) => rest)(user);
    this.currentUser = safeUser;
    localStorage.setItem("iber_auth_user", JSON.stringify(safeUser));
    
    // Redirigir según rol
    if (user.role === "employer") {
      this.activeTab = "ats";
    } else {
      this.activeTab = "jobs";
      this.loadUserIntoCV(user);
    }

    closeAuthModal();
    showToast(
      this.lang === 'ar' ? `مرحباً بك مجدداً، ${user.name}!` : `¡Bienvenido/a de nuevo, ${user.name}!`,
      "success"
    );
    this.render();
    return true;
  }

  loadUserIntoCV(user) {
    this.cvData.fullName = user.name || this.cvData.fullName;
    this.cvData.email = user.email || this.cvData.email;
    this.cvData.phone = user.phone || this.cvData.phone;
    this.cvData.province = user.province || this.cvData.province;
    this.cvData.profession = user.profession || this.cvData.profession;
    if (user.photo) this.cvData.photo = user.photo;
    if (user.birthDate) this.cvData.birthDate = user.birthDate;
    if (user.hasDrivingLicense !== undefined) this.cvData.hasDrivingLicense = user.hasDrivingLicense;
    if (user.drivingLicenseTypes) this.cvData.drivingLicenseTypes = user.drivingLicenseTypes;
    if (user.hasVehicle !== undefined) this.cvData.hasVehicle = user.hasVehicle;
    if (user.targetSectors) this.cvData.targetSectors = user.targetSectors;
    if (user.targetPositions) this.cvData.targetPositions = user.targetPositions;
    if (user.academicEducation) this.cvData.academicEducation = user.academicEducation;
    if (user.otherCertifications) this.cvData.otherCertifications = user.otherCertifications;
    if (user.languagesList) this.cvData.languagesList = user.languagesList;
    if (user.skills) this.cvData.skills = user.skills;
    if (user.experience) this.cvData.experience = user.experience;
    this.saveCV();
  }

  register(userData) {
    // Validation email
    if (typeof Security !== 'undefined' && !Security.isValidEmail(userData.email)) {
      showToast(this.lang === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Formato de correo electrónico inválido', "error");
      return false;
    }
    // Validation mot de passe (longueur minimale)
    if (userData.password && userData.password.length < 6) {
      showToast(this.lang === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'La contraseña debe tener al menos 6 caracteres', "error");
      return false;
    }
    const exists = this.users.some(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (exists) {
      showToast(this.lang === 'ar' ? 'هذا البريد الإلكتروني مسجل بالفعل' : 'Este correo electrónico ya está registrado', "error");
      return false;
    }

    const newUser = {
      id: typeof Security !== 'undefined' ? Security.generateId('usr') : ("usr-" + Date.now()),
      ...userData
    };

    this.users.push(newUser);
    this.saveUsers();

    // SÉCURITÉ: Ne stocker que le profil sans mot de passe
    const safeUser = typeof Security !== 'undefined' ? Security.sanitizeUserForStorage(newUser) : (({ password, ...rest }) => rest)(newUser);
    this.currentUser = safeUser;
    localStorage.setItem("iber_auth_user", JSON.stringify(safeUser));

    if (newUser.role === "employer") {
      this.activeTab = "my-offers";
    } else {
      this.activeTab = "jobs";
      this.loadUserIntoCV(newUser);
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
      this.login("ahmed@candidato.es", DEMO_PASS_TOKEN);
    } else {
      this.login("contacto@tabernaiberica.es", DEMO_PASS_TOKEN);
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
    this.populateCVEditForm();
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
    const avatarImg = this.currentUser.photo ? `<img src="${this.currentUser.photo}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" alt="Avatar">` : (isEmployer ? '🏢' : '👤');
    authContainer.innerHTML = `
      <div class="user-nav-profile" title="${this.currentUser.name}">
        <div class="user-avatar ${isEmployer ? 'employer' : ''}" style="overflow:hidden;padding:0;">
          ${avatarImg}
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
    document.getElementById("auth-province-employer"),
    document.getElementById("cv-province-input")
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
      <div class="job-card ${job.arraigoOk ? 'featured' : ''}" data-job-id="${s(job.id)}">
        <div class="job-card-top">
          <div class="job-main-info">
            <div class="company-avatar">
              ${s(job.company.substring(0, 2).toUpperCase())}
            </div>
            <div class="job-title-group">
              <h3>${s(title)}</h3>
              <div class="job-company-name">
                <span>${s(job.company)}</span>
                ${job.verified ? `<span class="verified-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> ${state.t("badge_verified")}</span>` : ''}
              </div>
            </div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="state.toggleSaveJob('${s(job.id)}')" title="${state.t('btn_save')}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? '#d97706' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>

        <div class="job-meta-badges">
          <span class="meta-badge salary">💶 ${job.salary.toLocaleString()} ${state.t("salary_unit")} (${s(job.salaryType)})</span>
          <span class="meta-badge">📍 ${s(job.city || job.province)} (${s(job.province)})</span>
          <span class="meta-badge">📑 ${s(job.contractType.toUpperCase())}</span>
          ${job.arraigoOk ? `<span class="meta-badge arraigo-badge">🤝 ${state.t("badge_arraigo")}</span>` : ''}
          ${job.nieRequired ? `<span class="meta-badge nie-badge">📋 ${state.t("badge_nie_req")}</span>` : ''}
          ${job.hasHousing ? `<span class="meta-badge housing-badge">🏠 ${state.t("badge_housing")}</span>` : ''}
        </div>

        <p class="job-description-preview">${s(desc)}</p>

        <div class="job-tags-list">
          ${(job.skills || []).map(skill => `<span class="job-skill-tag">#${s(skill)}</span>`).join('')}
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
            <button class="btn btn-primary btn-sm" onclick="handleJobApplyClick('${s(job.id)}')">
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
              ${stageApps.map(app => {
                const candUser = state.users.find(u => u.id === app.candidateId || u.name === app.candidateName) || {};
                const candAge = calculateAge(candUser.birthDate);
                const avatarSrc = candUser.photo || PRESET_AVATARS[0];
                return `
                <div class="ats-candidate-card" draggable="true" ondragstart="handleDragAts(event, '${s(app.id)}')">
                  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.4rem;">
                    <img src="${s(avatarSrc)}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;" alt="Avatar">
                    <div>
                      <div class="ats-card-name">${s(app.candidateName)}</div>
                      ${candAge ? `<span style="font-size:0.75rem;color:var(--text-muted);">🎂 ${candAge} ${state.t("years_old")}</span>` : ''}
                    </div>
                  </div>
                  <div class="ats-card-job">💼 ${s(app.jobTitle)}</div>
                  <div class="ats-card-status-badge ${stage.cssClass}">
                    ${state.t(app.candidateLegal || 'status_nie_valid')}
                  </div>
                  ${candUser.hasDrivingLicense ? `
                    <div style="font-size:0.75rem;color:#059669;font-weight:600;margin-bottom:0.35rem;">
                      🚗 ${s((candUser.drivingLicenseTypes || ['B']).join(', '))}
                    </div>
                  ` : ''}
                  <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    📞 ${s(app.candidatePhone)}
                  </div>
                  <div class="ats-actions">
                    <button class="btn btn-outline btn-sm" style="flex: 1;" onclick="advanceCandidateStage('${s(app.id)}')" title="Avanzar">
                      ➡️ ${state.lang === 'ar' ? 'المرحلة التالية' : 'Avanzar'}
                    </button>
                    <a href="https://wa.me/${app.candidatePhone.replace(/[^0-9]/g, '')}" target="_blank" class="btn btn-whatsapp btn-sm" title="WhatsApp">
                      💬
                    </a>
                  </div>
                </div>
              `;
              }).join('')}
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
      ${candidates.map(cand => {
        const age = calculateAge(cand.birthDate);
        const photoSrc = cand.photo || PRESET_AVATARS[0];
        const licenseText = cand.hasDrivingLicense ? (cand.drivingLicenseTypes || ['B']).join(', ') : null;
        return `
        <div class="talent-card">
          <div>
            <div class="talent-card-header">
              <img src="${s(photoSrc)}" class="talent-avatar" alt="${s(cand.name)}">
              <div>
                <h4 class="talent-name">${s(cand.name)}</h4>
                <div class="talent-profession">${s(cand.profession || 'Profesional')}</div>
                <div class="talent-location">
                  📍 ${s(cand.province || 'España')} 
                  ${age ? `· <span class="age-badge">🎂 ${age} ${state.t("years_old")}</span>` : ''}
                </div>
              </div>
            </div>
            
            <div style="font-size: 0.825rem; font-weight: 600; color: #1e40af; background: #eff6ff; padding: 0.25rem 0.5rem; border-radius: 4px; margin-bottom: 0.65rem;">
              ⚖️ ${state.t(cand.legalStatus || 'status_nie_valid')}
            </div>

            <!-- Permiso de conducir y movilidad -->
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.65rem;">
              ${licenseText ? `
                <span class="license-badge-pill" title="Permiso de conducir">
                  🚗 Carnet: ${s(licenseText)}
                </span>
              ` : `
                <span class="license-badge-pill" style="color:var(--text-light);background:#f8fafc;">
                  🚶 Sin carnet
                </span>
              `}
              ${cand.hasVehicle ? `
                <span class="license-badge-pill" style="background:#ecfdf5;color:#065f46;border-color:#a7f3d0;">
                  🔑 Vehículo propio
                </span>
              ` : ''}
            </div>

            <!-- Puestos y sectores de interés -->
            ${cand.targetPositions || cand.targetSectors ? `
              <div style="font-size:0.8rem;background:#fffbeb;padding:0.4rem 0.6rem;border-radius:4px;border:1px solid #fef3c7;margin-bottom:0.65rem;">
                <strong>🎯 ${state.lang === 'ar' ? 'يبحث عن:' : 'Busca:'}</strong> ${s(cand.targetPositions || (cand.targetSectors || []).join(', '))}
              </div>
            ` : ''}

            <!-- Idiomas y Niveles -->
            ${cand.languagesList && cand.languagesList.length > 0 ? `
              <div style="margin-bottom:0.65rem;">
                <div style="font-size:0.75rem;color:var(--text-muted);font-weight:700;margin-bottom:0.25rem;">🌐 ${state.lang === 'ar' ? 'اللغات:' : 'Idiomas:'}</div>
                <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
                  ${cand.languagesList.map(l => `<span class="lang-level-badge level-${s(l.level)}">${s(l.language)}: ${state.t("lang_level_" + l.level)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <p style="font-size: 0.85rem; color: #475569; margin-bottom: 0.65rem; line-height: 1.4;">
              ${cand.experience ? s(cand.experience.substring(0, 95)) + '...' : 'Experiencia contrastada en el sector.'}
            </p>

            <div class="talent-skills-tags">
              ${(cand.skills || 'Hostelería, Responsabilidad').split(',').map(sItem => `<span class="talent-tag">#${s(sItem.trim())}</span>`).join('')}
            </div>
          </div>

          <div style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 0.85rem;">
            <a href="https://wa.me/${(cand.phone || '34612345678').replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hola ' + cand.name + ', hemos visto tu perfil en IberTrabajo y nos gustaría proponerte una oferta laboral.')}" target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%;">
              💬 ${state.t("btn_contact_talent")}
            </a>
          </div>
        </div>
      `;
      }).join('')}
    </div>
  `;
};

// --- 9. CREADOR DE CV EN ESPAÑOL (CON FOTO, EDAD, PERMISO Y DOBLE FORMACIÓN) ---
AppState.prototype.renderCVPreview = function() {
  const container = document.getElementById("cv-preview-sheet");
  if (!container) return;

  const cv = this.cvData;
  const age = calculateAge(cv.birthDate);
  const photoSrc = cv.photo || PRESET_AVATARS[0];
  const licenseText = cv.hasDrivingLicense ? (cv.drivingLicenseTypes || ['B']).join(', ') : null;

  container.innerHTML = `
    <!-- Cabecera con Foto de Perfil -->
    <div class="cv-header-layout">
      <img src="${s(photoSrc)}" class="cv-photo-img" alt="Foto de perfil de ${s(cv.fullName)}">
      <div class="cv-header-details">
        <h1 class="cv-name">${s(cv.fullName)}</h1>
        <div class="cv-profession">${s(cv.profession)}</div>
        <div class="cv-contact-row">
          <span>📍 ${s(cv.province)}, España</span>
          ${cv.birthDate ? `<span>📅 ${s(cv.birthDate)} ${age ? `(${age} ${state.t("years_old")})` : ''}</span>` : ''}
          <span>📞 ${s(cv.phone)}</span>
          <span>✉️ ${s(cv.email)}</span>
        </div>
      </div>
    </div>

    <!-- Situación Administrativa -->
    <div class="cv-section">
      <div class="cv-section-title">⚖️ Situación Administrativa / Extranjería</div>
      <p style="font-size: 0.95rem; font-weight: 600; color: #1e3a8a;">${s(cv.legalStatus)}</p>
    </div>

    <!-- Permiso de Conducir y Vehículo -->
    <div class="cv-section">
      <div class="cv-section-title">🚗 Carnet de Conducir y Movilidad</div>
      <div style="display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap;font-size:0.9rem;">
        ${licenseText ? `
          <span class="license-badge-pill">
            🚘 <strong>Permiso de Conducir:</strong> ${s(licenseText)}
          </span>
        ` : `
          <span style="color:var(--text-muted);">Sin permiso de conducir actualmente</span>
        `}
        ${cv.hasVehicle ? `
          <span class="license-badge-pill" style="background:#ecfdf5;color:#065f46;border-color:#a7f3d0;">
            🔑 Vehículo propio disponible
          </span>
        ` : ''}
      </div>
    </div>

    <!-- Puestos y Sectores de Interés -->
    ${cv.targetPositions || (cv.targetSectors && cv.targetSectors.length > 0) ? `
      <div class="cv-section">
        <div class="cv-section-title">🎯 Puestos y Sectores de Interés</div>
        ${cv.targetPositions ? `<p style="font-size:0.925rem;margin-bottom:0.4rem;"><strong>Puestos deseados:</strong> ${s(cv.targetPositions)}</p>` : ''}
        ${cv.targetSectors && cv.targetSectors.length > 0 ? `
          <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
            ${cv.targetSectors.map(sec => `<span class="job-skill-tag" style="background:#eff6ff;color:#1e40af;border-color:#bfdbfe;">🏢 ${s(sec)}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    ` : ''}

    <!-- Experiencia Laboral -->
    <div class="cv-section">
      <div class="cv-section-title">💼 Experiencia Laboral</div>
      <div style="font-size: 0.925rem; white-space: pre-line; line-height: 1.6;">${s(cv.experience)}</div>
    </div>

    <!-- SEPARACIÓN 1: Formación Académica y Titulaciones Oficiales -->
    <div class="cv-section">
      <div class="cv-section-title">${state.t("cv_academic_title")}</div>
      <div class="education-academic-card">
        <div style="font-size: 0.925rem; white-space: pre-line; line-height: 1.6;">${s(cv.academicEducation || 'Educación Secundaria Obligatoria')}</div>
      </div>
    </div>

    <!-- SEPARACIÓN 2: Otros Diplomas, Cursos y Certificados Profesionales -->
    <div class="cv-section">
      <div class="cv-section-title">${state.t("cv_certs_title")}</div>
      <div class="education-certs-card">
        <div style="font-size: 0.925rem; white-space: pre-line; line-height: 1.6;">${s(cv.otherCertifications || 'Certificados de formación complementaria')}</div>
      </div>
    </div>

    <!-- Idiomas con 4 Niveles -->
    <div class="cv-section">
      <div class="cv-section-title">${state.t("cv_languages_title")}</div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
        ${(cv.languagesList || [
          { language: "Español", level: "intermedio" },
          { language: "Árabe", level: "nativo" }
        ]).map(l => `
          <span class="lang-level-badge level-${l.level}" style="font-size:0.85rem;padding:0.3rem 0.75rem;">
            ${l.language}: <strong>${state.t("lang_level_" + l.level)}</strong>
          </span>
        `).join('')}
      </div>
    </div>

    <!-- Habilidades y Competencias -->
    <div class="cv-section">
      <div class="cv-section-title">⚡ Habilidades y Competencias</div>
      <div style="font-size: 0.925rem;">${cv.skills}</div>
    </div>
  `;
};

// Rellenar formulario de edición de CV con valores actuales
AppState.prototype.populateCVEditForm = function() {
  const cv = this.cvData;
  const nameInput = document.getElementById("cv-name-input");
  const profInput = document.getElementById("cv-profession-input");
  const phoneInput = document.getElementById("cv-phone-input");
  const emailInput = document.getElementById("cv-email-input");
  const provInput = document.getElementById("cv-province-input");
  const legalInput = document.getElementById("cv-legal-input");
  const birthInput = document.getElementById("cv-birthdate-input");
  const hasLicInput = document.getElementById("cv-has-license");
  const hasVehInput = document.getElementById("cv-has-vehicle");
  const targetPosInput = document.getElementById("cv-target-positions");
  const academicInput = document.getElementById("cv-academic-input");
  const certsInput = document.getElementById("cv-certs-input");
  const skillsInput = document.getElementById("cv-skills-input");
  const expInput = document.getElementById("cv-experience-input");

  if (nameInput) nameInput.value = cv.fullName || "";
  if (profInput) profInput.value = cv.profession || "";
  if (phoneInput) phoneInput.value = cv.phone || "";
  if (emailInput) emailInput.value = cv.email || "";
  if (provInput) provInput.value = cv.province || "Madrid";
  if (legalInput) legalInput.value = cv.legalStatus || "status_arraigo_needed";
  if (birthInput) birthInput.value = cv.birthDate || "";
  if (targetPosInput) targetPosInput.value = cv.targetPositions || "";
  if (academicInput) academicInput.value = cv.academicEducation || "";
  if (certsInput) certsInput.value = cv.otherCertifications || "";
  if (skillsInput) skillsInput.value = cv.skills || "";
  if (expInput) expInput.value = cv.experience || "";

  // Foto de perfil preview
  const photoPreview = document.getElementById("cv-photo-preview-img");
  if (photoPreview) photoPreview.src = cv.photo || PRESET_AVATARS[0];

  // Carnet de conducir checkboxes
  if (hasLicInput) {
    hasLicInput.checked = !!cv.hasDrivingLicense;
    toggleDrivingLicenseFields('cv');
  }
  if (hasVehInput) hasVehInput.checked = !!cv.hasVehicle;

  const licenseTypes = cv.drivingLicenseTypes || [];
  document.querySelectorAll(".cv-license-type-cb").forEach(cb => {
    cb.checked = licenseTypes.includes(cb.value);
  });

  // Sectores de interés checkboxes
  const sectors = cv.targetSectors || [];
  document.querySelectorAll(".cv-sector-cb").forEach(cb => {
    cb.checked = sectors.includes(cb.value);
  });

  // Idiomas dinámicos
  renderLanguageRows('cv', cv.languagesList || [
    { language: "Español", level: "intermedio" },
    { language: "Árabe", level: "nativo" }
  ]);

  // Actualizar badge de edad
  updateAgeBadge('cv', cv.birthDate);
};

function updateAgeBadge(prefix, birthDateVal) {
  const badge = document.getElementById(`${prefix}-age-badge`);
  if (!badge) return;
  const age = calculateAge(birthDateVal);
  if (age !== null) {
    badge.style.display = "inline-flex";
    badge.innerHTML = `🎂 ${age} ${state.t("years_old")}`;
  } else {
    badge.style.display = "none";
  }
}

function toggleDrivingLicenseFields(prefix) {
  const checkbox = document.getElementById(`${prefix}-has-license`);
  const detailsWrap = document.getElementById(`${prefix}-license-details`);
  if (!checkbox || !detailsWrap) return;
  detailsWrap.style.display = checkbox.checked ? "block" : "none";
}

function renderLanguageRows(prefix, languages) {
  const container = document.getElementById(`${prefix}-languages-container`);
  if (!container) return;

  container.innerHTML = languages.map((l, index) => `
    <div class="language-entry-row" data-index="${index}">
      <input type="text" class="form-input lang-name-input" style="flex:2;" value="${l.language}" placeholder="Idioma (ej. Español, Árabe, Francés, Inglés)..." required>
      <select class="form-select lang-level-select" style="flex:2;">
        <option value="basico" ${l.level === 'basico' ? 'selected' : ''}>${state.t("lang_level_basico")}</option>
        <option value="intermedio" ${l.level === 'intermedio' ? 'selected' : ''}>${state.t("lang_level_intermedio")}</option>
        <option value="avanzado" ${l.level === 'avanzado' ? 'selected' : ''}>${state.t("lang_level_avanzado")}</option>
        <option value="nativo" ${l.level === 'nativo' ? 'selected' : ''}>${state.t("lang_level_nativo")}</option>
      </select>
      <button type="button" class="btn btn-outline btn-sm" style="color:var(--danger);padding:0.4rem 0.6rem;" onclick="removeLanguageRow('${prefix}', ${index})">✕</button>
    </div>
  `).join('');
}

function addLanguageRow(prefix) {
  const container = document.getElementById(`${prefix}-languages-container`);
  if (!container) return;
  const currentLangs = getLanguagesFromContainer(prefix);
  currentLangs.push({ language: "", level: "intermedio" });
  renderLanguageRows(prefix, currentLangs);
}

function removeLanguageRow(prefix, index) {
  const currentLangs = getLanguagesFromContainer(prefix);
  currentLangs.splice(index, 1);
  renderLanguageRows(prefix, currentLangs);
}

function getLanguagesFromContainer(prefix) {
  const container = document.getElementById(`${prefix}-languages-container`);
  if (!container) return [];
  const rows = container.querySelectorAll(".language-entry-row");
  const list = [];
  rows.forEach(row => {
    const nameInput = row.querySelector(".lang-name-input");
    const levelSelect = row.querySelector(".lang-level-select");
    if (nameInput && levelSelect && nameInput.value.trim()) {
      list.push({ language: nameInput.value.trim(), level: levelSelect.value });
    }
  });
  return list;
}

function selectPresetPhoto(prefix, photoUrl) {
  const preview = document.getElementById(`${prefix}-photo-preview-img`);
  if (preview) preview.src = photoUrl;
  if (prefix === 'cv') {
    state.cvData.photo = photoUrl;
  }
}

function handlePhotoUpload(prefix, input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    // Limit file size to 500 KB in demo mode to avoid localStorage overflow
    const MAX_SIZE = 500 * 1024;
    if (file.size > MAX_SIZE) {
      showToast(
        state.lang === 'ar'
          ? 'الصورة كبيرة جداً. الحد الأقصى 500 كيلوبايت.'
          : 'La foto es demasiado grande. Máximo 500 KB.',
        "error"
      );
      return;
    }
    // Only accept image files
    if (!file.type.startsWith('image/')) {
      showToast(
        state.lang === 'ar' ? 'يجب أن يكون الملف صورة.' : 'El archivo debe ser una imagen.',
        "error"
      );
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const preview = document.getElementById(`${prefix}-photo-preview-img`);
      if (preview) preview.src = dataUrl;
      if (prefix === 'cv') {
        state.cvData.photo = dataUrl;
      }
    };
    reader.readAsDataURL(file);
  }
}

function saveCVForm(e) {
  e.preventDefault();

  // Licencias seleccionadas
  const selectedLicenses = [];
  document.querySelectorAll(".cv-license-type-cb:checked").forEach(cb => selectedLicenses.push(cb.value));

  // Sectores seleccionados
  const selectedSectors = [];
  document.querySelectorAll(".cv-sector-cb:checked").forEach(cb => selectedSectors.push(cb.value));

  // Idiomas
  const languagesList = getLanguagesFromContainer('cv');

  // Foto
  const photoPreview = document.getElementById("cv-photo-preview-img");
  const photoSrc = photoPreview ? photoPreview.src : PRESET_AVATARS[0];

  state.cvData = {
    fullName: document.getElementById("cv-name-input").value,
    profession: document.getElementById("cv-profession-input").value,
    phone: document.getElementById("cv-phone-input").value,
    email: document.getElementById("cv-email-input").value,
    province: document.getElementById("cv-province-input").value,
    legalStatus: document.getElementById("cv-legal-input").value,
    photo: photoSrc,
    birthDate: document.getElementById("cv-birthdate-input").value,
    hasDrivingLicense: document.getElementById("cv-has-license").checked,
    drivingLicenseTypes: selectedLicenses,
    hasVehicle: document.getElementById("cv-has-vehicle").checked,
    targetSectors: selectedSectors,
    targetPositions: document.getElementById("cv-target-positions").value,
    academicEducation: document.getElementById("cv-academic-input").value,
    otherCertifications: document.getElementById("cv-certs-input").value,
    languagesList: languagesList.length > 0 ? languagesList : state.cvData.languagesList,
    skills: document.getElementById("cv-skills-input").value,
    experience: document.getElementById("cv-experience-input").value
  };

  // Si hay usuario candidato conectado, sincronizar su usuario
  if (state.currentUser && state.currentUser.role === 'candidate') {
    Object.assign(state.currentUser, state.cvData);
    // Strip password before persisting to localStorage
    const safeCurrentUser = typeof Security !== 'undefined'
      ? Security.sanitizeUserForStorage(state.currentUser)
      : (({ password, ...rest }) => rest)(state.currentUser);
    localStorage.setItem("iber_auth_user", JSON.stringify(safeCurrentUser));
    const userIndex = state.users.findIndex(u => u.id === state.currentUser.id);
    if (userIndex !== -1) {
      state.users[userIndex] = { ...state.users[userIndex], ...state.cvData };
      state.saveUsers(); // saveUsers() already strips passwords
    }
  }

  state.saveCV();
  state.renderCVPreview();
  state.renderNavbar();
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
                <h3>${s(app.jobTitle)}</h3>
                <div class="job-company-name">${s(app.company)}</div>
              </div>
            </div>
            <span class="meta-badge status-${s(app.stage)}" style="font-weight: 700;">
              ${getStageLabel(app.stage)}
            </span>
          </div>
          <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted); flex-wrap: wrap;">
            <span>📅 ${state.lang === 'ar' ? 'تاريخ التقديم:' : 'Fecha de solicitud:'} ${s(app.appliedDate)}</span>
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
    const birthDate = document.getElementById("reg-cand-birthdate").value;
    const hasLicense = document.getElementById("reg-has-license").checked;
    const hasVehicle = document.getElementById("reg-has-vehicle") ? document.getElementById("reg-has-vehicle").checked : false;

    // Licencias
    const selectedLicenses = [];
    document.querySelectorAll(".reg-license-type-cb:checked").forEach(cb => selectedLicenses.push(cb.value));

    // Sectores
    const selectedSectors = [];
    document.querySelectorAll(".reg-sector-cb:checked").forEach(cb => selectedSectors.push(cb.value));

    // Foto
    const photoPreview = document.getElementById("reg-photo-preview-img");
    const photoSrc = photoPreview ? photoPreview.src : PRESET_AVATARS[0];

    // Idiomas
    const languagesList = getLanguagesFromContainer('reg');

    state.register({
      role: "candidate",
      name,
      email,
      password: pass,
      phone,
      province,
      profession,
      legalStatus,
      photo: photoSrc,
      birthDate,
      hasDrivingLicense: hasLicense,
      drivingLicenseTypes: selectedLicenses,
      hasVehicle,
      targetSectors: selectedSectors,
      targetPositions: profession,
      academicEducation: "Educación Secundaria",
      otherCertifications: "Certificados de formación profesional",
      languagesList: languagesList.length > 0 ? languagesList : [{ language: "Español", level: "intermedio" }],
      skills: profession,
      experience: "Experiencia laboral en " + profession
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

  // Listener para calcular edad en vivo al cambiar fecha de nacimiento
  const cvBirth = document.getElementById("cv-birthdate-input");
  if (cvBirth) {
    cvBirth.addEventListener("input", (e) => updateAgeBadge('cv', e.target.value));
  }
  const regBirth = document.getElementById("reg-cand-birthdate");
  if (regBirth) {
    regBirth.addEventListener("input", (e) => updateAgeBadge('reg', e.target.value));
  }

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
  
  const iconSpan = document.createElement("span");
  iconSpan.textContent = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️';
  
  const msgSpan = document.createElement("span");
  msgSpan.textContent = String(message == null ? '' : message);

  toast.appendChild(iconSpan);
  toast.appendChild(msgSpan);

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

document.addEventListener("DOMContentLoaded", initApp);
