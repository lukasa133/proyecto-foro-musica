/*
    Se crea el siguiente script para comprobar y aprender 
    el desarrollo y la ejecución de node.js.

    El programa consiste en un simple sistema de cliente 
    servidor que al entrar en la ruta /health se realizará un
    get para obtener la información almacenada en Supabase con Json
    y un post para realizar un nuevo registro.
*/ 

// Importamos Express, una librería que facilita la creación de servidores HTTP.
const express = require("express"); 
const app = express();
// Establecemos a express un middleware para interpretar peticiones en formato json.
app.use(express.json());

// Importamos las rutas de posts y las añadimos a la app.
const postsRoutes = require("./presentation/routes/posts.routes.js");
app.use(postsRoutes);

// Permitimos la esportación del modulo de app.
module.exports = app; 