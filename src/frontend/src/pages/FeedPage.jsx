import { C, sans, serif } from '../constants/designSystem'
import FeaturedPost from '../components/posts/FeaturePost'
import GhostBtn from '../components/ui/GhostBtn'
import PostCard from '../components/posts/PostCard'
import PrimaryBtn from '../components/ui/PrimaryBtn'

function FeedScreen({ posts, user, likedPosts, onLike, onSelectPost, onNav }) {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <main>
      {featured && (
        <FeaturedPost
          post={featured}
          liked={likedPosts.has(featured.id)}
          onLike={() => onLike(featured.id)}
          onClick={() => onSelectPost(featured.id)}
        />
      )}

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontWeight: 700, fontSize: '28px', color: C.text, margin: '0 0 4px 0', letterSpacing: '-0.01em' }}>
              Descubrimientos de la comunidad
            </h2>
            <p style={{ fontFamily: sans, fontSize: '13px', color: C.textMuted, margin: 0, fontWeight: 300 }}>
              Debates y recomendaciones de la comunidad
            </p>
          </div>
          {user && <PrimaryBtn onClick={() => onNav('create')}>+ Crear entrada</PrimaryBtn>}
        </div>

        {!user && (
          <div style={{ background: C.tealBg, border: `1px solid ${C.teal}`, borderLeft: `4px solid ${C.teal}`, padding: '18px 24px', marginBottom: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: '16px', color: C.teal, margin: '0 0 4px 0', fontWeight: 400 }}>Participa en los debates</p>
              <p style={{ fontFamily: sans, fontSize: '13px', color: C.textMuted, margin: 0, fontWeight: 300 }}>Únete para dar likes, comentar y publicar tus propios descubrimientos.</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexShrink: 0, flexWrap: 'wrap' }}>
              <PrimaryBtn onClick={() => onNav('register')}>Crear cuenta</PrimaryBtn>
              <GhostBtn onClick={() => onNav('login')} teal>Ya tengo cuenta</GhostBtn>
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {rest.map(post => (
            <PostCard
              key={post.id}
              post={post}
              liked={likedPosts.has(post.id)}
              onLike={() => onLike(post.id)}
              onClick={() => onSelectPost(post.id)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default FeedScreen
