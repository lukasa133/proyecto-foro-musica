// Controlador para gestionar las operaciones relacionadas con las publicaciones o posts

const CreatePostUseCase = require("../../domain/usecases/CreatePostUseCase");
const PostRepositorySupabase = require("../../infrastructure/repositories/PostRepositorySupabase");
const CreatePostDTO = require("../../application/dtos/CreatePostDTO");

const postRepository = new PostRepositorySupabase();
const createPostUseCase = new CreatePostUseCase(postRepository);

const createPost = async (req, res) => {
    try {
        // Adquire title y content del body de la solicitud
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

        const createPostDTO = new CreatePostDTO(
            title,
            content,
            authorId,
            multimedia
        );

        const post = await createPostUseCase.execute(createPostDTO);

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

module.exports = {
    createPost
};