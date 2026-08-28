import { useState } from 'react'
import { C, sans, serif } from './constants/designSystem'
import { SEED_POSTS } from './data/seedPosts'
import Navbar from './components/layout/Navbar'
import FeedScreen from './pages/FeedPage'
import SinglePostScreen from './pages/PostDetailPage'
import LoginScreen from './pages/LoginPage'
import RegisterScreen from './pages/RegisterPage'
import CreatePostScreen from './pages/CreatePostPage'
import AuthOverlay from './components/layout/AuthOverlay'

export default function App() {
  const [screen, setScreen] = useState('feed')
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(SEED_POSTS)
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [likedPosts, setLikedPosts] = useState(new Set())
  const [showAuthOverlay, setShowAuthOverlay] = useState(false)

  function nav(s) {
    setScreen(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleLogin(u) { setUser(u); nav('feed') }
  function handleLogout() { setUser(null); nav('feed') }

  function handleSelectPost(id) { setSelectedPostId(id); nav('post') }

  function handleLike(postId) {
    if (!user) { setShowAuthOverlay(true); return }
    setLikedPosts(prev => {
      const next = new Set(prev)
      if (next.has(postId)) next.delete(postId)
      else next.add(postId)
      return next
    })
  }

  function handleAddComment(postId, text) {
    if (!user) return
    const comment = {
      id: `c-${Date.now()}`,
      author: user.username,
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
      text,
    }
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, comments: [...p.comments, comment] } : p))
  }

  function handlePublish(post) {
    setPosts(prev => [post, ...prev])
    setSelectedPostId(post.id)
    nav('post')
  }

  const selectedPost = posts.find(p => p.id === selectedPostId) ?? null

  return (
    <div style={{ minHeight: '100vh', background: C.paper }}>
      <Navbar user={user} current={screen} onNav={nav} onLogout={handleLogout} />

      {screen === 'feed' && (
        <FeedScreen posts={posts} user={user} likedPosts={likedPosts} onLike={handleLike} onSelectPost={handleSelectPost} onNav={nav} />
      )}
      {screen === 'post' && selectedPost && (
        <SinglePostScreen post={selectedPost} user={user} liked={likedPosts.has(selectedPost.id)} onLike={() => handleLike(selectedPost.id)} onBack={() => nav('feed')} onAddComment={handleAddComment} onNav={nav} />
      )}
      {screen === 'login' && <LoginScreen onLogin={handleLogin} onNav={nav} />}
      {screen === 'register' && <RegisterScreen onRegister={handleLogin} onNav={nav} />}
      {screen === 'create' && user && <CreatePostScreen user={user} onPublish={handlePublish} onNav={nav} />}
      {screen === 'create' && !user && <LoginScreen onLogin={handleLogin} onNav={nav} />}

      {screen === 'feed' && (
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: '24px', textAlign: 'center', fontFamily: sans, fontSize: '12px', color: C.textDim }}>
          <span style={{ fontFamily: serif, fontStyle: 'italic', color: C.textMuted }}>Sonora</span>
          {' '}— Música que merece ser escuchada
        </footer>
      )}

      {showAuthOverlay && (
        <AuthOverlay onNav={nav} onClose={() => setShowAuthOverlay(false)} />
      )}
    </div>
  )
}
