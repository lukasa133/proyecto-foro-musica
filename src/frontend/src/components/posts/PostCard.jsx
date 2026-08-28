import { useState } from 'react'
import { C, sans, serif } from '../../constants/designSystem'
import GenreTag from '../ui/GenreTag'

function PostCard({ post, liked, onLike, onClick }) {
  const [hovered, setHovered] = useState(false)
  const [likeHovered, setLikeHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? C.white : C.paperCard,
        border: `1px solid ${hovered ? C.borderStrong : C.border}`,
        transition: 'background 0.18s, border-color 0.18s, box-shadow 0.18s',
        boxShadow: hovered ? '0 4px 20px rgba(23,23,23,0.07)' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div onClick={onClick} style={{ overflow: 'hidden', aspectRatio: '16/9', background: C.paperDark, flexShrink: 0, cursor: 'pointer' }}>
        <img
          src={post.imageUrl} alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
      </div>

      <div style={{ padding: '20px 20px 0', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {post.tags.slice(0, 2).map((t, i) => <GenreTag key={t} label={t} variant={i === 0 ? 'terracotta' : 'default'} />)}
        </div>

        <h3
          onClick={onClick}
          style={{ fontFamily: serif, fontWeight: 700, fontSize: '18px', lineHeight: 1.3, color: C.text, margin: '0 0 10px 0', letterSpacing: '-0.01em', cursor: 'pointer' }}
        >
          {post.title}
        </h3>

        <p style={{ fontFamily: sans, fontSize: '13px', lineHeight: 1.65, color: C.textMuted, margin: '0 0 16px 0', fontWeight: 300, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {post.excerpt}
        </p>
      </div>

      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
          <div style={{ fontFamily: sans, fontSize: '11px', color: C.textDim, fontWeight: 500 }}>
            <span style={{ color: C.teal }}>@{post.author}</span>
            <span style={{ margin: '0 6px' }}>·</span>
            {post.date}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onLike}
              onMouseEnter={() => setLikeHovered(true)}
              onMouseLeave={() => setLikeHovered(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '5px', fontFamily: sans, fontSize: '12px', fontWeight: 600, color: liked ? C.terracotta : likeHovered ? C.terracotta : C.textDim, transition: 'color 0.18s' }}
            >
              {liked ? '❤️' : '🤍'} {post.likes + (liked ? 1 : 0)}
            </button>
            <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '5px', fontFamily: sans, fontSize: '12px', fontWeight: 600, color: C.textDim }}>
              💬 {post.comments.length}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostCard
