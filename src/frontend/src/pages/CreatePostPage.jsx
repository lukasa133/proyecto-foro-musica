import { useState } from 'react'
import { C, sans, serif } from '../constants/designSystem'
import Field from '../components/ui/Field'
import GenreTag from '../components/ui/GenreTag'
import GhostBtn from '../components/ui/GhostBtn'
import PrimaryBtn from '../components/ui/PrimaryBtn'

function CreatePostScreen({ user, onPublish, onNav }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tagsRaw, setTagsRaw] = useState('')
  const [musicLink, setMusicLink] = useState('')
  const [error, setError] = useState('')

  const parsedTags = tagsRaw.split(',').map(t => t.trim().toLowerCase()).filter(Boolean).slice(0, 5)

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) { setError('El título es obligatorio.'); return }
    if (!content.trim()) { setError('El contenido no puede estar vacío.'); return }
    const date = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    onPublish({
      id: String(Date.now()),
      title: title.trim(),
      author: user.username,
      date,
      excerpt: content.trim().slice(0, 180) + (content.trim().length > 180 ? '…' : ''),
      body: content.trim(),
      tags: parsedTags.length > 0 ? parsedTags : ['sin género'],
      imageUrl: 'https://images.unsplash.com/photo-1673427079629-418917214ffc?w=900&h=600&fit=crop&auto=format',
      musicLink: musicLink.trim() || undefined,
      likes: 0,
      comments: [],
    })
  }

  return (
    <main style={{ padding: '48px 24px 96px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.terracotta, marginBottom: '10px' }}>
            Nueva entrada · @{user.username}
          </p>
          <h1 style={{ fontFamily: serif, fontWeight: 800, fontSize: '38px', color: C.text, margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>Crear publicación</h1>
          <p style={{ fontFamily: sans, fontSize: '14px', color: C.textMuted, margin: 0, fontWeight: 300 }}>
            Comparte un debate, artista o descubrimiento musical con la comunidad.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: C.white, border: `1px solid ${C.border}`, padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Field label="Título de la publicación" id="post-title" value={title} onChange={setTitle} placeholder="¿Qué quieres debatir o compartir?" required />
          <Field label="Contenido" id="post-content" as="textarea" value={content} onChange={setContent} placeholder="Desarrolla tu idea, recomendación o pregunta para la comunidad..." required />
          <Field label="Géneros (separados por coma)" id="post-tags" value={tagsRaw} onChange={setTagsRaw} placeholder="jazz, experimental, folk" hint="Máximo 5 etiquetas." />

          {parsedTags.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '-10px' }}>
              {parsedTags.map((t, i) => <GenreTag key={t} label={t} variant={i === 0 ? 'terracotta' : 'default'} />)}
            </div>
          )}

          <Field label="Enlace musical (opcional)" id="music-link" type="url" value={musicLink} onChange={setMusicLink} placeholder="https://open.spotify.com/..." hint="Enlace a Spotify, Bandcamp, YouTube, etc." />

          {error && <p style={{ fontFamily: sans, fontSize: '13px', color: C.terracotta, margin: 0, fontWeight: 500 }}>{error}</p>}

          <div style={{ display: 'flex', gap: '12px', paddingTop: '8px', borderTop: `1px solid ${C.border}`, flexWrap: 'wrap' }}>
            <PrimaryBtn type="submit">Publicar entrada</PrimaryBtn>
            <GhostBtn onClick={() => onNav('feed')}>Cancelar</GhostBtn>
          </div>
        </form>
      </div>
    </main>
  )
}

export default CreatePostScreen
