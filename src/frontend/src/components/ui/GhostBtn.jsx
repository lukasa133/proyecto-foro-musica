// GHOST BUTTON COMPONENT

import { useState } from 'react'
import { C, sans } from '../../constants/designSystem'

function GhostBtn({ children, onClick, teal = false }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: sans, fontWeight: 500, fontSize: '13px', letterSpacing: '0.03em',
        padding: '10px 18px', background: 'transparent',
        color: hovered ? (teal ? C.tealHover : C.text) : teal ? C.teal : C.textMuted,
        border: `1px solid ${hovered ? C.borderStrong : C.border}`,
        cursor: 'pointer', transition: 'color 0.18s, border-color 0.18s',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

export default GhostBtn
