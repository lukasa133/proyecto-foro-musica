const express = require('express');

// Se utiliza express.Router() para crear un enrutador modular y manejar las rutas relacionadas con los posts.
const router = express.Router();

const authTestMiddleware = require("../middlewares/authTest.middleware");
const postsController = require("../controllers/posts.controller");

// Ruta POST para crear un nuevo post. Se aplica el middleware de autenticación para pruebas antes de llamar al controlador.
router.post(
    "/posts",
    authTestMiddleware,
    postsController.createPost
);

module.exports = router;