class CreatePostUseCase {
    constructor(postRepository, multimediaRepository) {
        this.postRepository = postRepository;
        this.multimediaRepository = multimediaRepository
    }

    async execute(postDTO) { 
        const post = await this.postRepository.create(postDTO);

        if (postDTO.multimedia) {

            const multimedia = {
                postId: post.id,
                origen: postDTO.multimedia.origen,
                url: postDTO.multimedia.url
            };

            await this.multimediaRepository.create(multimedia);
        }

        return post;
    }
}

module.exports = CreatePostUseCase;