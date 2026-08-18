const MultimediaRepository = require("../../domain/repositories/MultimediaRepository");
const supabase = require("../database/supabaseClient");

class MultimediaRepositorySupabase extends MultimediaRepository {

    async create(multimedia) {

        const { data, error } = await supabase
            .from("multimedia")
            .insert({
                post_id: multimedia.postId,
                tipo: multimedia.type,
                url: multimedia.url
            })
            .select();

        if (error) {
            throw error;
        }

        return data[0];
    }
}

module.exports = MultimediaRepositorySupabase;