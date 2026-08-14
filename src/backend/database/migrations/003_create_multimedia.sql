CREATE TABLE multimedia (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    post_id UUID NOT NULL,

    tipo VARCHAR(20) NOT NULL DEFAULT 'audio',

    origen VARCHAR(20) NOT NULL,

    url TEXT NOT NULL,

    mime_type VARCHAR(100),

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_multimedia_posts
        FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_multimedia_post
        UNIQUE (post_id),

    CONSTRAINT chk_multimedia_tipo
        CHECK (tipo = 'audio'),

    CONSTRAINT chk_multimedia_origen
        CHECK (origen IN ('local', 'spotify', 'youtube'))
);