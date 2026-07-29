/*
    Se crea el siguiente script para comprobar y aprender 
    el desarrollo y la ejecución de node.js.

    En este modulo encontraremos el script para ejecutar el servidor
    mostrando un mensaje de confirmación al hacerlo.
*/ 

require("dotenv").config(); // La librería dotenv junto al método .config() permite la lectura completa del archivo .env.
const app = require("./src/app"); // Importamos el módulo de app.

const PORT = process.env.PORT || 3000; // A la constante PORT se le asigna el puerto declarado en el archivo .env, si no el puerto 3000 directamente.

app.listen(PORT, () => { // Ejecutamos la app y muestra un mensaje de confirmación en la terminal.
    console.log(`Servidores ejecutandose en http://localhost:${PORT}`); 
});