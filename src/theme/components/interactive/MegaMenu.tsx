'use client'

import { useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from '@dripfunnel/storefront-core/theme'
import { layout as styles } from '../styles/layout'

/**
 * A desktop nav link that opens a full-width panel below the header: on hover with a mouse, on focus from the keyboard,
 * and with its chevron button by touch. Escape closes it and returns focus to the button.
 */
export const MegaMenu = ({ label, href, toggleLabel, id, children }: { label: string; href: string; toggleLabel: string; id: string; children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const leaving = useRef<ReturnType<typeof setTimeout>>(undefined)
  const { path } = useLocation()
  const [shownAt, setShownAt] = useState(path)
  if (shownAt !== path) {
    setShownAt(path)
    setOpen(false)
  }
  const show = (value: boolean, delay = 0) => {
    clearTimeout(leaving.current)
    if (delay) leaving.current = setTimeout(() => setOpen(value), delay)
    else setOpen(value)
  }
  return (
    <div
      className={styles.megaItem}
      onKeyDown={(e) => {
        if (e.key !== 'Escape' || !open) return
        show(false)
        toggle.current?.focus()
      }}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') show(true, 80)
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') show(false, 160)
      }}
      onBlur={() => show(false, 120)}
      onFocus={() => clearTimeout(leaving.current)}
    >
      <Link href={href} className={styles.navLink}>
        {label}
      </Link>
      <button ref={toggle} type="button" className={styles.megaToggle} aria-expanded={open} aria-controls={id} aria-label={toggleLabel} onClick={() => show(!open)}>
        <svg className={styles.chevron} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div id={id} className={open ? styles.megaPanelOpen : styles.megaPanel}>
        {children}
      </div>
    </div>
  )
}
