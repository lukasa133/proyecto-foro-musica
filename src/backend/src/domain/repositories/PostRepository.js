class PostRepository {
    async create(post) {
        throw new Error("El método create debe ser implementado");
    }
}

module.exports = PostRepository;