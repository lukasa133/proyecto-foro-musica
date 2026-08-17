const supabase = require("../database/supabaseClient");
const PostRepository = require("../../domain/repositories/PostRepository");

class PostRepositorySupabase extends PostRepository {

    async create(post) {
        const { data, error } = await supabase
            .from("posts")
            .insert({
                author_id: post.authorId,
                title: post.title,
                content: post.content
            })
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }
}

module.exports = PostRepositorySupabase;