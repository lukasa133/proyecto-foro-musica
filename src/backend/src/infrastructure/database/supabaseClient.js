/*
    Scrip creado para la administrar el cliente de supabase.
*/

// Se importa especificamente el método createClient de la librería supabase.
const { createClient } = require("@supabase/supabase-js");
// Librería que permitirá la consulta del archivo .env.
require("dotenv").config();

// El cliente solo consultará SUPABASE_URL y SUPABASE_ANON_KEY del .env. 
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_ANON_KEY
);

module.exports = supabase;

