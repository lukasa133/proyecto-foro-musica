// Controlador para gestionar las operaciones relacionadas con las publicaciones o posts

const createPost = async (req, res) => {
    try {
        // Adquire title y content del body de la solicitud
        const { title, content } = req.body;
        const authorId = req.user.id;

        console.log("Autor:", authorId);
        console.log("Título:", title);
        console.log("Contenido:", content);

        return res.status(201).json({
            message: "Post creado exitosamente",
        });

    }catch (error) {
        return res.status(500).json({
            error: "Error al crear el post",
        });
    }
}

module.exports = {
    createPost
};