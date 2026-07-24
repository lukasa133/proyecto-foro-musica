# Application

Esta carpeta contiene la lógica que coordina el funcionamiento de la aplicación.

No representa el negocio directamente, sino la forma en que los diferentes componentes trabajan juntos.

## Aquí irán

### Services

Coordinan uno o varios casos de uso.

También pueden encargarse de validaciones adicionales, transformaciones de datos o reglas que involucren varias operaciones.

---

### DTOs

Los DTO (Data Transfer Object) representan la información que entra o sale de la aplicación.

Sirven para transportar datos entre las diferentes capas del sistema.

Ejemplos:

- CrearPublicacionDto
- LoginDto
- ActualizarPerfilDto
