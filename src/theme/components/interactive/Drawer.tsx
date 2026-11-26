'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from '@dripfunnel/storefront-core/theme'
import { layout as styles } from '../styles/layout'

/**
 * The menu below 1024px: a hamburger that slides a drawer in from the left over a scrim. It closes on Escape, on the
 * scrim, with its close button and whenever the page changes; while closed it is inert, so focus never lands inside.
 */
export const Drawer = ({ openLabel, closeLabel, title, children }: { openLabel: string; closeLabel: string; title: string; children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const opener = useRef<HTMLButtonElement>(null)
  const closer = useRef<HTMLButtonElement>(null)
  const { path, query } = useLocation()
  const at = `${path}?${query.toString()}`
  const [shownAt, setShownAt] = useState(at)
  if (shownAt !== at) {
    setShownAt(at)
    setOpen(false)
  }
  useEffect(() => {
    if (open) closer.current?.focus()
  }, [open])
  const close = () => {
    setOpen(false)
    opener.current?.focus()
  }
  return (
    <>
      <button ref={opener} type="button" className={styles.drawerToggle} aria-expanded={open} aria-controls="site-drawer" onClick={() => setOpen(true)}>
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 7h16M4 12h11M4 17h16" />
        </svg>
        <span className={styles.hidden}>{openLabel}</span>
      </button>
      <div className={open ? styles.drawerScrim : styles.drawerScrimClosed} aria-hidden="true" onClick={close} />
      <div
        id="site-drawer"
        role="dialog"
        aria-modal={open ? 'true' : undefined}
        aria-label={title}
        className={open ? styles.drawer : styles.drawerClosed}
        inert={!open}
        onKeyDown={(e) => {
          if (e.key === 'Escape') close()
        }}
      >
        <div className={styles.drawerHead}>
          <p className={styles.drawerTitle}>{title}</p>
          <button ref={closer} type="button" className={styles.drawerClose} onClick={close}>
            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
            <span className={styles.hidden}>{closeLabel}</span>
          </button>
        </div>
        <div className={styles.drawerBody}>{children}</div>
      </div>
    </>
  )
}
