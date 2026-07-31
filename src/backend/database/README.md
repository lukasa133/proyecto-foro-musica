# Database

Esta carpeta contiene todos los scripts SQL relacionados con la estructura de la base de datos del proyecto.

El objetivo es que cualquier desarrollador pueda reconstruir completamente la base de datos únicamente ejecutando los archivos contenidos aquí.

## Estructura

```text
database/
│
├── migrations/
└── seeds/
```

## migrations

Contiene los scripts encargados de crear o modificar la estructura de la base de datos.

Cada archivo representa un cambio específico realizado sobre el esquema.

Ejemplo:

```text
001_create_users.sql
002_create_posts.sql
```

Las migraciones deben ejecutarse respetando el orden numérico.

## seeds

Contiene datos de prueba utilizados durante el desarrollo.

Estos registros permiten probar la aplicación sin necesidad de crear manualmente usuarios o publicaciones.

Ejemplo:

```text
001_initial_data.sql
```

Los datos contenidos en esta carpeta no deben utilizarse en producción.

## Cómo crear la base de datos

1. Abrir el proyecto de Supabase.
2. Ingresar al **SQL Editor**.
3. Ejecutar primero todos los archivos de `migrations`.
4. Ejecutar posteriormente los archivos de `seeds`.

## Convenciones

### Migraciones

Utilizar nombres descriptivos precedidos por un número consecutivo.

Ejemplo:

```text
001_create_users.sql
002_create_posts.sql
003_create_comments.sql
004_create_reactions.sql
```

### Seeds

Utilizar igualmente una numeración consecutiva.

Ejemplo:

```text
001_initial_data.sql
002_test_users.sql
003_test_posts.sql
```

## Responsabilidad

### migrations

Responsables de la estructura de la base de datos.

Ejemplos:

- Crear tablas.
- Modificar columnas.
- Agregar restricciones.
- Crear relaciones.

### seeds

Responsables únicamente de insertar datos de prueba.

Nunca deben modificar la estructura de la base de datos.

## Flujo recomendado

```text
Clonar proyecto
        │
        ▼
Ejecutar migrations
        │
        ▼
Crear estructura de la base de datos
        │
        ▼
Ejecutar seeds
        │
        ▼
Base de datos lista para el desarrollo
```

## Objetivo

Mantener la estructura de la base de datos versionada junto con el código fuente.

De esta forma cualquier integrante del equipo podrá reconstruir el entorno de desarrollo sin depender de configuraciones manuales o conocimientos previos sobre el proyecto.
