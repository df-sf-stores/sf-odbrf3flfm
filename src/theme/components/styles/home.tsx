import { clsx } from 'clsx'

// The home page's Tailwind classes, by the names its markup uses (storefront ARCHITECTURE §3.4 "Classes").
// Every section shares one column (1440px with fluid gutters), and one vertical rhythm (clamp() spacing).
const focusRing = clsx('focus-visible:[outline:2px_solid_var(--color-focus)] focus-visible:outline-offset-[3px]')
const column = clsx('mx-auto box-border w-[min(100%,1440px)] px-4 sm:px-6 lg:px-10')
const sectionGap = clsx('mt-[clamp(4rem,8vw,7rem)]')
const buttonBase = clsx('inline-flex min-h-12 items-center justify-center gap-x-2.5 rounded-button px-8 text-[12px] font-semibold tracking-[0.2em] uppercase no-underline transition-colors duration-300', focusRing)

export const home = {
  // Shared
  section: clsx(column, sectionGap, 'flex flex-col gap-y-[clamp(2rem,4vw,3.25rem)]'),
  head: clsx('flex flex-col items-center gap-y-3 text-center'),
  headRow: clsx('flex flex-col items-center gap-y-3 text-center md:flex-row md:items-end md:justify-between md:text-left'),
  headText: clsx('flex flex-col items-center gap-y-3 md:items-start'),
  eyebrow: clsx('m-0 flex items-center gap-x-3 text-[11px] font-semibold tracking-[0.3em] text-gold-ink uppercase'),
  heading: clsx('m-0 font-heading text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] font-[var(--heading-weight)] tracking-[var(--heading-spacing)] [text-wrap:balance]'),
  em: clsx('text-maroon italic'),
  lead: clsx('m-0 max-w-[56ch] text-[clamp(0.95rem,1.4vw,1.05rem)] leading-[1.75] text-ink-soft'),
  ornament: clsx('block h-3 w-28 [fill:none] [stroke:var(--color-gold)] [stroke-width:1]'),
  button: clsx(buttonBase, 'bg-maroon text-accent-ink shadow-soft hover:bg-maroon-deep'),
  ghost: clsx(buttonBase, 'self-center border border-ink/80 bg-transparent text-ink hover:bg-ink hover:text-bg'),
  textLink: clsx('group/more inline-flex min-h-11 items-center gap-x-2 text-[12px] font-semibold tracking-[0.2em] text-maroon uppercase no-underline', focusRing),
  textLinkIcon: clsx('h-4 w-4 transition-transform duration-300 [fill:none] [stroke:currentcolor] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8] group-hover/more:translate-x-1'),
  image: clsx('block h-full w-full object-cover'),
  zoom: clsx('block h-full w-full object-cover transition-transform duration-[1200ms] ease-out'),
  // The picture inside each kind of tile grows a little while its tile is hovered.
  zoomCategory: clsx('block h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/cat:scale-110'),
  zoomOccasion: clsx('block h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/occ:scale-[1.07]'),
  zoomEdit: clsx('block h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/edit:scale-[1.05]'),
  zoomGallery: clsx('block h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/gal:scale-110'),

  // 4. Shop by category: wraps into centred rows on phones (3, then 4 across), seven across from 1024px; never scrolls sideways
  categories: clsx('m-0 flex list-none flex-wrap justify-center gap-x-4 gap-y-6 p-0 sm:gap-x-6 lg:grid lg:grid-cols-7 lg:gap-x-6'),
  category: clsx('w-[calc((100%-2rem)/3)] min-w-0 sm:w-[calc((100%-4.5rem)/4)] lg:w-auto'),
  categoryLink: clsx('group/cat flex flex-col items-center gap-y-3 rounded-card text-ink no-underline', focusRing),
  categoryRing: clsx('box-border block aspect-square w-full rounded-full bg-[conic-gradient(from_140deg,var(--color-gold-soft),var(--color-gold),var(--color-gold-soft),var(--color-gold),var(--color-gold-soft))] p-[3px] transition-shadow duration-500 group-hover/cat:shadow-lift'),
  categoryPicture: clsx('box-border block h-full w-full overflow-hidden rounded-full border-[3px] border-bg bg-soft'),
  categoryName: clsx('text-center font-heading text-[17px] leading-tight font-medium transition-colors group-hover/cat:text-maroon md:text-[19px]'),

  // 5. Trust strip
  trust: clsx(column, 'mt-[clamp(3rem,6vw,5rem)]'),
  trustList: clsx('m-0 grid list-none grid-cols-2 gap-px overflow-hidden rounded-tile border border-line bg-line p-0 sm:grid-cols-6 lg:grid-cols-5'),
  trustItem: clsx('flex flex-col items-center gap-y-2 bg-surface px-3 py-6 text-center last:col-span-2 sm:col-span-2 sm:nth-[n+4]:col-span-3 lg:col-span-1 lg:nth-[n+4]:col-span-1 lg:py-8'),
  trustIcon: clsx('h-7 w-7 text-gold-ink'),
  trustTitle: clsx('m-0 font-heading text-[18px] leading-tight font-semibold md:text-[20px]'),
  trustText: clsx('m-0 max-w-[24ch] text-[13px] leading-[1.55] text-muted'),

  // 6. Occasion tiles
  occasions: clsx('m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-5 lg:grid-cols-4 lg:gap-6'),
  occasion: clsx('min-w-0'),
  occasionLink: clsx('group/occ relative block aspect-[3/4] overflow-hidden rounded-tile bg-soft text-[#fffaf2] no-underline shadow-soft', focusRing),
  occasionPicture: clsx('absolute inset-0'),
  occasionShade: clsx('absolute inset-0 [background:linear-gradient(180deg,rgb(20_8_10/0)_45%,rgb(20_8_10/0.82)_100%)]'),
  occasionCopy: clsx('absolute right-0 bottom-0 left-0 flex flex-col gap-y-1 p-4 sm:p-6'),
  occasionName: clsx('m-0 font-heading text-[clamp(1.35rem,2.4vw,2rem)] leading-tight font-medium'),
  occasionLine: clsx('m-0 hidden max-w-[28ch] text-[13px] leading-[1.5] opacity-90 sm:block'),
  occasionMore: clsx('mt-2 inline-flex items-center gap-x-2 text-[11px] font-semibold tracking-[0.22em] text-gold-soft uppercase'),

  // The store's own edits: wraps into centred rows on phones (2, then 3 across), five across from 1024px; never scrolls sideways
  edits: clsx('m-0 flex list-none flex-wrap justify-center gap-3 p-0 sm:gap-5 lg:grid lg:grid-cols-5'),
  edit: clsx('w-[calc((100%-0.75rem)/2)] min-w-0 sm:w-[calc((100%-2.5rem)/3)] lg:w-auto'),
  editLink: clsx('group/edit block aspect-square overflow-hidden rounded-tile bg-maroon-deep shadow-soft transition-shadow duration-500 hover:shadow-lift', focusRing),

  // 7. Products
  products: clsx('flex flex-col gap-y-10 [&>ul]:w-full'),

  // 8. Shop by price
  prices: clsx('m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-5 lg:grid-cols-4'),
  priceLink: clsx('group/price relative box-border flex h-full min-h-36 flex-col justify-between gap-y-5 overflow-hidden rounded-tile border border-line bg-surface p-5 text-ink no-underline transition-[border-color,box-shadow] duration-300 hover:border-gold hover:shadow-soft sm:min-h-40 sm:p-7', focusRing),
  priceTier: clsx('m-0 text-[11px] font-semibold tracking-[0.26em] text-gold-ink uppercase'),
  priceName: clsx('m-0 font-heading text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.1] font-medium transition-colors group-hover/price:text-maroon'),
  priceLine: clsx('m-0 text-[13px] leading-[1.55] text-muted'),
  priceGlyph: clsx('absolute -top-6 -right-6 h-24 w-24 rounded-full border border-gold-soft opacity-70 transition-transform duration-700 group-hover/price:scale-125'),

  // 9. Brand story
  story: clsx(column, sectionGap, 'grid grid-cols-1 items-center gap-y-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-x-12 lg:gap-x-20'),
  storyPicture: clsx('relative'),
  storyFrame: clsx('relative overflow-hidden rounded-tile bg-soft shadow-lift'),
  storyOutline: clsx('pointer-events-none absolute -inset-3 rounded-[28px] border border-gold/60 sm:-inset-4'),
  storyCopy: clsx('flex flex-col items-start gap-y-5'),
  storyTitle: clsx('m-0 font-heading text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[1.05] font-[var(--heading-weight)] [text-wrap:balance] [&_em]:block'),
  storyBody: clsx('m-0 max-w-[54ch] text-[16px] leading-[1.8] text-ink-soft'),
  pillars: clsx('m-0 mt-2 grid w-full list-none grid-cols-1 gap-4 border-t border-t-line p-0 pt-6 sm:grid-cols-3'),
  pillar: clsx('flex flex-col gap-y-1'),
  pillarTitle: clsx('m-0 font-heading text-[20px] leading-tight font-semibold text-maroon'),
  pillarText: clsx('m-0 text-[13px] leading-[1.55] text-muted'),

  // 10. Customer stories
  storyInvite: clsx('mx-auto box-border flex w-full max-w-[860px] flex-col items-center gap-y-5 rounded-tile border border-line bg-soft px-6 py-12 text-center sm:px-14 sm:py-16'),
  quoteMark: clsx('h-10 w-10 text-gold'),
  quote: clsx('m-0 max-w-[52ch] font-heading text-[clamp(1.2rem,2.2vw,1.55rem)] leading-[1.5] text-ink-soft italic'),

  // 11. Gallery
  gallery: clsx('m-0 grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6'),
  galleryItem: clsx('min-w-0'),
  galleryLink: clsx('group/gal relative block aspect-square overflow-hidden rounded-card bg-soft', focusRing),
  galleryShade: clsx('absolute inset-0 flex items-center justify-center bg-maroon-deep/0 text-[#fffaf2] opacity-0 transition-[opacity,background-color] duration-300 group-hover/gal:bg-maroon-deep/40 group-hover/gal:opacity-100'),
  galleryIcon: clsx('h-7 w-7 [fill:none] [stroke:currentcolor] [stroke-width:1.5]'),

  // 12. Newsletter / circle
  circle: clsx(column, sectionGap),
  circleCard: clsx('relative isolate grid overflow-hidden rounded-tile bg-maroon-deep text-[#fffaf2] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]'),
  circleCopy: clsx('flex flex-col items-start gap-y-5 p-8 sm:p-12 lg:p-16'),
  circleEyebrow: clsx('m-0 text-[11px] font-semibold tracking-[0.3em] text-gold-soft uppercase'),
  circleTitle: clsx('m-0 font-heading text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-[var(--heading-weight)] [text-wrap:balance]'),
  circleBody: clsx('m-0 max-w-[46ch] leading-[1.75] text-footer-muted'),
  circlePerks: clsx('m-0 grid list-none gap-y-2 p-0 text-[14px]'),
  circlePerk: clsx('flex items-center gap-x-3 before:block before:h-1.5 before:w-1.5 before:shrink-0 before:rotate-45 before:bg-gold before:content-[""]'),
  circleActions: clsx('mt-2 flex flex-wrap gap-3'),
  circleButton: clsx(buttonBase, 'bg-gold text-maroon-deep hover:bg-gold-soft focus-visible:[outline-color:var(--color-gold-soft)]'),
  circleGhost: clsx(buttonBase, 'border border-[#fffaf2]/50 text-[#fffaf2] hover:bg-[#fffaf2] hover:text-maroon-deep focus-visible:[outline-color:var(--color-gold-soft)]'),
  circlePicture: clsx('relative hidden min-h-[420px] md:block [&_img]:absolute [&_img]:inset-0'),
}
