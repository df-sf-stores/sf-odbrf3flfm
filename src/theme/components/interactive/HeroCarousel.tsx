'use client'

import { clsx } from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Link, ThemeImage } from '@dripfunnel/storefront-core/theme'
import { hero as styles } from '../styles/hero'

export type HeroSlide = {
  id: string
  desktop: 'hero-bridal-desktop.webp' | 'hero-dailywear-desktop.webp' | 'hero-festive-desktop.webp'
  mobile: 'hero-bridal-mobile.webp' | 'hero-dailywear-mobile.webp' | 'hero-festive-mobile.webp'
  alt: string
  /** 'light' writes ivory words over a dark picture; 'dark' writes charcoal words over the cream panel (from 768px). */
  tone: 'light' | 'dark'
  eyebrow: string
  title: string
  accent: string
  body: string
  action: string
  href: string
  /** "Slide 1 of 3", for screen readers. */
  position: string
}

export type HeroLabels = { region: string; previous: string; next: string; pause: string; play: string; choose: string }

const interval = 3000

export const HeroCarousel = ({ slides, labels }: { slides: HeroSlide[]; labels: HeroLabels }) => {
  const [index, setIndex] = useState(0)
  // Paused only while a keyboard user is inside it (a mouse click on an arrow or dot doesn't pause it), or by the pause button.
  const [focused, setFocused] = useState(false)
  const [stopped, setStopped] = useState(false)
  const touchX = useRef<number | null>(null)
  // Set by a mouse or touch press, so the focus that follows it doesn't count as a keyboard user arriving.
  const pointer = useRef(false)
  const count = slides.length
  const playing = !stopped && count > 1
  const go = (next: number) => setIndex(((next % count) + count) % count)

  // A fresh 3 s for every slide, so a slide picked by hand also gets its full time before the next one.
  useEffect(() => {
    if (!playing || focused) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearTimeout(timer)
  }, [playing, focused, count, index])

  return (
    <section
      className={styles.root}
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
      onPointerDown={() => {
        pointer.current = true
      }}
      onFocus={() => {
        setFocused(!pointer.current)
        pointer.current = false
      }}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(index + 1)
        if (e.key === 'ArrowLeft') go(index - 1)
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(e) => {
        const start = touchX.current
        const end = e.changedTouches[0]?.clientX
        touchX.current = null
        if (start === null || end === undefined || Math.abs(end - start) < 40) return
        go(end < start ? index + 1 : index - 1)
      }}
    >
      <div className={styles.track} aria-live={playing && !focused ? 'off' : 'polite'}>
        {slides.map((s, i) => {
          const on = i === index
          const words = (
            <>
              {s.title} <em className={s.tone === 'dark' ? styles.accentDark : styles.accent}>{s.accent}</em>
            </>
          )
          return (
            <div key={s.id} className={on ? styles.slideOn : styles.slide} role="group" aria-roledescription="slide" aria-label={s.position} aria-hidden={on ? undefined : 'true'} inert={!on}>
              <div className={on ? styles.pictureOn : styles.picture}>
                <ThemeImage src={s.mobile} alt={s.alt} ratio={0.8} sizes="100vw" className={styles.mobileImage} />
                <ThemeImage src={s.desktop} alt={s.alt} ratio={2.4} sizes="100vw" className={styles.desktopImage} />
              </div>
              <div className={s.tone === 'dark' ? styles.shadeDark : styles.shade} aria-hidden="true" />
              <div className={styles.copyWrap}>
                <div className={clsx(styles.copy, s.tone === 'dark' ? styles.copyDark : styles.copyLight, on ? styles.copyOn : styles.copyOff)}>
                  <p className={s.tone === 'dark' ? styles.eyebrowDark : styles.eyebrow}>{s.eyebrow}</p>
                  {i === 0 ? <h1 className={styles.title}>{words}</h1> : <h2 className={styles.title}>{words}</h2>}
                  <p className={styles.body}>{s.body}</p>
                  <Link href={s.href} className={s.tone === 'dark' ? styles.ctaDark : styles.cta}>
                    {s.action}
                    <svg className={styles.ctaIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {count > 1 ? (
        <div className={styles.controls}>
          <button type="button" className={styles.arrow} onClick={() => go(index - 1)} aria-label={labels.previous}>
            <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <div className={styles.dots} role="group" aria-label={labels.choose}>
            {slides.map((s, i) => (
              <button key={s.id} type="button" className={styles.dot} aria-label={s.position} aria-current={i === index ? 'true' : undefined} onClick={() => go(i)}>
                <span className={i === index ? styles.dotMarkOn : styles.dotMark} />
              </button>
            ))}
          </div>
          <button type="button" className={styles.arrow} onClick={() => go(index + 1)} aria-label={labels.next}>
            <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button type="button" className={styles.arrow} onClick={() => setStopped(!stopped)} aria-label={stopped ? labels.play : labels.pause}>
            <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d={stopped ? 'M8 5.5v13l10-6.5z' : 'M9 6v12M15 6v12'} />
            </svg>
          </button>
        </div>
      ) : null}
    </section>
  )
}
