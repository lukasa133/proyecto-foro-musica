import { useState } from 'react'
import { C, sans, serif } from '../constants/designSystem'
import Field from '../components/ui/Field'
import PrimaryBtn from '../components/ui/PrimaryBtn'
import TextLink from '../components/ui/TextLink'

function RegisterScreen({ onRegister, onNav }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!username || !email || !password) { setError('Por favor, completa todos los campos.'); return }
    if (password !== confirm) { setError('Las contraseñas no coinciden.'); return }
    if (password.length < 6) { setError('La contraseña debe tener al menos 6 caracteres.'); return }
    onRegister({ username, email })
  }

  return (
    <main style={{ minHeight: 'calc(100vh - 63px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <p style={{ fontFamily: sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.terracotta, marginBottom: '10px' }}>Nueva cuenta</p>
          <h1 style={{ fontFamily: serif, fontWeight: 800, fontSize: '38px', color: C.text, margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>Únete a Sonora</h1>
          <p style={{ fontFamily: sans, fontSize: '14px', color: C.textMuted, margin: 0, fontWeight: 300 }}>Comparte música que merece ser escuchada.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ background: C.white, border: `1px solid ${C.border}`, padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Field label="Nombre de usuario" id="username" value={username} onChange={setUsername} placeholder="tu_nombre" required hint="Solo letras, números y guiones bajos." />
          <Field label="Correo electrónico" id="reg-email" type="email" value={email} onChange={setEmail} placeholder="tu@correo.com" required />
          <Field label="Contraseña" id="reg-password" type="password" value={password} onChange={setPassword} placeholder="Mínimo 6 caracteres" required />
          <Field label="Confirmar contraseña" id="confirm" type="password" value={confirm} onChange={setConfirm} placeholder="Repite la contraseña" required />
          {error && <p style={{ fontFamily: sans, fontSize: '13px', color: C.terracotta, margin: 0, fontWeight: 500 }}>{error}</p>}
          <PrimaryBtn type="submit" full>Crear cuenta</PrimaryBtn>
        </form>
        <p style={{ fontFamily: sans, fontSize: '13px', color: C.textMuted, textAlign: 'center', marginTop: '20px' }}>
          ¿Ya tienes cuenta? <TextLink onClick={() => onNav('login')}>Inicia sesión</TextLink>
        </p>
      </div>
    </main>
  )
}

export default RegisterScreen
