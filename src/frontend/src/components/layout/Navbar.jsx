import { useEffect, useRef, useState } from 'react'
import { C, sans, serif } from '../../constants/designSystem'
import PrimaryBtn from '../ui/PrimaryBtn'
import TextLink from '../ui/TextLink'

function Navbar({ user, current, onNav, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 200, background: C.paper, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ height: '3px', background: C.teal }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

        {/* Logo */}
        <button
          onClick={() => onNav('feed')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: serif, fontStyle: 'italic', fontWeight: 700, fontSize: '26px', color: C.teal, letterSpacing: '-0.01em', padding: 0, lineHeight: 1, flexShrink: 0 }}
        >
          Sonora
        </button>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          {['Descubrir', 'Comunidad'].map(label => {
            const active = current === 'feed' && label === 'Descubrir'
            return (
              <button
                key={label}
                onClick={() => onNav('feed')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: sans, fontWeight: 500, fontSize: '13px',
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  color: active ? C.terracotta : C.textMuted,
                  padding: '8px 16px',
                  borderBottom: active ? `2px solid ${C.terracotta}` : '2px solid transparent',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = C.text }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = C.textMuted }}
              >
                {label}
              </button>
            )
          })}
        </nav>

        {/* Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {user ? (
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                style={{
                  background: 'none', border: `1px solid ${dropdownOpen ? C.borderStrong : C.border}`,
                  cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: '13px',
                  color: C.teal, padding: '8px 14px',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  transition: 'border-color 0.18s',
                }}
              >
                @{user.username}
                <span style={{ fontSize: '10px', color: C.textDim, transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.18s', display: 'inline-block' }}>▾</span>
              </button>

              {dropdownOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 6px)', right: 0, background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 8px 24px rgba(23,23,23,0.10)', minWidth: '180px', zIndex: 300 }}>
                  <button
                    onClick={() => { onNav('create'); setDropdownOpen(false) }}
                    style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: sans, fontSize: '13px', fontWeight: 500, color: C.text, padding: '12px 16px', borderBottom: `1px solid ${C.border}`, transition: 'background 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.terracottaBg }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                  >
                    + Nueva entrada
                  </button>
                  <button
                    onClick={() => { onLogout(); setDropdownOpen(false) }}
                    style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: sans, fontSize: '13px', fontWeight: 500, color: C.textMuted, padding: '12px 16px', transition: 'background 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.paperDark }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <TextLink onClick={() => onNav('login')} color={C.teal}>Entrar</TextLink>
              <PrimaryBtn onClick={() => onNav('register')}>Registrarse</PrimaryBtn>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
