// GENRE TAG

import { C, sans } from '../../constants/designSystem'

function GenreTag({ label, variant = 'default' }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: sans,
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.09em',
        textTransform: 'uppercase',
        padding: '3px 9px',
        border: '1px solid',
        ...(variant === 'terracotta' && { borderColor: C.terracotta, color: C.terracotta, background: C.terracottaBg }),
        ...(variant === 'teal' && { borderColor: C.teal, color: C.teal, background: C.tealBg }),
        ...(variant === 'default' && { borderColor: C.border, color: C.textMuted, background: 'transparent' }),
      }}
    >
      {label}
    </span>
  )
}

export default GenreTag
