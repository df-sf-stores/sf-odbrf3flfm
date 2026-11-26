import { clsx } from 'clsx'

// The hero carousel's Tailwind classes (storefront ARCHITECTURE §3.4 "Classes").
// Phones get the 4:5 crop with words at the foot; from 768px the 2.4:1 crop with words on the left.
const focusLight = clsx('focus-visible:[outline:2px_solid_#fff] focus-visible:outline-offset-[3px]')
const slideBase = clsx('absolute inset-0 transition-opacity duration-[900ms] ease-out')
const pictureBase = clsx('absolute inset-0 overflow-hidden bg-maroon-deep transition-transform duration-[7000ms] ease-out [&_img]:h-full [&_img]:w-full [&_img]:object-cover')
const copyBase = clsx('flex max-w-[34rem] flex-col items-start gap-y-4 transition-[opacity,transform] duration-700 ease-out md:gap-y-5')
const ctaBase = clsx('group/cta mt-2 inline-flex min-h-12 items-center gap-x-3 rounded-button px-7 text-[12px] font-semibold tracking-[0.2em] uppercase no-underline shadow-soft transition-colors duration-300')

export const hero = {
  root: clsx('relative isolate w-full overflow-hidden bg-maroon-deep'),
  track: clsx('relative aspect-[4/5] w-full max-h-[calc(100svh-96px)] min-h-[480px] md:aspect-[16/8] md:min-h-[420px] xl:aspect-[12/5] xl:max-h-[760px]'),
  slide: clsx(slideBase, 'z-0 opacity-0'),
  slideOn: clsx(slideBase, 'z-10 opacity-100'),
  picture: clsx(pictureBase, 'scale-[1.06]'),
  pictureOn: clsx(pictureBase, 'scale-100'),
  mobileImage: clsx('block md:hidden'),
  desktopImage: clsx('hidden md:block md:object-[70%_50%] xl:object-center'),
  // Readability: a foot gradient on phones; a left-to-right one over photos from 768px.
  shade: clsx('absolute inset-0 [background:linear-gradient(180deg,rgb(20_8_10/0)_18%,rgb(20_8_10/0.55)_48%,rgb(20_8_10/0.88)_100%)] md:[background:linear-gradient(90deg,rgb(20_8_10/0.72)_0%,rgb(20_8_10/0.38)_42%,rgb(20_8_10/0)_70%)]'),
  shadeDark: clsx('absolute inset-0 [background:linear-gradient(180deg,rgb(20_8_10/0)_18%,rgb(20_8_10/0.55)_48%,rgb(20_8_10/0.88)_100%)] md:[background:linear-gradient(90deg,rgb(243_234_219/0.9)_0%,rgb(243_234_219/0.5)_38%,rgb(243_234_219/0)_60%)]'),
  copyWrap: clsx('absolute inset-0 mx-auto box-border flex w-[min(100%,1440px)] items-end px-5 pb-24 sm:px-8 md:items-center md:px-12 md:pb-0 lg:px-16'),
  copy: copyBase,
  copyOn: clsx('translate-y-0 opacity-100 delay-200'),
  copyOff: clsx('translate-y-4 opacity-0'),
  copyLight: clsx('text-[#fffaf2]'),
  copyDark: clsx('text-[#fffaf2] md:text-ink'),
  eyebrow: clsx('m-0 flex items-center gap-x-3 text-[11px] font-semibold tracking-[0.32em] text-gold-soft uppercase before:block before:h-px before:w-8 before:bg-current before:content-[""] md:text-[12px]'),
  eyebrowDark: clsx('m-0 flex items-center gap-x-3 text-[11px] font-semibold tracking-[0.32em] text-gold-soft uppercase before:block before:h-px before:w-8 before:bg-current before:content-[""] md:text-[12px] md:text-gold-ink'),
  title: clsx('m-0 font-heading text-[clamp(2.4rem,6.2vw,5rem)] leading-[1.02] font-medium tracking-[-0.01em] [text-wrap:balance] [&_em]:block'),
  accent: clsx('font-medium text-gold-soft italic'),
  accentDark: clsx('font-medium text-gold-soft italic md:text-maroon'),
  body: clsx('m-0 max-w-[40ch] text-[15px] leading-[1.7] opacity-95 md:text-[17px]'),
  cta: clsx(ctaBase, 'bg-[#fffaf2] text-maroon-deep hover:bg-gold-soft', focusLight),
  ctaDark: clsx(ctaBase, 'bg-[#fffaf2] text-maroon-deep hover:bg-gold-soft md:bg-maroon md:text-accent-ink md:hover:bg-maroon-deep', focusLight, 'md:focus-visible:[outline:2px_solid_var(--color-focus)]'),
  ctaIcon: clsx('h-4 w-4 transition-transform duration-300 [fill:none] [stroke:currentcolor] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8] group-hover/cta:translate-x-1'),
  controls: clsx('absolute right-0 bottom-4 left-0 z-20 mx-auto box-border flex w-[min(100%,1440px)] items-center justify-center gap-x-1 px-4 md:bottom-7 md:justify-end md:px-12 lg:px-16'),
  arrow: clsx('inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[rgb(20_8_10/0.25)] p-0 text-[#fffaf2] backdrop-blur-sm transition-colors hover:bg-[rgb(20_8_10/0.5)]', focusLight),
  arrowIcon: clsx('h-4.5 w-4.5 [fill:none] [stroke:currentcolor] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]'),
  dots: clsx('mx-1 flex items-center'),
  dot: clsx('inline-flex h-11 w-9 cursor-pointer items-center justify-center border-0 bg-transparent p-0', focusLight),
  dotMark: clsx('block h-2 w-2 rounded-full bg-[#fffaf2]/55 transition-all duration-300'),
  dotMarkOn: clsx('block h-2 w-6 rounded-full bg-gold-soft transition-all duration-300'),
}
