# 🇪🇸 IberTrabajo - منصة التوظيف والوساطة بإسبانيا
### Plataforma de Intermediación Laboral para Demandantes de Empleo y Empresas en España

---

## 🌟 Descripción General / نظرة عامة

**IberTrabajo** هي منصة ويب متطورة ومصممة بأعلى معايير الأداء والأمان لتعمل كوسيط مباشر بين **الباحثين عن عمل** و**أصحاب الشركات والمشغلين في إسبانيا**.

تتميز المنصة بنظام **حسابات مخصص مع إدارة كاملة للصلاحيات (Role-Based Access Control - RBAC)**، وتوجيه قانوني كامل لإجراءات **تسوية الوضعية (Arraigo Social / Sociolaboral / Socioformativo / Segunda Oportunidad)** وفق الإصلاح الشامل لقانون الهجرة الإسباني (*Reforma del Reglamento de Extranjería*).

تم إعداد المنصة بالكامل لتكون جاهزة للنشر والعمل على **Vercel (Frontend & CDN Global)** و**Supabase (PostgreSQL Database, Auth, Row-Level Security)** لتستوعب ملايين الزوار والعمليات اليومية بأقصى سرعة وأمان.

---

## 👥 نظام الحسابات والصلاحيات (Roles y Permisos)

### 1. حساب الباحث عن عمل (Cuenta de Candidato)
* **تصفح وفلترة الوظائف**: بحث حسب 50 مقاطعة، القطاعات، والرواتب.
* **فلتر الوضعية القانونية**: عروض تقبل عقود التسوية (*Arraigo*) وعروض تشترط إقامة سارية (*NIE*).
* **الملف الشخصي الشامل**:
  * صورة الملف الشخصي (Avatar / Photo de profil).
  * تاريخ الميلاد مع الحساب التلقائي للعمر.
  * رخصة السياقة (Permiso de conducir) مع تحديد النوع (B, C, D, C+E...) وتوفر سيارة خاصة.
  * الوظائف والقطاعات المستهدفة.
  * **فصل التكوين**: تكوين ودبلومات أكاديمية مقابل دبلومات وشهادات مهنية أخرى.
  * قائمة اللغات مع 4 مستويات كفاءة (Básico, Intermedio, Avanzado, Nativo).
* **التقديم الفوري على الوظائف** بنقرة واحدة.
* **لوحة تتبع طلباتي (Mis Solicitudes)** لمتابعة مسار التوظيف.
* **محرر السيرة الذاتية (Creador de CV)** مع إمكانية الطباعة والحفظ.

### 2. حساب المشغل / أصحاب الشركات (Cuenta de Empresa / Empleador)
* **نشر عروض العمل (Publicar Oferta)** مع تفاصيل CIF/NIF، الراتب، وتحديد قابلية التسوية (*Arraigo OK*).
* **لوحة كانبان لإدارة المترشحين (ATS Pipeline)**: تصنيف المتقدمين عبر مراحل التوظيف (*Inscrito -> Revisión -> Entrevista -> Contratado*).
* **إدارة عروض شركتي (Mis Ofertas Publicadas)**: مراقبة وتعديل وحذف العروض.
* **قاعدة الكفاءات (Base de Talentos)**: استعراض ملفات المرشحين والتواصل المباشر معهم عبر واتساب.

---

## 🛡️ تدابير الأمان المطبقة (Medidas de Seguridad)

1. **حماية من ثغرات XSS**:
   * فحص وتعقيم كافة مدخلات المستخدمين عبر مكتبة `security.js` ودالة `Security.sanitizeHTML()`.
   * عدم تخزين أو عرض وسوم خطيرة (`<script>`, `<iframe>`, `javascript:`).
2. **أمان كلمات المرور والتخزين**:
   * حظر تام لتخزين كلمات المرور بصيغة نصية في `localStorage`.
   * تجريد كلمات المرور تلقائياً قبل الحفظ بواسطة `Security.sanitizeUserForStorage()`.
   * تشفير SHA-256 للمصادقة السريعة ومصادقة Bcrypt الآمنة عبر Supabase Auth في الإنتاج.
3. **حماية من هجمات القوة الغاشمة (Rate Limiting)**:
   * محدد معدل طلبات مدمج (`checkRateLimit`) يمنع أكثر من 5 محاولات تسجيل دخول فاشلة خلال دقيقة.
4. **ترويسات الأمان الصارمة (HTTP Security Headers)**:
   * تم تكوين ترويسات أمان شاملة في `vercel.json` وخادم التطوير `server.js`:
     * `Content-Security-Policy (CSP)`
     * `X-Frame-Options: DENY` (حماية من Clickjacking)
     * `X-Content-Type-Options: nosniff` (منع MIME-sniffing)
     * `Strict-Transport-Security (HSTS)`
     * `Referrer-Policy: strict-origin-when-cross-origin`
     * `Permissions-Policy` لمنع الوصول غير المصرح به للكاميرا والميكروفون.
5. **حماية حجم الصور**:
   * تحديد سقف 500 كيلوبايت لصور الملف الشخصي لمنع استهلاك مساحة التخزين أو التسبب في بطء المتصفح.

---

## 🚀 النشر على Vercel و Supabase (Guía de Despliegue)

المنصة مبنية بنظام **DataLayer هجين** يعمل بنمطين:
* **Modo Demo**: يعمل محلياً أو على Vercel بدون إعداد قاعدة بيانات (باستخدام التخزين المحلي الآمن).
* **Modo Producción**: بمجرد إضافة مفاتيح Supabase، تتحول المنصة تلقائياً للعمل مع قاعدة بيانات PostgreSQL المركزية السحابية.

### الخطوة 1: إعداد Supabase
1. سجل حساباً مجانياً على [supabase.com](https://supabase.com).
2. أنشئ مشروعاً جديداً باسم `IberTrabajo`.
3. افتح **SQL Editor** في لوحة تحكم Supabase.
4. انسخ محتوى الملف `supabase/migrations/001_initial_schema.sql` والصقه في المحرر ثم اضغط **Run**.
   * سيتم إنشاء كافة الجداول، العلاقات، الفهارس، ودوال البحث، مع تفعيل حماية **Row Level Security (RLS)** لضمان خصوصية كل مستخدم.
5. انسخ **Project URL** و **Anon Key** من: `Settings -> API`.

### الخطوة 2: النشر على Vercel
1. سجل دخولك على [vercel.com](https://vercel.com) واربط حساب GitHub الخاص بك.
2. اضغط **Add New -> Project** واختر مستودع `IberTrabajo`.
3. في خانة **Environment Variables**، أضف المتغيرين التاليين:
   * `SUPABASE_URL`: رابط مشروعك في Supabase
   * `SUPABASE_ANON_KEY`: المفتاح العام (Anon Key)
4. اضغط **Deploy**.
5. سيصبح موقعك متاحاً عالمياً في ثوانٍ مع شبكة CDN فائقة السرعة على الرابط المخصص (مثل `https://ibertrabajo.vercel.app`).

---

## 🔑 الحسابات التجريبية (Cuentas Demo)

* **حساب باحث عن عمل (Candidato)**:
  * البريد: `ahmed@candidato.es`
  * الرمز: `demo123`
* **حساب مشغل / شركة (Empresa)**:
  * البريد: `contacto@tabernaiberica.es`
  * الرمز: `demo123`

---

## 💻 التشغيل المحلي (Desarrollo Local)

```bash
# تشغيل خادم محلي Node.js بدون أي اعتمادات خارجية
npm start

# أو فحص سلامة وتناسق جميع الأكواد
npm run check
```

الرابط المحلي: **`http://localhost:3000`**
