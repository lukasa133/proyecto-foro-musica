import { useState } from 'react'
import { C, sans } from '../../constants/designSystem'

function Field({ label, id, type = 'text', value, onChange, placeholder, as, required, hint }) {
  const [focused, setFocused] = useState(false)
  const inputStyle = {
    width: '100%', background: C.white,
    border: `1px solid ${focused ? C.teal : C.border}`,
    color: C.text, fontFamily: sans, fontSize: '14px', fontWeight: 400,
    padding: '11px 14px', outline: 'none',
    resize: as === 'textarea' ? 'vertical' : undefined,
    minHeight: as === 'textarea' ? '160px' : undefined,
    transition: 'border-color 0.18s', borderRadius: 0,
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <label htmlFor={id} style={{ fontFamily: sans, fontSize: '12px', fontWeight: 600, color: C.textMuted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {label}{required && <span style={{ color: C.terracotta, marginLeft: 3 }}>*</span>}
      </label>
      {as === 'textarea'
        ? <textarea id={id} style={inputStyle} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
        : <input id={id} type={type} style={inputStyle} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      }
      {hint && <span style={{ fontFamily: sans, fontSize: '11px', color: C.textDim }}>{hint}</span>}
    </div>
  )
}

export default Field
