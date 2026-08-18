class CreatePostUseCase {
    constructor(postRepository, multimediaRepository) {
        this.postRepository = postRepository;
        this.multimediaRepository = multimediaRepository
    }

    async execute(postDTO) { 
        return await this.postRepository.create(postDTO);

        if (postDTO.multimedia) {

            const multimedia = {
                postId: post.id,
                type: postDTO.multimedia.type,
                url: postDTO.multimedia.url
            };

            await this.multimediaRepository.create(multimedia);
        }
    }
}

module.exports = CreatePostUseCase;