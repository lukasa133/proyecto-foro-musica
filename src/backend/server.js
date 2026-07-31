/*
    Se crea el siguiente script para comprobar y aprender 
    el desarrollo y la ejecución de node.js.

    En este modulo encontraremos el script para ejecutar el servidor
    mostrando un mensaje de confirmación al hacerlo.
*/ 

// La librería dotenv junto al método .config() permite la lectura completa del archivo .env.
require("dotenv").config(); 
// Importamos el módulo de app.
const app = require("./src/app"); 

// A la constante PORT se le asigna el puerto declarado en el archivo .env, si no el puerto 3000 directamente.
const PORT = process.env.PORT || 3000; 

// Ejecutamos la app y muestra un mensaje de confirmación en la terminal.
app.listen(PORT, () => { 
    console.log(`Servidores ejecutandose en http://localhost:${PORT}`); 
});