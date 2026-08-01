/*
-------------------------------------------------------
Datos de prueba (Seed)
Proyecto: Foro Música

Este archivo inserta registros iniciales para facilitar
las pruebas durante el desarrollo del proyecto.

No debe utilizarse en producción.
-------------------------------------------------------
*/

-- Usuarios
INSERT INTO users (username, email, password_hash)
VALUES
(
    'luis',
    'luis@foromusica.dev',
    '$2b$12$EjemploHashLuis'
),
(
    'ana',
    'ana@foromusica.dev',
    '$2b$12$EjemploHashAna'
);

-- Publicaciones
INSERT INTO posts (author_id, title, content)
VALUES
(
    (SELECT id FROM users WHERE username = 'luis'),
    'Mi primera publicación',
    'Hola a todos. Este es mi primer aporte al foro de música.'
),
(
    (SELECT id FROM users WHERE username = 'ana'),
    '¿Qué álbum recomiendan?',
    'Estoy buscando nuevos álbumes de rock alternativo para escuchar.'
);
