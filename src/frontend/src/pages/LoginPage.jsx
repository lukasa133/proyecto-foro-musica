import { useState } from 'react'
import { C, sans, serif } from '../constants/designSystem'
import Field from '../components/ui/Field'
import PrimaryBtn from '../components/ui/PrimaryBtn'
import TextLink from '../components/ui/TextLink'

function LoginScreen({ onLogin, onNav }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) { setError('Por favor, completa todos los campos.'); return }
    const username = email.split('@')[0].replace(/[^a-z0-9_]/gi, '').toLowerCase()
    onLogin({ username, email })
  }

  return (
    <main style={{ minHeight: 'calc(100vh - 63px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <p style={{ fontFamily: sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.terracotta, marginBottom: '10px' }}>Acceso</p>
          <h1 style={{ fontFamily: serif, fontWeight: 800, fontSize: '38px', color: C.text, margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>Iniciar sesión</h1>
          <p style={{ fontFamily: sans, fontSize: '14px', color: C.textMuted, margin: 0, fontWeight: 300 }}>Bienvenido de vuelta a la comunidad.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ background: C.white, border: `1px solid ${C.border}`, padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Field label="Correo electrónico" id="email" type="email" value={email} onChange={setEmail} placeholder="tu@correo.com" required />
          <Field label="Contraseña" id="password" type="password" value={password} onChange={setPassword} placeholder="Tu contraseña" required />
          {error && <p style={{ fontFamily: sans, fontSize: '13px', color: C.terracotta, margin: 0, fontWeight: 500 }}>{error}</p>}
          <PrimaryBtn type="submit" full>Iniciar sesión</PrimaryBtn>
        </form>
        <p style={{ fontFamily: sans, fontSize: '13px', color: C.textMuted, textAlign: 'center', marginTop: '20px' }}>
          ¿Sin cuenta? <TextLink onClick={() => onNav('register')}>Regístrate aquí</TextLink>
        </p>
      </div>
    </main>
  )
}

export default LoginScreen
