# Presentation

Esta carpeta representa la forma en que los usuarios interactúan con la aplicación mediante la API.

Toda petición HTTP pasa por esta capa.

## Aquí irán

### Controllers

Reciben las solicitudes del cliente y devuelven las respuestas.

---

### Routes

Definen las rutas disponibles de la API.

Ejemplo:

GET /publicaciones

POST /usuarios

---

### Middlewares

Código que se ejecuta antes o después de una petición.

Ejemplos:

- Autenticación
- Validación de permisos
- Registro de solicitudes

---

### Validators

Validan la información recibida antes de que llegue a la lógica de la aplicación.

Ejemplos:

- Verificar que un correo tenga un formato válido.
- Verificar que una contraseña tenga la longitud mínima.
