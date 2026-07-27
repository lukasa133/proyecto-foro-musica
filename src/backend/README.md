# Backend

Esta carpeta contiene todo el código del servidor de ForoMusica.

Aquí se implementará la lógica de la API, la conexión con Supabase y las reglas que permiten el funcionamiento de la aplicación.

## Contenido

- `src/` → Código fuente del backend.
- `tests/` → Pruebas automatizadas.
- `Dockerfile` → Instrucciones para construir la imagen Docker del backend.
- `.dockerignore` → Archivos que Docker debe ignorar al construir la imagen.
- `.env.example` → Variables de entorno necesarias para ejecutar el proyecto.
- `package.json` → Dependencias, scripts e información del proyecto.
- `package-lock.json` → Versiones exactas de las dependencias instaladas.

## ¿Cuándo crear un archivo aquí?

Cuando el archivo pertenezca únicamente al backend.

Ejemplos:

- Dockerfile
- package.json
- Variables de entorno
- Scripts de ejecución
