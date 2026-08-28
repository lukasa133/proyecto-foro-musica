import { useState } from 'react'
import { C, sans, serif } from '../../constants/designSystem'
import GenreTag from '../ui/GenreTag'

function FeaturedPost({ post, liked, onLike, onClick }) {
  const [hovered, setHovered] = useState(false)
  const [likeHovered, setLikeHovered] = useState(false)

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
        <span style={{ fontFamily: sans, fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.terracotta }}>
          Debate destacado
        </span>
        <div style={{ flex: 1, height: '1px', background: C.border }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 480px)', gap: '48px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {post.tags.map((t, i) => <GenreTag key={t} label={t} variant={i === 0 ? 'terracotta' : 'default'} />)}
          </div>

          <h2 onClick={onClick} style={{ fontFamily: serif, fontWeight: 800, fontSize: 'clamp(26px, 3.5vw, 44px)', lineHeight: 1.13, color: C.text, margin: '0 0 20px 0', letterSpacing: '-0.01em', cursor: 'pointer' }}>
            {post.title}
          </h2>

          <div style={{ fontFamily: sans, fontSize: '12px', color: C.textMuted, fontWeight: 500, marginBottom: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span>Por <span style={{ color: C.teal, fontWeight: 600 }}>@{post.author}</span></span>
            <span style={{ color: C.textDim }}>·</span>
            <span>{post.date}</span>
          </div>

          <p style={{ fontFamily: sans, fontSize: '15px', lineHeight: 1.7, color: C.textMuted, margin: '0 0 24px 0', fontWeight: 300 }}>
            {post.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
            <button
              onClick={onLike}
              onMouseEnter={() => setLikeHovered(true)}
              onMouseLeave={() => setLikeHovered(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: sans, fontSize: '13px', fontWeight: 500, color: liked ? C.terracotta : likeHovered ? C.terracotta : C.textMuted, transition: 'color 0.18s' }}
            >
              {liked ? '❤️' : '🤍'} {post.likes + (liked ? 1 : 0)}
            </button>
            <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: sans, fontSize: '13px', fontWeight: 500, color: C.textMuted }}>
              💬 {post.comments.length}
            </button>
          </div>

          <button
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: sans, fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', color: C.terracotta, display: 'flex', alignItems: 'center', gap: '8px', textDecoration: hovered ? 'underline' : 'none' }}
          >
            Leer y comentar <span style={{ fontSize: '16px' }}>→</span>
          </button>
        </div>

        <div onClick={onClick} style={{ cursor: 'pointer', overflow: 'hidden', aspectRatio: '3/2', background: C.paperDark }}>
          <img
            src={post.imageUrl} alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
