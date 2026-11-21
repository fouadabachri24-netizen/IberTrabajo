/**
 * IberTrabajo - Plataforma de Intermediación Laboral en España
 * State Management, i18n, Filtering, ATS, CV Builder & Mediation System
 */

// --- 1. DICCIONARIO MULTILINGÜE (ES / AR / EN) ---
const TRANSLATIONS = {
  es: {
    brand_title: "IberTrabajo",
    brand_subtitle: "Intermediación Laboral España",
    nav_explore: "Buscar Empleo",
    nav_post_job: "Publicar Oferta",
    nav_ats: "Panel Empleador (ATS)",
    nav_cv: "Creador de CV",
    nav_guide: "Guía Legal & Arraigo",
    nav_my_apps: "Mis Solicitudes",
    role_candidate: "Soy Candidato / Busco Trabajo",
    role_employer: "Soy Empresa / Empleador",
    role_agency: "Gestor / Mediador",
    hero_tag: "Portal de Empleo & Asesoría de Extranjería en España",
    hero_title: "Conectamos Trabajadores y Empresas en España",
    hero_subtitle: "Ofertas verificadas en hostelería, agricultura, construcción, cuidados y más. Apoyo a candidatos con permiso de trabajo y ofertas para procesos de arraigo.",
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
    btn_view_details: "Ver Detalles",
    btn_save: "Guardar",
    btn_saved: "Guardada",
    posted_on: "Publicado hace",
    salary_unit: "€/mes",
    
    // Application modal
    modal_apply_title: "Solicitud de Empleo",
    form_fullname: "Nombre y Apellidos",
    form_phone: "Teléfono / WhatsApp",
    form_email: "Correo Electrónico",
    form_province: "Provincia de residencia en España",
    form_legal_status: "Situación administrativa / legal en España",
    status_nie_valid: "NIE / Permiso de residencia y trabajo en vigor",
    status_nie_renewal: "En trámite de renovación / Prórroga",
    status_arraigo_needed: "Sin permiso vigente (Busco precontrato para Arraigo)",
    status_eu_citizen: "DNI español o Ciudadano de la Unión Europea",
    status_origin_visa: "En país de origen (Interesado en visado de trabajo)",
    form_experience: "Breve resumen de tu experiencia",
    form_experience_placeholder: "Indica en qué has trabajado, años de experiencia y disponibilidad horaria...",
    form_cv_file: "Adjuntar CV (PDF / Word) o usar perfil de la plataforma",
    btn_submit_application: "Enviar Solicitud a la Empresa",
    
    // Post job modal
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
    
    // ATS Pipeline
    ats_title: "Gestión de Candidatos (Pipeline ATS)",
    ats_subtitle: "Organiza y gestiona las solicitudes de tus ofertas en tiempo real",
    ats_col_applied: "Nuevas Solicitudes",
    ats_col_reviewing: "En Revisión",
    ats_col_interview: "Entrevista Agendada",
    ats_col_hired: "Contratados / Oferta Formal",
    
    // CV Builder
    cv_title: "Creador de Currículum para España",
    cv_subtitle: "Genera un CV adaptado a los estándares de selección de empresas españolas",
    cv_export_btn: "Imprimir / Guardar en PDF",
    cv_preview_title: "Vista Previa de tu CV",
    
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
    nav_cv: "إنشاء السيرة الذاتية (CV)",
    nav_guide: "الدليل القانوني وعقود العمل",
    nav_my_apps: "طلباتي المرسلة",
    role_candidate: "أنا باحث عن عمل",
    role_employer: "أنا مشغل / صاحب شركة",
    role_agency: "مستشار ووسيط قانوني",
    hero_tag: "المنصة الأولى للتوظيف والاستشارات القانونية بإسبانيا",
    hero_title: "صلة الوصل الموثوقة بين الباحثين عن عمل والشركات في إسبانيا",
    hero_subtitle: "عروض عمل يومية في الفندقة والمطاعم، الفلاحة، البناء، رعاية المسنين والخدمات. ندعم العمال الحاملين للبيرمي والباحثين عن عقد لتسوية الوضعية (Arraigo).",
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
    btn_view_details: "تفاصيل العرض",
    btn_save: "حفظ",
    btn_saved: "تم الحفظ",
    posted_on: "نشر منذ",
    salary_unit: "يورو/شهرياً",
    
    // Application modal
    modal_apply_title: "التقديم على عرض العمل",
    form_fullname: "الاسم الكامل",
    form_phone: "رقم الهاتف / الواتساب",
    form_email: "البريد الإلكتروني",
    form_province: "المحافظة التي تقيم بها في إسبانيا",
    form_legal_status: "الوضعية القانونية والإدارية في إسبانيا",
    status_nie_valid: "أملك بطاقة إقامة وعمل سارية المفعول (NIE / TIE)",
    status_nie_renewal: "في طور تجديد الإقامة / التمديد (En trámite)",
    status_arraigo_needed: "بدون أوراق حالياً (أبحث عن عقد لتسوية الوضعية - Arraigo)",
    status_eu_citizen: "حامل للجنسية الإسبانية أو جنسية أوروبية",
    status_origin_visa: "مقيم خارج إسبانيا (أرغب في عقد عمل من بلد الأصل)",
    form_experience: "ملخص خبراتك السابقة ومهاراتك",
    form_experience_placeholder: "وضح أين عملت سابقاً، سنوات الخبرة، واللغات التي تتحدثها...",
    form_cv_file: "إرفاق ملف السيرة الذاتية أو الاعتماد على ملف المنصة",
    btn_submit_application: "إرسال طلب التوظيف للشركة",
    
    // Post job modal
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
    
    // ATS Pipeline
    ats_title: "نظام إدارة المترشحين (ATS المشغلين)",
    ats_subtitle: "تتبع وقبول وفرز المترشحين لمؤسستك في منصة واحدة",
    ats_col_applied: "طلبات جديدة",
    ats_col_reviewing: "قيد المراجعة",
    ats_col_interview: "مقابلة مبرمجة",
    ats_col_hired: "تم القبول وتوقيع العقد",
    
    // CV Builder
    cv_title: "منشئ السيرة الذاتية المتوافقة مع معايير إسبانيا",
    cv_subtitle: "صمم سيرة ذاتية احترافية بالصيغة المقبولة لدى الشركات الإسبانية",
    cv_export_btn: "طباعة / تحميل بصيغة PDF",
    cv_preview_title: "معاينة السيرة الذاتية",
    
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
    nav_cv: "CV Builder",
    nav_guide: "Legal Guide & Permits",
    nav_my_apps: "My Applications",
    role_candidate: "I am a Candidate / Job Seeker",
    role_employer: "I am an Employer / Company",
    role_agency: "Labor Advisor / Mediator",
    hero_tag: "Verified Jobs & Immigration Mediation in Spain",
    hero_title: "Connecting Workers and Employers in Spain",
    hero_subtitle: "Verified job offers in hospitality, agriculture, construction, caregiving, and tech. Support for permit holders and Arraigo legal residency sponsorship.",
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
    btn_view_details: "Details",
    btn_save: "Save",
    btn_saved: "Saved",
    posted_on: "Posted",
    salary_unit: "€/month",
    
    // Application modal
    modal_apply_title: "Submit Job Application",
    form_fullname: "Full Name",
    form_phone: "Phone / WhatsApp",
    form_email: "Email Address",
    form_province: "Province in Spain",
    form_legal_status: "Legal / Residency Status in Spain",
    status_nie_valid: "Valid Spanish Work & Residency Permit (NIE/TIE)",
    status_nie_renewal: "Renewal in progress (En trámite)",
    status_arraigo_needed: "Seeking pre-contract for Arraigo (Legalization)",
    status_eu_citizen: "Spanish Citizen or EU Passport Holder",
    status_origin_visa: "Abroad (Seeking Work Visa from origin country)",
    form_experience: "Brief summary of experience",
    form_experience_placeholder: "Describe past work, years of experience, languages...",
    form_cv_file: "Attach CV file or use platform profile",
    btn_submit_application: "Send Application to Employer",
    
    // Post job modal
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
    
    // ATS Pipeline
    ats_title: "Applicant Tracking System (ATS)",
    ats_subtitle: "Track, screen and hire candidates seamlessly in real time",
    ats_col_applied: "New Applicants",
    ats_col_reviewing: "Under Review",
    ats_col_interview: "Interview Scheduled",
    ats_col_hired: "Hired & Contracted",
    
    // CV Builder
    cv_title: "Spanish Standard CV Builder",
    cv_subtitle: "Generate a professional Europass-styled Spanish resume in seconds",
    cv_export_btn: "Print / Export to PDF",
    cv_preview_title: "Resume Live Preview",
    
    // Legal Guide
    guide_title: "Spanish Labor & Immigration Legal Guide",
    guide_subtitle: "Clear insights on Spanish immigration regulations, Arraigo work contracts, and employee rights"
  }
};

// --- 2. BASE DE DATOS INICIAL DE OFERTAS REALISTAS EN ESPAÑA ---
const INITIAL_JOBS = [
  {
    id: "job-1",
    title: {
      es: "Ayudante de Cocina y Planchista",
      ar: "مساعد طباخ ومسؤول الشواء",
      en: "Kitchen Assistant & Grill Cook"
    },
    company: "Restaurante Taberna Ibérica",
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
      es: "Empresa constructora precisa oficial de primera para reformas de viviendas y locales en Valencia. Imprescindible curso de 20 horas de prevención de riesgos laborales de la construcción (PRL) y permiso de trabajo en regla. Pagas extraordinarias prorrateadas.",
      ar: "شركة بناء وتشطيبات تطلب معلم بناء من الدرجة الأولى لتجديد المنازل والمحلات في فالنسيا. يشترط التوفر على دورة السلامة المهنية (PRL 20h) وبطاقة عمل سارية المفعول (NIE). الراتب مجزي مع علاوات.",
      en: "Construction company requires an experienced bricklayer for apartment and shop renovations in Valencia. Must have the 20-hour construction occupational risk prevention certificate (PRL) and valid work authorization in Spain."
    },
    skills: ["Albañilería", "Alicatado", "Curso PRL 20h", "Yeso y Pladur"]
  },
  {
    id: "job-4",
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
      ar: "مطلوب سيدة لرعاية سيدة مسنة (82 سنة) محدودة الحركة بنظام المبيت (Interna). إعداد الوجبات، المرافقة وتنظيم الأدوية. غرفة خاصة مع حمام، التغذية متوفرة، وراحة أسبوعية 36 ساعة وفق القانون الإسباني. إمكانية تقديم عقد عمل لتسوية الإقامة.",
      en: "Live-in caregiver for an 82-year-old lady with reduced mobility. Companionship, cooking, and medication management. Private room with bathroom, full board, and 36 consecutive hours weekend off per Spanish law. We offer official registration and contract for arraigo."
    },
    skills: ["Cuidados", "Primeros Auxilios", "Cocina Española", "Paciencia"]
  },
  {
    id: "job-5",
    title: {
      es: "Camarero/a de Sala y Barra",
      ar: "نادل / نادلة صالة وبار",
      en: "Restaurant Waiter / Waitress"
    },
    company: "Grupo Gastronómico Bulevar",
    cif: "B-93452109",
    province: "Málaga",
    city: "Málaga Capital / Torremolinos",
    sector: "Hostelería",
    salary: 1420,
    salaryType: "neto",
    contractType: "indefinido",
    arraigoOk: false,
    nieRequired: true,
    hasHousing: false,
    verified: true,
    whatsapp: "34677112233",
    postedDaysAgo: 4,
    description: {
      es: "Restaurante de referencia en Costa del Sol busca personal de sala con buen trato al cliente y agilidad con bandeja. Valorable conocimiento de inglés o francés además de español. Turnos rotativos continuos y propinas semanales.",
      ar: "مطعم مميز في كوستا ديل سول يبحث عن نادل لبق وسريع في الخدمة. يفضل إتقان الإنجليزية أو الفرنسية إلى جانب الإسبانية. نظام مناوبات مستمر وإكراميات أسبوعية ممتازة.",
      en: "Renowned restaurant on Costa del Sol is looking for floor service staff with excellent customer care skills. English or French in addition to Spanish is a plus. Continuous rotating shifts and weekly tips."
    },
    skills: ["Hostelería", "Atención al cliente", "Bandeja", "Inglés básico"]
  },
  {
    id: "job-6",
    title: {
      es: "Repartidor con Furgoneta de Empresa",
      ar: "سائق وموزع طرود بشاحنة الشركة",
      en: "Parcel Delivery Driver (Company Van Provided)"
    },
    company: "IberLogistics Express",
    cif: "B-50129384",
    province: "Zaragoza",
    city: "Zaragoza (Plaza Logística)",
    sector: "Logística y Almacén",
    salary: 1560,
    salaryType: "neto",
    contractType: "indefinido",
    arraigoOk: false,
    nieRequired: true,
    hasHousing: false,
    verified: true,
    whatsapp: "34644998877",
    postedDaysAgo: 2,
    description: {
      es: "Reparto de paquetería de comercio electrónico en rutas asignadas de Zaragoza y alrededores. Empresa facilita furgoneta, combustible y móvil de empresa. Requisitos: Carnet B con al menos 2 años de antigüedad y permiso de trabajo en regla.",
      ar: "توزيع الطرود والشحنات عبر مسارات محددة في سرقسطة والمناطق المحيطة بها. الشركة توفر شاحنة النقل، الوقود، وهاتف العمل. الشروط: رخصة سياقة B صالحة لمدة سنتين على الأقل وتصريح إقامة وعمل ساري المفعول.",
      en: "E-commerce parcel delivery along assigned routes in Zaragoza. Company provides van, fuel, and smartphone. Requirements: Spanish/EU driving license B held for at least 2 years and valid work permit."
    },
    skills: ["Carnet B", "Reparto", "GPS", "Logística"]
  },
  {
    id: "job-7",
    title: {
      es: "Instalador de Paneles Solares y Electricista",
      ar: "فني تركيب الألواح الشمسية وكهربائي",
      en: "Solar Panel Installer & Electrician"
    },
    company: "Sol Levante Energía Renovable",
    cif: "B-30876541",
    province: "Murcia",
    city: "Murcia / Cartagena",
    sector: "Electricidad y Energía",
    salary: 1850,
    salaryType: "neto",
    contractType: "indefinido",
    arraigoOk: true,
    nieRequired: false,
    hasHousing: false,
    verified: true,
    whatsapp: "34688223311",
    postedDaysAgo: 5,
    description: {
      es: "Instalación de sistemas fotovoltaicos en cubiertas industriales y residenciales en la Región de Murcia. Formación continua a cargo de la empresa. Para técnicos cualificados sin documentación en vigor, facilitamos contrato para tramitar Arraigo Laboral o Sociolaboral.",
      ar: "تركيب أنظمة الطاقة الشمسية على أسطح المباني والمصانع في منطقة مرسية. تدريب وتأهيل مستمر من الشركة. بالنسبة للفنيين ذوي الخبرة الراغبين في تسوية أوضاعهم، نوفر عقد عمل رسمي لمسطرة الأرايغو.",
      en: "Photovoltaic system installations on industrial and residential roofs in Murcia. Continuous training provided. For skilled technicians without current residency papers, we provide pre-contracts for Arraigo regularization."
    },
    skills: ["Electricidad", "Trabajo en Altura", "Placas Solares", "PRL"]
  },
  {
    id: "job-8",
    title: {
      es: "Personal de Limpieza y Mantenimiento Hotelero",
      ar: "عامل / عاملة نظافة وصيانة فندقية",
      en: "Hotel Cleaning & Maintenance Staff"
    },
    company: "Resort & Spa Playa Paraíso",
    cif: "B-07119283",
    province: "Illes Balears",
    city: "Palma de Mallorca",
    sector: "Limpieza",
    salary: 1520,
    salaryType: "neto",
    contractType: "fijo",
    arraigoOk: false,
    nieRequired: true,
    hasHousing: true,
    verified: true,
    whatsapp: "34633778899",
    postedDaysAgo: 1,
    description: {
      es: "Limpieza de habitaciones y zonas comunes en complejo hotelero 4 estrellas. Incluye alojamiento para el personal en residencia de trabajadores durante la temporada. Contrato fijo-discontinuo con alta inmediata en Seguridad Social.",
      ar: "تنظيف الغرف والمرافق العامة في منتجع فندقي 4 نجوم. يشمل العرض سكناً مخصصاً للعمال طيلة فترة الموسم السياحي. عقد دوري (Fijo-discontinuo) مع تسجيل فوري في الضمان الاجتماعي الإسباني.",
      en: "Room and common area housekeeping in a 4-star resort in Mallorca. Includes employee accommodation in staff residence during the season. Official fixed-discontinuous contract with instant Social Security registration."
    },
    skills: ["Limpieza", "Hoteles", "Organización", "Atención al detalle"]
  },
  {
    id: "job-9",
    title: {
      es: "Atención al Cliente y Mediación Bilingüe (Árabe / Español)",
      ar: "خدمة العملاء والوساطة ثنائية اللغة (عربي / إسباني)",
      en: "Bilingual Customer Support & Mediation (Arabic / Spanish)"
    },
    company: "Gestoría e Intermediación Al-Andalus",
    cif: "B-03998877",
    province: "Alicante",
    city: "Alicante / Elche",
    sector: "Administrativo y Asesoría",
    salary: 1650,
    salaryType: "neto",
    contractType: "indefinido",
    arraigoOk: false,
    nieRequired: true,
    hasHousing: false,
    verified: true,
    whatsapp: "34699001122",
    postedDaysAgo: 3,
    description: {
      es: "Gestoría especializada en trámites de extranjería y contratos laborales precisa profesional con dominio fluido de árabe y español para atención a usuarios, traducción de documentos y apoyo en tramitaciones ante oficinas de extranjería.",
      ar: "مكتب استشارات وإجراءات قانونية متخصص في شؤون الأجانب وعقود العمل يبحث عن موظف متقن للغتين العربية والإسبانية لمساعدة المتعاملين، ترجمة الوثائق، وتسهيل الإجراءات أمام مكاتب الهجرة.",
      en: "Consultancy firm specialized in immigration and labor contracts seeks a professional fluent in Arabic and Spanish for client communication, document translation, and assistance with foreigners office filings."
    },
    skills: ["Árabe", "Español", "Extranjería", "Ofimática", "Atención"]
  }
];

// Provincias españolas principales
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

// --- 3. GESTIÓN DEL ESTADO DE LA APLICACIÓN ---
class AppState {
  constructor() {
    this.lang = localStorage.getItem("iber_lang") || "es";
    this.role = localStorage.getItem("iber_role") || "candidate";
    this.activeTab = "jobs";
    
    // Cargar ofertas de localStorage o iniciales
    const savedJobs = localStorage.getItem("iber_jobs");
    this.jobs = savedJobs ? JSON.parse(savedJobs) : INITIAL_JOBS;
    
    // Guardar ofertas favoritas
    const savedBookmarks = localStorage.getItem("iber_saved_jobs");
    this.savedJobIds = savedBookmarks ? JSON.parse(savedBookmarks) : [];
    
    // Solicitudes realizadas
    const savedApps = localStorage.getItem("iber_applications");
    this.applications = savedApps ? JSON.parse(savedApps) : [
      {
        id: "app-101",
        jobId: "job-1",
        jobTitle: "Ayudante de Cocina y Planchista",
        company: "Restaurante Taberna Ibérica",
        candidateName: "Youssef El Amrani",
        candidatePhone: "+34 611 98 76 54",
        candidateLegal: "status_arraigo_needed",
        appliedDate: "2026-11-20",
        stage: "reviewing" // applied, reviewing, interview, hired, rejected
      },
      {
        id: "app-102",
        jobId: "job-2",
        jobTitle: "Peón Agrícola / Recolección en Invernaderos",
        company: "AgroSur Levante S.L.",
        candidateName: "Mohamed Benali",
        candidatePhone: "+34 622 11 22 33",
        candidateLegal: "status_nie_valid",
        appliedDate: "2026-11-19",
        stage: "applied"
      },
      {
        id: "app-103",
        jobId: "job-4",
        jobTitle: "Cuidadora Interna para Persona Mayor",
        company: "Familia García / ServiHogar",
        candidateName: "Fatima Zahra",
        candidatePhone: "+34 677 88 99 00",
        candidateLegal: "status_arraigo_needed",
        appliedDate: "2026-11-18",
        stage: "interview"
      }
    ];

    // Filtros activos
    this.filters = {
      keyword: "",
      province: "",
      sector: "",
      permit: "all", // all, arraigo, nie
      contract: "all",
      housing: false
    };

    // Perfil CV en memoria
    this.cvData = JSON.parse(localStorage.getItem("iber_cv")) || {
      fullName: "Ahmed Mansouri",
      profession: "Cocinero & Ayudante de Hostelería",
      phone: "+34 612 345 678",
      email: "ahmed.mansouri@ejemplo.es",
      province: "Madrid",
      legalStatus: "Permiso de residencia y trabajo en vigor (NIE)",
      languages: "Árabe (Nativo), Español (Fluido / B2), Inglés (Básico)",
      skills: "Cocina mediterránea, manipulación de alimentos, corte, gestión de pedidos",
      experience: "3 años en Restaurante El Olivo (Madrid) como ayudante de cocina.\n2 años de experiencia previa en sector hostelero.",
      education: "Certificado de Profesionalidad en Operaciones Básicas de Cocina - Madrid"
    };
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

  setLanguage(newLang) {
    this.lang = newLang;
    localStorage.setItem("iber_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = (newLang === "ar") ? "rtl" : "ltr";
    this.render();
  }

  setRole(newRole) {
    this.role = newRole;
    localStorage.setItem("iber_role", newRole);
    if (newRole === "employer") {
      this.activeTab = "ats";
    } else {
      this.activeTab = "jobs";
    }
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

// --- 4. MOTOR DE RENDERIZADO Y VISTAS ---

function initApp() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = (state.lang === "ar") ? "rtl" : "ltr";
  
  // Rellenar selectores de provincias en el HTML
  populateProvinces();
  populateSectors();
  
  // Event listeners globales
  setupEventListeners();
  
  // Renderizar la vista activa
  state.render();
}

AppState.prototype.render = function() {
  applyTranslations();
  updateNavState();
  
  const jobsSection = document.getElementById("jobs-view");
  const atsSection = document.getElementById("ats-view");
  const cvSection = document.getElementById("cv-view");
  const guideSection = document.getElementById("guide-view");
  const myAppsSection = document.getElementById("my-apps-view");
  
  if (jobsSection) jobsSection.style.display = (this.activeTab === "jobs") ? "block" : "none";
  if (atsSection) atsSection.style.display = (this.activeTab === "ats") ? "block" : "none";
  if (cvSection) cvSection.style.display = (this.activeTab === "cv") ? "block" : "none";
  if (guideSection) guideSection.style.display = (this.activeTab === "guide") ? "block" : "none";
  if (myAppsSection) myAppsSection.style.display = (this.activeTab === "my-apps") ? "block" : "none";
  
  if (this.activeTab === "jobs") {
    this.renderJobsList();
  } else if (this.activeTab === "ats") {
    this.renderAtsBoard();
  } else if (this.activeTab === "cv") {
    this.renderCVPreview();
  } else if (this.activeTab === "my-apps") {
    this.renderMyApplications();
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

  const roleSelect = document.getElementById("role-switcher");
  if (roleSelect) roleSelect.value = state.role;
}

function updateNavState() {
  document.querySelectorAll(".nav-link").forEach(link => {
    const tab = link.getAttribute("data-tab");
    if (tab === state.activeTab) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function populateProvinces() {
  const selects = [document.getElementById("search-province"), document.getElementById("post-job-province"), document.getElementById("apply-province")];
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
  const selects = [document.getElementById("search-sector"), document.getElementById("post-job-sector")];
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
  
  // Filtrar ofertas
  const filtered = this.jobs.filter(job => {
    // Filtro por palabra clave
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
    
    // Filtro provincia
    if (this.filters.province && job.province !== this.filters.province) {
      return false;
    }
    
    // Filtro sector
    if (this.filters.sector && job.sector !== this.filters.sector) {
      return false;
    }
    
    // Filtro legal / extranjería
    if (this.filters.permit === "arraigo" && !job.arraigoOk) {
      return false;
    }
    if (this.filters.permit === "nie" && !job.nieRequired) {
      return false;
    }
    
    // Filtro alojamiento
    if (this.filters.housing && !job.hasHousing) {
      return false;
    }
    
    // Filtro tipo contrato
    if (this.filters.contract !== "all" && job.contractType !== this.filters.contract) {
      return false;
    }
    
    return true;
  });

  if (countElem) {
    countElem.textContent = filtered.length;
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
        <p style="font-size: 1.25rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.5rem;">
          ${state.lang === 'ar' ? 'لم يتم العثور على عروض مطابقة' : 'No se encontraron ofertas con estos criterios'}
        </p>
        <p style="color: var(--text-light); margin-bottom: 1.5rem;">
          ${state.lang === 'ar' ? 'جرب تغيير معايير البحث أو مسح الفلاتر' : 'Prueba a ajustar o borrar los filtros seleccionados'}
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
          <button class="btn btn-outline btn-sm" onclick="state.toggleSaveJob('${job.id}')" title="Guardar oferta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? '#d97706' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>

        <div class="job-meta-badges">
          <span class="meta-badge salary">
            💶 ${job.salary.toLocaleString()} ${state.t("salary_unit")} (${job.salaryType})
          </span>
          <span class="meta-badge">
            📍 ${job.city || job.province} (${job.province})
          </span>
          <span class="meta-badge">
            📑 ${job.contractType.toUpperCase()}
          </span>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                ${state.t("btn_whatsapp")}
              </a>
            ` : ''}
            <button class="btn btn-primary btn-sm" onclick="openApplyModal('${job.id}')">
              ${state.t("btn_apply")}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// --- 6. GESTIÓN DE CANDIDATURAS (ATS KANBAN) ---
AppState.prototype.renderAtsBoard = function() {
  const container = document.getElementById("ats-board-container");
  if (!container) return;

  const stages = [
    { key: "applied", titleKey: "ats_col_applied", cssClass: "status-applied" },
    { key: "reviewing", titleKey: "ats_col_reviewing", cssClass: "status-interview" },
    { key: "interview", titleKey: "ats_col_interview", cssClass: "status-offered" },
    { key: "hired", titleKey: "ats_col_hired", cssClass: "status-hired" }
  ];

  container.innerHTML = `
    <div class="ats-board">
      ${stages.map(stage => {
        const stageApps = state.applications.filter(app => app.stage === stage.key);
        return `
          <div class="ats-column">
            <div class="ats-column-header">
              <span class="ats-col-title">${state.t(stage.titleKey)}</span>
              <span class="ats-col-count">${stageApps.length}</span>
            </div>
            <div class="ats-cards-list" ondragover="event.preventDefault()" ondrop="handleDropAts(event, '${stage.key}')">
              ${stageApps.map(app => `
                <div class="ats-candidate-card" draggable="true" ondragstart="handleDragAts(event, '${app.id}')">
                  <div class="ats-card-name">${app.candidateName}</div>
                  <div class="ats-card-job">💼 ${app.jobTitle}</div>
                  <div class="ats-card-status-badge ${stage.cssClass}">
                    ${state.t(app.candidateLegal || 'status_nie_valid')}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    📞 ${app.candidatePhone}
                  </div>
                  <div class="ats-actions">
                    <button class="btn btn-outline btn-sm" style="flex: 1;" onclick="advanceCandidateStage('${app.id}')" title="Avanzar de etapa">
                      ➡️ ${state.lang === 'ar' ? 'ترقية' : 'Avanzar'}
                    </button>
                    <a href="https://wa.me/${app.candidatePhone.replace(/[^0-9]/g, '')}" target="_blank" class="btn btn-whatsapp btn-sm" title="Contactar WhatsApp">
                      💬
                    </a>
                  </div>
                </div>
              `).join('')}
              ${stageApps.length === 0 ? `
                <div style="text-align: center; padding: 2rem 0.5rem; color: var(--text-light); font-size: 0.85rem;">
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

// --- 7. CREADOR DE CURRÍCULUM EN FORMATO ESPAÑOL (CV BUILDER) ---
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
  showToast(state.lang === 'ar' ? 'تم حفظ السيرة الذاتية بنجاح' : 'Currículum actualizado correctamente', "success");
}

function printCV() {
  window.print();
}

// --- 8. MIS SOLICITUDES (CANDIDATO) ---
AppState.prototype.renderMyApplications = function() {
  const container = document.getElementById("my-apps-container");
  if (!container) return;

  if (this.applications.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
        <p style="font-size: 1.15rem; color: var(--text-muted);">
          ${state.lang === 'ar' ? 'لم تقم بتقديم أي طلب توظيف حتى الآن' : 'Aún no te has inscrito en ninguna oferta de empleo'}
        </p>
        <button class="btn btn-primary btn-sm" style="margin-top: 1rem;" onclick="switchTab('jobs')">
          ${state.t("nav_explore")}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="jobs-list">
      ${this.applications.map(app => `
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
          <div style="display: flex; gap: 1rem; font-size: 0.85rem; color: var(--text-muted);">
            <span>📅 ${state.lang === 'ar' ? 'تاريخ التقديم:' : 'Fecha de solicitud:'} ${app.appliedDate}</span>
            <span>⚖️ ${state.t(app.candidateLegal)}</span>
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

// --- 9. MODALES DE POSTULACIÓN Y PUBLICACIÓN ---
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

  // Pre-rellenar con datos de perfil si existen
  if (state.cvData) {
    const nameInput = document.getElementById("apply-fullname");
    const phoneInput = document.getElementById("apply-phone");
    const emailInput = document.getElementById("apply-email");
    if (nameInput) nameInput.value = state.cvData.fullName || "";
    if (phoneInput) phoneInput.value = state.cvData.phone || "";
    if (emailInput) emailInput.value = state.cvData.email || "";
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
    jobTitle: state.getJobLocalized(job, "title"),
    company: job.company,
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

// Modal Publicar Oferta
function openPostJobModal() {
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

  state.renderJobsList();
}

// --- 10. FILTROS Y EVENTOS GLOBALES ---
function setupEventListeners() {
  // Cambio de idioma
  const langSel = document.getElementById("lang-switcher");
  if (langSel) {
    langSel.addEventListener("change", (e) => state.setLanguage(e.target.value));
  }

  // Cambio de rol
  const roleSel = document.getElementById("role-switcher");
  if (roleSel) {
    roleSel.addEventListener("change", (e) => state.setRole(e.target.value));
  }

  // Búsqueda por palabra clave con debounce
  const searchInput = document.getElementById("search-keyword");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.filters.keyword = e.target.value;
      state.renderJobsList();
    });
  }

  // Selector de provincia de búsqueda
  const provSearch = document.getElementById("search-province");
  if (provSearch) {
    provSearch.addEventListener("change", (e) => {
      state.filters.province = e.target.value;
      state.renderJobsList();
    });
  }

  // Selector de sector
  const secSearch = document.getElementById("search-sector");
  if (secSearch) {
    secSearch.addEventListener("change", (e) => {
      state.filters.sector = e.target.value;
      state.renderJobsList();
    });
  }

  // Radio filters de situación legal / arraigo
  document.querySelectorAll("input[name='filter-permit']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.filters.permit = e.target.value;
      state.renderJobsList();
    });
  });

  // Checkbox de alojamiento
  const housingCheck = document.getElementById("filter-housing");
  if (housingCheck) {
    housingCheck.addEventListener("change", (e) => {
      state.filters.housing = e.target.checked;
      state.renderJobsList();
    });
  }

  // Filtro tipo contrato
  document.querySelectorAll("input[name='filter-contract']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.filters.contract = e.target.value;
      state.renderJobsList();
    });
  });

  // Pestañas de navegación
  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = btn.getAttribute("data-tab");
      if (tab) switchTab(tab);
    });
  });

  // Quick tags
  document.querySelectorAll(".quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const kw = tag.getAttribute("data-query");
      if (searchInput) searchInput.value = kw;
      state.filters.keyword = kw;
      state.renderJobsList();
    });
  });

  // Formularios
  const applyForm = document.getElementById("apply-form");
  if (applyForm) applyForm.addEventListener("submit", handleApplySubmit);

  const postJobForm = document.getElementById("post-job-form");
  if (postJobForm) postJobForm.addEventListener("submit", handlePostJobSubmit);

  const cvForm = document.getElementById("cv-edit-form");
  if (cvForm) cvForm.addEventListener("submit", saveCVForm);
}

function switchTab(tabName) {
  state.activeTab = tabName;
  state.render();
  window.scrollTo({ top: 380, behavior: 'smooth' });
}

function clearAllFilters() {
  state.filters = {
    keyword: "",
    province: "",
    sector: "",
    permit: "all",
    contract: "all",
    housing: false
  };

  const kwInput = document.getElementById("search-keyword");
  if (kwInput) kwInput.value = "";
  const provInput = document.getElementById("search-province");
  if (provInput) provInput.value = "";
  const secInput = document.getElementById("search-sector");
  if (secInput) secInput.value = "";
  const housingCheck = document.getElementById("filter-housing");
  if (housingCheck) housingCheck.checked = false;

  const permitAll = document.querySelector("input[name='filter-permit'][value='all']");
  if (permitAll) permitAll.checked = true;

  const contractAll = document.querySelector("input[name='filter-contract'][value='all']");
  if (contractAll) contractAll.checked = true;

  state.renderJobsList();
}

// Sistema de Notificaciones Toast
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️'}</span>
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

// Inicializar al cargar el DOM
document.addEventListener("DOMContentLoaded", initApp);
