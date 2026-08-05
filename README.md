

# 🎵 Foro de Música

> Una plataforma comunitaria para descubrir, compartir y debatir sobre música, desarrollada como proyecto de aprendizaje para poner en práctica el ciclo completo de desarrollo de software moderno.

## 📖 Descripción

Foro de Música es una aplicación web enfocada en la interacción entre usuarios apasionados por la música. El objetivo es crear un espacio donde cualquier persona pueda compartir recomendaciones, descubrir nuevos artistas y participar en conversaciones sobre géneros, álbumes y canciones.

Este proyecto nace con un propósito de aprendizaje, buscando aplicar buenas prácticas de desarrollo de software, arquitectura, automatización, despliegue y trabajo colaborativo utilizando herramientas y metodologías empleadas en la industria.

---

# 🎯 Objetivos

- Desarrollar una aplicación web full stack.
- Implementar una arquitectura limpia y escalable.
- Aplicar buenas prácticas de desarrollo.
- Automatizar procesos mediante integración y despliegue continuo.
- Gestionar el proyecto utilizando metodologías ágiles.
- Documentar el desarrollo como si fuera un proyecto profesional.

---

# 🚀 Alcance del MVP

La primera versión del proyecto incluirá las funcionalidades esenciales para validar la idea.

### Usuarios

- Registro de usuarios.
- Inicio de sesión.
- Gestión básica del perfil.

### Publicaciones

- Crear publicaciones.
- Editar publicaciones propias.
- Eliminar publicaciones.
- Visualizar publicaciones de la comunidad.

### Comentarios

- Agregar comentarios.
- Editar comentarios propios.
- Eliminar comentarios.

### Búsqueda

- Buscar publicaciones.
- Filtrar por género o etiquetas.

### Administración

- Moderación básica del contenido.

---

# 🛣️ Roadmap

Estas funcionalidades se implementarán en versiones posteriores.

- Sistema de reputación.
- Medallas por participación.
- Upvotes y Downvotes.
- Reproductores incrustados (YouTube, SoundCloud, Bandcamp).
- Sistema de recomendaciones.
- Rabbit Hole (descubrimiento aleatorio).
- Seguimiento de usuarios.
- Favoritos.
- Notificaciones.

---

# 🏗️ Arquitectura

El proyecto seguirá una arquitectura por capas (Clean Architecture), buscando mantener un bajo acoplamiento entre las diferentes responsabilidades del sistema.

```
src/

controllers/

services/

repositories/

routes/

middlewares/

config/

models/

utils/
```

---

# 🛠️ Tecnologías

## Frontend

- HTML5
- React.js
- CSS3
- JavaScript
- Bootstrap

## Backend

- Node.js
- Express.js

## Base de datos

- PostgreSQL

## DevOps

- Docker
- GitHub Actions
- Azure

## Gestión del proyecto

- Git
- GitHub
- GitHub Issues
- Jira
- Scrum

## Pruebas

- Postman
- Lighthouse

## Desarrollo

- Visual Studio Code

---

# 🔄 Flujo de trabajo

El proyecto utilizará un flujo de ramas basado en Git.

```
main
│
└── develop
     ├── feature/login
     ├── feature/posts
     ├── feature/comments
     └── feature/search
```

Cada nueva funcionalidad será desarrollada en una rama independiente y posteriormente integrada mediante Pull Request.

---

# ⚙️ Automatización

Se implementará un flujo de CI/CD utilizando GitHub Actions para automatizar procesos como:

- Instalación de dependencias.
- Ejecución de pruebas.
- Verificación de calidad del código.
- Construcción de la aplicación.
- Creación de imágenes Docker.
- Despliegue automático en AWS.

---

# 🐳 Docker

El proyecto será ejecutado mediante contenedores Docker para garantizar un entorno de desarrollo consistente.

Se contemplan contenedores para:

- Aplicación Backend
- Base de datos PostgreSQL

---

# 📂 Gestión del proyecto

La planificación y seguimiento del desarrollo se realizará mediante Jira bajo la metodología Scrum.

Se gestionarán:

- Product Backlog
- Sprint Backlog
- Historias de Usuario
- Tareas
- Bugs
- Mejoras

---

# 🧪 Calidad del software

Durante el desarrollo se aplicarán prácticas como:

- Control de versiones con Git.
- Integración Continua.
- Despliegue Continuo.
- Revisión de código mediante Pull Requests.
- Pruebas funcionales con Postman.
- Evaluación de rendimiento mediante Lighthouse.

---

# 👥 Equipo

Proyecto desarrollado como iniciativa personal de aprendizaje y práctica de desarrollo de software.

---

## Prueba de GitHub Actions

# 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
