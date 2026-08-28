
import { C, sans, serif } from '../../constants/designSystem'
import GhostBtn from '../ui/GhostBtn'
import PrimaryBtn from '../ui/PrimaryBtn'

function AuthOverlay({ onNav, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(23, 23, 23, 0.55)',
        backdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '520px',
          background: C.white,
          borderTop: `4px solid ${C.terracotta}`,
          padding: '36px 32px 40px',
          boxShadow: '0 -8px 40px rgba(23,23,23,0.18)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: sans, fontSize: '20px', color: C.textDim, lineHeight: 1,
          }}
        >
          ×
        </button>
        <p style={{ fontFamily: sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.terracotta, marginBottom: '10px' }}>
          Únete a la comunidad
        </p>
        <h2 style={{ fontFamily: serif, fontWeight: 800, fontSize: '26px', color: C.text, margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>
          Inicia sesión para participar
        </h2>
        <p style={{ fontFamily: sans, fontSize: '14px', color: C.textMuted, fontWeight: 300, margin: '0 0 28px 0', lineHeight: 1.6 }}>
          Para dar likes y comentar necesitas una cuenta. Es gratis y solo lleva un momento.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <PrimaryBtn onClick={() => { onNav('register'); onClose() }}>Crear cuenta</PrimaryBtn>
          <GhostBtn onClick={() => { onNav('login'); onClose() }} teal>Ya tengo cuenta</GhostBtn>
        </div>
      </div>
    </div>
  )
}

export default AuthOverlay

