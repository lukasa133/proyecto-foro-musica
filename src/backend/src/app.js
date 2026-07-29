/*
    Se crea el siguiente script para comprobar y aprender 
    el desarrollo y la ejecución de node.js.

    El programa consiste en un simple sistema de cliente 
    servidor que al entrar en la ruta /health se mostrará 
    al cliente el mensaje status: ok.
*/ 

const express = require("express"); // Importamos la librería express el cual facilita el uso del protocolo http.
const app = express();

app.get("/health", (req, res) => {
    res.json({ // se usa el objeto res del parámetro para enviar un mensaje en formato json. 
        status:"ok"
    });
});

module.exports = app; // Permitimos la esportación del modulo de app.