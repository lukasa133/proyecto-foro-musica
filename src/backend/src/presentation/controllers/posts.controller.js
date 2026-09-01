// Controlador para gestionar las operaciones relacionadas con las publicaciones o posts

const CreatePostUseCase = require("../../domain/usecases/CreatePostUseCase");
const CreatePostDTO = require("../../application/dtos/CreatePostDTO");

const PostRepositorySupabase = require("../../infrastructure/repositories/PostRepositorySupabase");
const MultimediaRepositorySupabase = require("../../infrastructure/repositories/MultimediaRepositorySupabase");

const postRepository = new PostRepositorySupabase();
const multimediaRepository = new MultimediaRepositorySupabase();

const createPostUseCase = new CreatePostUseCase(postRepository, multimediaRepository);

const createPost = async (req, res) => {
    try {
        // Adquiere title y content del body de la solicitud
        const { title, content, multimedia } = req.body;
        const authorId = req.user.id;

        if (!title || typeof title !== "string" || title.trim() === "") {
            return res.status(400).json({
                error: "El título es obligatorio."
            });
        }

        if (!content || typeof content !== "string" || content.trim() === "") {
            return res.status(400).json({
                error: "El contenido es obligatorio."
            });
        }

        if (multimedia) {
            if (typeof multimedia !== "object") {
                return res.status(400).json({
                    error: "El campo multimedia debe ser un objeto."
                });
            }

            const allowedOrigins = ["local", "spotify", "youtube"];

            if (!allowedOrigins.includes(multimedia.origen)) {
                return res.status(400).json({
                    error: "El origen de multimedia no es válido."
                });
            }

            if (!multimedia.url || typeof multimedia.url !== "string") {
                return res.status(400).json({
                    error: "La URL de multimedia es obligatoria."
                });
            }
        }

        // Utilizamos el DTO para representar los datos que se recibirán 
        const createPostDTO = new CreatePostDTO(
            title,
            content,
            authorId,
            multimedia
        );

        const post = await createPostUseCase.execute(createPostDTO); // Se utiliza wait para que el sistema espere hasta que se reciba una respuesta

        return res.status(201).json({
            message: "Post creado exitosamente",
            post: post
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Error al crear el post"
        });
    }
}

module.exports = { createPost };