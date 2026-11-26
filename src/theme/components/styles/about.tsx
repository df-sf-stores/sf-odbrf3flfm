import { clsx } from 'clsx'

// The About and Contact pages' Tailwind classes (storefront ARCHITECTURE §3.4 "Classes").
const focusRing = clsx('focus-visible:[outline:2px_solid_var(--color-focus)] focus-visible:outline-offset-[3px]')
const column = clsx('mx-auto box-border w-[min(100%,1440px)] px-4 sm:px-6 lg:px-10')
const buttonBase = clsx('inline-flex min-h-12 items-center justify-center rounded-button px-8 text-[12px] font-semibold tracking-[0.2em] uppercase no-underline transition-colors duration-300', focusRing)

export const about = {
  intro: clsx(column, 'grid grid-cols-1 items-center gap-y-10 pt-[clamp(2.5rem,6vw,5rem)] md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:gap-x-12 lg:gap-x-20'),
  introCopy: clsx('flex flex-col items-start gap-y-5'),
  introPicture: clsx('overflow-hidden rounded-tile bg-soft shadow-lift'),
  eyebrow: clsx('m-0 text-[11px] font-semibold tracking-[0.3em] text-gold-ink uppercase'),
  title: clsx('m-0 font-heading text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.03] font-[var(--heading-weight)] [text-wrap:balance] [&_em]:block'),
  em: clsx('text-maroon italic'),
  ornament: clsx('block h-3 w-28 [fill:none] [stroke:var(--color-gold)] [stroke-width:1]'),
  lead: clsx('m-0 max-w-[52ch] font-heading text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.5] text-ink'),
  body: clsx('m-0 max-w-[58ch] text-[16px] leading-[1.8] text-ink-soft'),
  image: clsx('block h-full w-full object-cover'),
  values: clsx(column, 'mt-[clamp(4rem,8vw,7rem)] flex flex-col items-center gap-y-10'),
  valuesTitle: clsx('m-0 text-center font-heading text-[clamp(2rem,4vw,3rem)] leading-tight font-[var(--heading-weight)]'),
  valueList: clsx('m-0 grid w-full list-none grid-cols-1 gap-5 p-0 md:grid-cols-3'),
  value: clsx('flex flex-col items-start gap-y-3 rounded-tile border border-line bg-surface p-7 shadow-soft'),
  valueIcon: clsx('h-9 w-9 text-gold-ink'),
  valueName: clsx('m-0 font-heading text-[24px] leading-tight font-semibold'),
  valueText: clsx('m-0 text-[15px] leading-[1.7] text-ink-soft'),
  care: clsx(column, 'mt-[clamp(4rem,8vw,7rem)] grid grid-cols-1 items-center gap-y-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-x-12 lg:gap-x-20'),
  carePicture: clsx('overflow-hidden rounded-tile bg-soft shadow-soft'),
  careCopy: clsx('flex flex-col items-start gap-y-5'),
  careTitle: clsx('m-0 font-heading text-[clamp(2rem,4vw,3rem)] leading-tight font-[var(--heading-weight)]'),
  careList: clsx('m-0 grid list-none gap-y-3 p-0'),
  careItem: clsx('flex gap-x-3 text-[15px] leading-[1.7] text-ink-soft before:mt-2.5 before:block before:h-1.5 before:w-1.5 before:shrink-0 before:rotate-45 before:bg-gold before:content-[""]'),
  actions: clsx('mt-2 flex flex-wrap gap-3'),
  button: clsx(buttonBase, 'bg-maroon text-accent-ink shadow-soft hover:bg-maroon-deep'),
  ghost: clsx(buttonBase, 'border border-ink/80 text-ink hover:bg-ink hover:text-bg'),

  // Contact
  contact: clsx(column, 'grid grid-cols-1 gap-y-10 pt-[clamp(2.5rem,6vw,5rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-x-12 lg:gap-x-20'),
  contactCopy: clsx('flex flex-col items-start gap-y-5'),
  cards: clsx('m-0 grid w-full gap-4'),
  card: clsx('flex items-start gap-x-4 rounded-tile border border-line bg-surface p-6 shadow-soft'),
  cardIcon: clsx('mt-0.5 h-6 w-6 shrink-0 text-gold-ink'),
  cardTerm: clsx('text-[11px] font-semibold tracking-[0.24em] text-muted uppercase'),
  cardValue: clsx('m-0 mt-1 text-[17px] wrap-anywhere text-ink'),
  helpTitle: clsx('m-0 mt-4 font-heading text-[26px] leading-tight'),
  helpList: clsx('m-0 grid list-none gap-y-2 p-0'),
}
