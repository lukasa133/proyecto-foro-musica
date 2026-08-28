// PRIMARY BUTTON COMPONENT

import { useState } from 'react'
import { C, sans } from '../../constants/designSystem'

function PrimaryBtn({ children, onClick, type = 'button', full = false }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        fontFamily: sans, fontWeight: 600, fontSize: '13px', letterSpacing: '0.04em',
        padding: '11px 24px',
        background: hovered ? C.terracottaHover : C.terracotta,
        color: C.white, border: 'none', cursor: 'pointer',
        transition: 'background 0.18s',
        width: full ? '100%' : undefined,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
