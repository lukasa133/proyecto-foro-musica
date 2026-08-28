import { useState } from 'react'
import { C, sans, serif } from '../constants/designSystem'
import GenreTag from '../components/ui/GenreTag'
import GhostBtn from '../components/ui/GhostBtn'
import PrimaryBtn from '../components/ui/PrimaryBtn'
import TextLink from '../components/ui/TextLink'

function SinglePostScreen({ post, user, liked, onLike, onBack, onAddComment, onNav }) {
  const [commentText, setCommentText] = useState('')
  const [likeHovered, setLikeHovered] = useState(false)

  function handleComment(e) {
    e.preventDefault()
    if (!commentText.trim()) return
    onAddComment(post.id, commentText.trim())
    setCommentText('')
  }

  return (
    <main style={{ background: C.paper }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 24px 0' }}>
        <TextLink onClick={onBack} color={C.teal}>← Volver al feed</TextLink>
      </div>

      <div style={{ maxWidth: '1200px', margin: '24px auto 0', padding: '0 24px' }}>
        <div style={{ overflow: 'hidden', aspectRatio: '21/9', background: C.paperDark }}>
          <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 0' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {post.tags.map((t, i) => <GenreTag key={t} label={t} variant={i === 0 ? 'terracotta' : 'default'} />)}
        </div>

        <h1 style={{ fontFamily: serif, fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.1, color: C.text, margin: '0 0 24px 0', letterSpacing: '-0.02em' }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '24px', borderBottom: `1px solid ${C.border}`, marginBottom: '36px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: sans, fontSize: '13px', color: C.textMuted, fontWeight: 500 }}>
            Por <span style={{ color: C.teal, fontWeight: 600 }}>@{post.author}</span>
          </span>
          <span style={{ fontFamily: sans, fontSize: '13px', color: C.textDim }}>{post.date}</span>
        </div>

        {post.body.split('\n\n').map((p, i) => (
          <p key={i} style={{ fontFamily: sans, fontSize: '16px', lineHeight: 1.8, color: C.text, margin: '0 0 24px 0', fontWeight: 300 }}>
            {p}
          </p>
        ))}

        {post.musicLink && (
          <div style={{ marginTop: '12px', padding: '18px 20px', background: C.terracottaBg, border: `1px solid ${C.terracotta}`, borderLeft: `4px solid ${C.terracotta}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '20px' }}>♪</span>
            <div>
              <p style={{ fontFamily: sans, fontSize: '11px', fontWeight: 700, color: C.terracotta, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 2px 0' }}>Enlace musical</p>
              <a href={post.musicLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: sans, fontSize: '13px', color: C.teal, fontWeight: 500, textDecoration: 'none' }}>
                Escuchar en plataforma →
              </a>
            </div>
          </div>
        )}

        {/* Engagement bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '36px', paddingTop: '24px', paddingBottom: '24px', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <button
            onClick={onLike}
            onMouseEnter={() => setLikeHovered(true)}
            onMouseLeave={() => setLikeHovered(false)}
            style={{ background: liked ? C.terracottaBg : 'none', border: `1px solid ${liked ? C.terracotta : C.border}`, cursor: 'pointer', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: sans, fontSize: '14px', fontWeight: 600, color: liked ? C.terracotta : likeHovered ? C.terracotta : C.textMuted, transition: 'all 0.18s' }}
          >
            {liked ? '❤️' : '🤍'} {post.likes + (liked ? 1 : 0)} Me gusta
          </button>
          <span style={{ fontFamily: sans, fontSize: '14px', color: C.textMuted, display: 'flex', alignItems: 'center', gap: '8px' }}>
            💬 {post.comments.length} comentarios
          </span>
        </div>
      </article>

      {/* Comments */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px 96px' }}>
        <h3 style={{ fontFamily: serif, fontWeight: 700, fontSize: '22px', color: C.text, margin: '0 0 28px 0' }}>
          Comentarios
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {post.comments.map((comment, i) => (
            <div key={comment.id} style={{ padding: '20px 0', borderBottom: i < post.comments.length - 1 ? `1px solid ${C.border}` : 'none' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline', marginBottom: '8px' }}>
                <span style={{ fontFamily: sans, fontSize: '13px', fontWeight: 600, color: C.teal }}>@{comment.author}</span>
                <span style={{ fontFamily: sans, fontSize: '11px', color: C.textDim }}>{comment.date}</span>
              </div>
              <p style={{ fontFamily: sans, fontSize: '14px', lineHeight: 1.65, color: C.text, margin: 0, fontWeight: 300 }}>
                {comment.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: `1px solid ${C.border}` }}>
          {user ? (
            <form onSubmit={handleComment}>
              <p style={{ fontFamily: sans, fontSize: '12px', fontWeight: 600, color: C.textMuted, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Responder como <span style={{ color: C.teal }}>@{user.username}</span>
              </p>
              <textarea
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                placeholder="¿Qué opinas sobre este tema?"
                style={{ width: '100%', background: C.white, border: `1px solid ${C.border}`, color: C.text, fontFamily: sans, fontSize: '14px', fontWeight: 300, padding: '12px 14px', outline: 'none', resize: 'vertical', minHeight: '90px', borderRadius: 0, transition: 'border-color 0.18s' }}
                onFocus={e => { e.currentTarget.style.borderColor = C.teal }}
                onBlur={e => { e.currentTarget.style.borderColor = C.border }}
              />
              <div style={{ marginTop: '12px' }}>
                <PrimaryBtn type="submit">Publicar comentario</PrimaryBtn>
              </div>
            </form>
          ) : (
            <div style={{ background: C.tealBg, border: `1px solid ${C.teal}`, borderLeft: `4px solid ${C.teal}`, padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ fontFamily: sans, fontSize: '14px', color: C.teal, margin: 0, fontWeight: 400 }}>
                Inicia sesión para unirte al debate.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <PrimaryBtn onClick={() => onNav('login')}>Iniciar sesión</PrimaryBtn>
                <GhostBtn onClick={() => onNav('register')} teal>Registrarse</GhostBtn>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default SinglePostScreen
