# Domain

Esta carpeta contiene el corazón de la aplicación.

Aquí se modelan los conceptos del negocio de ForoMusica, sin importar qué tecnología se utilice.

## Aquí irán

### Entities

Representan los objetos principales del sistema.

Ejemplos:

- Usuario
- Publicacion
- Comentario
- Grupo

Cada entidad define qué información posee y qué comportamientos propios tiene.

---

### Repositories

Contienen los contratos que indican qué operaciones pueden realizarse con las entidades.

Aquí **no** se programa cómo consultar Supabase.

Solo se define qué operaciones existirán.

Ejemplos:

- crearPublicacion()
- obtenerPublicacionPorId()
- eliminarComentario()

---

### Use Cases

Representan las acciones que un usuario puede realizar dentro del sistema.

Cada caso de uso suele resolver una única acción.

Ejemplos:

- Crear publicación
- Editar perfil
- Iniciar sesión
- Comentar una publicación
- Reaccionar a una publicación

Los casos de uso utilizan las entidades y los contratos de los repositorios para cumplir una tarea.
