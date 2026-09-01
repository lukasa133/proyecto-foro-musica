create table public.multimedia (
  id uuid not null default gen_random_uuid (),
  post_id uuid not null,
  tipo character varying(20) not null default 'audio'::character varying,
  origen character varying(20) not null,
  url text not null,
  mime_type character varying(100) null,
  created_at timestamp without time zone not null default now(),
  constraint multimedia_pkey primary key (id),
  constraint uq_multimedia_post unique (post_id),
  constraint fk_multimedia_posts foreign KEY (post_id) references posts (id) on delete CASCADE,
  constraint chk_multimedia_origen check (
    (
      (origen)::text = any (
        (
          array[
            'local'::character varying,
            'spotify'::character varying,
            'youtube'::character varying
          ]
        )::text[]
      )
    )
  ),
  constraint chk_multimedia_tipo check (((tipo)::text = 'audio'::text))
) TABLESPACE pg_default;