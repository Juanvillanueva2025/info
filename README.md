
# Hugo Herrera - Linktree Personalizado

Esta es una aplicación web tipo Linktree personalizada para Hugo Herrera, Entrenador de Ventas Especializado. Construida con Next.js 14 (App Router), TypeScript y Tailwind CSS, esta aplicación no solo presenta los enlaces importantes de Hugo, sino que también incluye un sistema de captura de leads para descargar el "Mapa Definitivo de Objeciones", con envío automático de notificaciones por correo electrónico utilizando Resend.

El diseño replica fielmente la referencia visual proporcionada, asegurando una experiencia de usuario coherente y profesional tanto en dispositivos móviles como de escritorio.

## ✨ Características Principales

*   **Diseño Personalizado:** Interfaz de usuario limpia y moderna basada en la imagen de referencia, con el avatar de Hugo Herrera y sus colores corporativos.
*   **Enlaces Centralizados:** Acceso rápido a las redes sociales (Facebook, Instagram, TikTok), contacto por WhatsApp y enlaces a sus libros ("Cerrador Experto", "Líder Experto").
*   **Captura de Leads:** Un modal interactivo permite a los visitantes descargar el "Mapa Definitivo de Objeciones" a cambio de su nombre, correo electrónico y teléfono.
*   **Validación de Formulario:** Validación en tiempo real en el lado del cliente para asegurar que los datos ingresados sean correctos (campos requeridos, formato de email y teléfono internacional).
*   **Notificaciones por Email:** Integración con Resend para enviar automáticamente un correo electrónico al email de Hugo con los datos de cada nuevo lead capturado.
*   **Responsive Design:** Totalmente adaptado para una visualización óptima en cualquier tamaño de pantalla (mobile-first).
*   **Optimización SEO:** Metadatos básicos configurados para mejorar la visibilidad en motores de búsqueda.
*   **Manejo de Estados:** Indicadores visuales de carga durante el envío del formulario y mensajes de confirmación o error para el usuario.

## 🚀 Stack Tecnológico

*   **Framework:** Next.js 14 (con App Router)
*   **Lenguaje:** TypeScript
*   **Estilos:** Tailwind CSS
*   **Envío de Emails:** Resend
*   **Iconos:** React Icons
*   **Despliegue:** Vercel (recomendado)

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

*   Node.js (versión 18.17 o superior recomendada)
*   pnpm (o npm/yarn si prefieres, aunque los comandos aquí usan pnpm)

## ⚙️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

1.  **Clona el Repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd hugo-linktree
    ```

2.  **Instala las Dependencias:**
    Utilizando pnpm (recomendado):
    ```bash
    pnpm install
    ```
    O si prefieres npm:
    ```bash
    npm install
    ```
    O con yarn:
    ```bash
    yarn install
    ```

3.  **Configura las Variables de Entorno:**
    *   Crea un archivo llamado `.env.local` en la raíz del proyecto.
    *   Copia el contenido del archivo `.env.local.example` en tu nuevo archivo `.env.local`.
    *   Rellena los valores correspondientes:
        *   `RESEND_API_KEY`: Tu clave API secreta de Resend. Puedes obtenerla desde [tu cuenta de Resend](https://resend.com/api-keys).
        *   `NEXT_PUBLIC_EMAIL_TO`: La dirección de correo electrónico donde deseas recibir las notificaciones de nuevos leads (ej. `juanvillanueva0198@gmail.com`).
        *   `NEXT_PUBLIC_EMAIL_FROM`: La dirección de correo electrónico que aparecerá como remitente. **Importante:** Para producción, esta debe ser una dirección de un dominio que hayas verificado en Resend. Para pruebas locales, puedes usar `onboarding@resend.dev` si aún no tienes un dominio verificado.

    Tu archivo `.env.local` debería verse así (con tus propios valores):
    ```plaintext
    # Variables de Entorno Requeridas

    RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxx
    NEXT_PUBLIC_EMAIL_TO=juanvillanueva0198@gmail.com
    NEXT_PUBLIC_EMAIL_FROM=tu@dominioverificado.com # o onboarding@resend.dev para pruebas
    ```

## ▶️ Ejecutar en Desarrollo

Una vez instaladas las dependencias y configuradas las variables de entorno, puedes iniciar el servidor de desarrollo:

```bash
pnpm dev
```

O con npm:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## 🛠️ Build para Producción

Para crear una versión optimizada de la aplicación para producción:

```bash
pnpm build
```

O con npm:

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Esto generará la carpeta `.next` con los archivos listos para el despliegue.

## ☁️ Despliegue en Vercel

Vercel es la plataforma recomendada para desplegar aplicaciones Next.js, ya que ofrece una integración perfecta.

1.  **Sube tu código a un repositorio Git** (GitHub, GitLab, Bitbucket).
2.  **Regístrate o inicia sesión en [Vercel](https://vercel.com/).**
3.  **Importa tu proyecto Git:**
    *   Haz clic en "Add New..." -> "Project".
    *   Selecciona tu repositorio Git.
    *   Vercel detectará automáticamente que es un proyecto Next.js.
4.  **Configura las Variables de Entorno:**
    *   Ve a la sección "Environment Variables" dentro de la configuración de tu proyecto en Vercel.
    *   Añade las mismas variables que definiste en tu archivo `.env.local`:
        *   `RESEND_API_KEY` (márcala como "Secret" si es posible)
        *   `NEXT_PUBLIC_EMAIL_TO`
        *   `NEXT_PUBLIC_EMAIL_FROM`
    *   **Importante:** Asegúrate de que `NEXT_PUBLIC_EMAIL_FROM` sea un dominio verificado en Resend para que los correos no lleguen a spam en producción.
5.  **Despliega:**
    *   Haz clic en el botón "Deploy".
    *   Vercel construirá y desplegará tu aplicación automáticamente.
6.  **Actualiza la URL en `layout.tsx` (Opcional pero recomendado):**
    *   Una vez que tengas la URL pública de Vercel, edita el archivo `app/layout.tsx` y actualiza el campo `openGraph.url` con tu URL de producción para mejorar el SEO y el sharing en redes sociales.

¡Listo! Tu aplicación Linktree personalizada estará disponible públicamente.

## 📂 Estructura del Proyecto

```
/
├── app/                      # Directorio principal de la aplicación (App Router)
│   ├── layout.tsx            # Layout principal (incluye SEO metadata)
│   ├── page.tsx              # Página principal que renderiza LinkTree
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts      # Endpoint API para el envío de emails con Resend
│   └── globals.css           # Estilos globales de Tailwind
├── components/               # Componentes reutilizables de React
│   ├── LinkTree.tsx          # Componente principal que estructura la página
│   ├── LeadModal.tsx         # Componente del modal de captura de leads
│   └── LinkButton.tsx        # Componente para los botones de enlace
├── lib/                      # Módulos auxiliares o configuraciones
│   └── resend.ts             # (Archivo no usado actualmente, la config está en route.ts)
├── public/                   # Archivos estáticos
│   └── hugo-avatar.jpg       # Imagen de perfil de Hugo
├── .env.local.example        # Ejemplo de archivo de variables de entorno
├── .eslintrc.json            # Configuración de ESLint
├── .gitignore                # Archivos ignorados por Git
├── next.config.js            # Configuración de Next.js
├── package.json              # Dependencias y scripts del proyecto
├── pnpm-lock.yaml            # Lockfile de pnpm
├── postcss.config.mjs        # Configuración de PostCSS (para Tailwind)
├── tailwind.config.ts        # Configuración de Tailwind CSS
├── tsconfig.json             # Configuración de TypeScript
└── README.md                 # Este archivo
```

---

Desarrollado con ❤️ por Manus.

