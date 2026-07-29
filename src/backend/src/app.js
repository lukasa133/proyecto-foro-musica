/*
    Se crea el siguiente script para comprobar y aprender 
    el desarrollo y la ejecución de node.js.

    El programa consiste en un simple sistema de cliente 
    servidor que al entrar en la ruta /health se mostrará 
    al cliente el mensaje status: ok.
*/ 

// Importamos Express, una librería que facilita la creación de servidores HTTP.
const express = require("express"); 
const app = express();
const supabase = require("./infrastructure/database/supabaseClient");

app.get("/health", async (req, res) => {
    const { data, error } = await supabase
    .from("health")
    .select("*");

    if(error){
        return res.status(500).json({
            error:"Hubo un error"
        });
    }
    
    if(data.length === 0){
        return res.json({
            message:"No se ha encontrado datos registrados"
        });
    }
    
    return res.json(data);
});

module.exports = app; // Permitimos la esportación del modulo de app.