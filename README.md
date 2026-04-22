# Porras Entre Amigos 🏆

Plataforma moderna y segura para gestionar tus porras con amigos, de forma rápida y sencilla.

## 🚀 Tecnologías

### Frontend
- **React (Vite)**: Interfaz de usuario dinámica y rápida.
- **React Router**: Gestión de navegación y rutas protegidas.
- **Tailwind CSS**: Estilado moderno y responsive.
- **Lucide React**: Iconografía elegante.

### Backend
- **Node.js & Express**: API REST escalable.
- **Sequelize**: ORM para la gestión de base de datos.
- **SQLite**: Base de datos ligera para el almacenamiento de datos.
- **Bcrypt**: Hashing seguro de contraseñas.
- **JWT (JSON Web Tokens)**: Gestión de sesiones seguras.

## 🔒 Seguridad Implementada

El proyecto utiliza estándares de seguridad modernos para proteger los datos de los usuarios:

- **Cookies HttpOnly**: El token de sesión (JWT) se almacena en una cookie `HttpOnly`, lo que impide el acceso desde JavaScript y protege contra ataques XSS.
- **Double Submit Cookie Pattern**: Implementación de protección contra CSRF (Cross-Site Request Forgery) mediante el uso de tokens cruzados entre cookies y cabeceras personalizadas.
- **Middleware de Validación**: Validación estricta de tokens y protección de rutas en el servidor.

## 🛠️ Instalación y Uso

### Requisitos previos
- Node.js (v20 o superior recomendado)
- pnpm

### Configuración del Backend
1. Entra en la carpeta `backend/`.
2. Instala las dependencias: `pnpm install`.
3. Crea un archivo `.env` basado en las variables necesarias (`PORT`, `CORS_ORIGIN`, `JWT_SECRET`).
4. Inicia el servidor de desarrollo: `pnpm dev`.

### Configuración del Frontend
1. En la raíz del proyecto, instala las dependencias: `pnpm install`.
2. Inicia el cliente de desarrollo: `pnpm dev`.

## 📂 Estructura del Proyecto

```text
/
├── backend/            # Lógica del servidor (Express, Sequelize, SQLite)
│   ├── controllers/    # Controladores de la API
│   ├── models/         # Modelos de la base de datos
│   ├── routes/         # Definición de endpoints
│   └── services/       # Lógica de negocio y utilidades
├── src/                # Código fuente del Frontend (React)
│   ├── actions/        # Acciones de React (Formularios, API)
│   ├── components/     # Componentes reutilizables
│   ├── contexts/       # Contextos de React (Auth, Theme)
│   ├── hooks/          # Hooks personalizados
│   ├── layouts/        # Layouts de página y navegación
│   └── pages/          # Vistas principales de la aplicación
└── README.md           # Documentación del proyecto
```

---
Desarrollado con ❤️ por [CSorinDev](https://github.com/CSorinDev)
