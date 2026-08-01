# Bruno

Bruno es la herramienta utilizada para probar manualmente la API durante el desarrollo del proyecto.

Cada archivo representa una petición HTTP que puede ejecutarse sin necesidad de escribir código adicional, permitiendo comprobar el correcto funcionamiento de los endpoints antes de integrarlos con el frontend.

## Estructura

```text
bruno/
│
├── opencollection.yml
├── Health check.yml
├── Users/
├── Posts/
└── ...
```

## Responsabilidad de los archivos

### opencollection.yml

Es el archivo principal de la colección.

Bruno lo utiliza para reconocer la carpeta como una colección e importar todas las peticiones existentes.

No debe eliminarse.

---

### Archivos de peticiones

Cada archivo representa una única petición HTTP.

Ejemplo:

```text
Health check get.yml
```

Contiene la configuración necesaria para ejecutar:

```http
GET /health
```

En el futuro existirán archivos como:

```text
Create user.yml
Login.yml
Get posts.yml
Create post.yml
Delete post.yml
```

Cada uno tendrá una única responsabilidad.

## Importar la colección

1. Abrir Bruno.
2. Seleccionar **Open Collection**.
3. Elegir la carpeta `bruno`.
4. Bruno cargará automáticamente todas las peticiones disponibles.

## Crear una nueva petición

1. Clic derecho sobre la colección.
2. Seleccionar **New Request**.
3. Elegir el método HTTP correspondiente.
4. Escribir la URL del endpoint.
5. Configurar parámetros, encabezados o cuerpo si es necesario.
6. Guardar el archivo.

## Convenciones

- Una petición por archivo.
- Nombrar los archivos utilizando verbos descriptivos.

Ejemplo:

```text
Get users
Create user
Update user
Delete user
```

No utilizar nombres genéricos como:

```text
Prueba
API
Test
Nueva petición
```

## Métodos HTTP utilizados

| Método | Uso |
|---------|-----|
| GET | Consultar información |
| POST | Crear nuevos recursos |
| PUT | Actualizar completamente un recurso |
| PATCH | Actualizar parcialmente un recurso |
| DELETE | Eliminar recursos |

## Objetivo

Bruno forma parte del flujo de desarrollo del backend y permite:

- Probar endpoints.
- Validar respuestas HTTP.
- Verificar el formato del JSON enviado y recibido.
- Detectar errores antes de integrar el frontend.
