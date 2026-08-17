class CreatePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    async execute(postDTO) { 
        return await this.postRepository.create(postDTO);
    }
}

module.exports = CreatePostUseCase;