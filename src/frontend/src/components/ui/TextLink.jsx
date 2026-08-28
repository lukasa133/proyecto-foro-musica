// TEXT LINK

import { useState } from 'react'
import { C, sans } from '../../constants/designSystem'

function TextLink({ children, onClick, color = C.terracotta }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: sans, fontSize: 'inherit', color, padding: 0,
        textDecoration: hovered ? 'underline' : 'none', fontWeight: 500,
      }}
    >
      {children}
    </button>
  )
}

export default TextLink
