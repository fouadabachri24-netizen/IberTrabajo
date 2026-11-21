# 🇪🇸 IberTrabajo - منصة التوظيف والوساطة بإسبانيا
### Plataforma de Intermediación Laboral para Demandantes de Empleo y Empresas en España

---

## 🌟 Descripción General / Resumen

**IberTrabajo** es una plataforma web moderna, accesible e interactiva diseñada específicamente para actuar como **intermediario laboral** entre personas que buscan empleo y empresas/empleadores en España.

Está especialmente adaptada al mercado laboral español, incluyendo tanto a trabajadores nacionales y comunitarios como a **trabajadores migrantes y solicitantes de regularización**, facilitando el filtro y la gestión de contratos válidos para trámites de **Arraigo (Social, Sociolaboral, Formación)** conforme al **Reglamento de Extranjería**.

---

## 🚀 Características Principales

1. **Soporte Multilingüe Completo (ES / AR / EN)**:
   - **Español (ES)**: Lengua vehicular oficial del mercado laboral en España.
   - **العربية (AR)**: Soporte completo con interfaz adaptada **RTL (من اليمين إلى اليسار)** للجالية العربية والباحثين عن عمل من دول شمال إفريقيا والشرق الأوسط.
   - **English (EN)**: Para profesionales internacionales y expatriados.

2. **Doble Modalidad / Perfiles de Usuario**:
   - **Modo Candidato (Demandante de empleo)**:
     - Búsqueda con filtros avanzados: palabra clave, provincia (50 provincias españolas), sector, modalidad de contrato.
     - **Filtro legal de extranjería**: Selección específica entre ofertas que *"Aceptan precontrato para Arraigo/Regularización"* o *"Requieren permiso de trabajo en vigor (NIE)"*.
     - Filtro de **alojamiento incluido** (clave en agricultura y hostelería de temporada).
     - Inscripción en ofertas en 1 clic con selección de situación administrativa.
     - Seguimiento en tiempo real de *"Mis Solicitudes"*.
     - Contacto directo por **WhatsApp con RRHH**.
   - **Modo Empresa / Empleador**:
     - Publicación de ofertas con validación de cumplimiento del **SMI (Salario Mínimo Interprofesional)** y convenio.
     - **Panel ATS (Applicant Tracking System)** con tablero Kanban para mover candidatos por fases: *Nuevas Solicitudes ➡️ En Revisión ➡️ Entrevista Agendada ➡️ Contratados*.
     - Contacto directo con el candidato.
   - **Modo Gestor / Mediador**:
     - Asistencia técnica y asesoramiento en redacción de precontratos de extranjería.

3. **Creador de CV Adaptado a Estándares de España**:
   - Generador en vivo de Currículum Vitae con estructura clara: Datos personales, Situación administrativa/NIE, Experiencia laboral, Formación y Certificados, Idiomas y Competencias.
   - Botón directo para **Imprimir o Guardar en PDF**.

4. **Guía Legal y de Extranjería**:
   - Resumen didáctico del **Reglamento de Extranjería**: Arraigo Social, Sociolaboral y para la Formación.
   - Requisitos obligatorios de contratación para empresas (solvencia económica, estar al corriente con Hacienda y Seguridad Social, SMI 2026).
   - Acceso a asesoría personalizada por WhatsApp.

---

## 📂 Estructura del Proyecto

```
spain-job-portal/
├── index.html        # Estructura principal y vistas de la aplicación
├── styles.css        # Sistema de diseño moderno, CSS Grid/Flexbox y soporte RTL
├── app.js            # Lógica reactiva, i18n, estado local, filtros y ATS Kanban
├── server.js         # Servidor HTTP Node.js sin dependencias externas
├── package.json      # Metadatos del proyecto y scripts de ejecución
└── README.md         # Documentación detallada
```

---

## 💻 Cómo Ejecutar la Aplicación

### Opción 1: Con Node.js (Servidor Local)
Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm start
# O bien:
node server.js
```
A continuación, abre en tu navegador:
👉 **`http://localhost:3000`**

### Opción 2: Apertura directa
Puedes hacer doble clic en el archivo `index.html` o abrirlo directamente en Google Chrome / Microsoft Edge. No requiere compilación ni dependencias pesadas.

---

## ⚖️ Marco Legal y Normativa de Referencia en España
- **Real Decreto Legislativo 2/2015** (Estatuto de los Trabajadores).
- **Ley Orgánica 4/2000** y Real Decreto de desarrollo del **Reglamento de Extranjería** (Figuras de Arraigo Social, Sociolaboral y Formación).
- **Salario Mínimo Interprofesional (SMI)** fijado anualmente por el Ministerio de Trabajo y Economía Social.
