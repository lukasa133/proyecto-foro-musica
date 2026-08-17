class CreatePostDTO {
    constructor(title, content, authorId, multimedia = null) {
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.multimedia = multimedia;
    }
}

module.exports = CreatePostDTO;