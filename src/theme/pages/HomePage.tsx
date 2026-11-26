import type { ReactNode } from 'react'
import { Link, ThemeImage, useHead, useProducts, useStorefront } from '@dripfunnel/storefront-core/theme'
import { BadgeCheck, Gem, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import { clsx } from 'clsx'
import { useCatalog } from '../components/catalog'
import { HeroCarousel } from '../components/interactive/HeroCarousel'
import { Layout } from '../components/Layout'
import { Ornament } from '../components/Ornament'
import { GridPlaceholder, ProductGrid } from '../components/ProductCard'
import { home as styles } from '../components/styles/home'
import motion from '../styles/motion.module.css'

const Heading = ({ eyebrow, title, accent, lead, align = 'center', action }: { eyebrow: string; title: string; accent: string; lead?: string; align?: 'center' | 'row'; action?: ReactNode }) =>
  align === 'row' ? (
    <div className={styles.headRow}>
      <div className={styles.headText}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.heading}>
          {title} <em className={styles.em}>{accent}</em>
        </h2>
      </div>
      {action}
    </div>
  ) : (
    <div className={styles.head}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.heading}>
        {title} <em className={styles.em}>{accent}</em>
      </h2>
      <Ornament className={styles.ornament} />
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </div>
  )

const Arrow = () => (
  <svg className={styles.textLinkIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const QuoteMark = () => (
  <svg className={styles.quoteMark} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M13 8C7.5 9.6 4 13.8 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.1-4-4.1-.5 0-.9 0-1.3.2.6-2.8 2.8-5.3 5.8-6.3zm15 0c-5.5 1.6-9 5.8-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.1-4-4.1-.5 0-.9 0-1.3.2.6-2.8 2.8-5.3 5.8-6.3z" />
  </svg>
)

// Price tiers in the store's minor units (paise): under 10,000, 10,000–25,000, 25,000–50,000 and 50,000 up.
const tiers = [
  { id: 'one', min: '', max: '1000000' },
  { id: 'two', min: '1000000', max: '2500000' },
  { id: 'three', min: '2500000', max: '5000000' },
  { id: 'four', min: '5000000', max: '' },
] as const

export const HomePage = () => {
  const { store, t } = useStorefront()
  const { categories, occasions, edits } = useCatalog()
  const newest = useProducts({ sort: 'newest', first: 8 })
  const instagram = store.social.find((s) => s.network.toLowerCase().includes('instagram'))
  const galleryHref = instagram?.url ?? '/collections/all/'
  useHead({ description: store.description ? undefined : t('home.seo.description') })

  const position = (n: number) => t('home.hero.position', { n, total: 3 })
  const tierWords = {
    one: { tier: t('home.prices.tierOne'), name: t('home.prices.oneName'), line: t('home.prices.oneLine') },
    two: { tier: t('home.prices.tierTwo'), name: t('home.prices.twoName'), line: t('home.prices.twoLine') },
    three: { tier: t('home.prices.tierThree'), name: t('home.prices.threeName'), line: t('home.prices.threeLine') },
    four: { tier: t('home.prices.tierFour'), name: t('home.prices.fourName'), line: t('home.prices.fourLine') },
  }
  const editAlt = {
    gold: t('home.edits.goldAlt'),
    diamond: t('home.edits.diamondAlt'),
    silver: t('home.edits.silverAlt'),
    latest: t('home.edits.latestAlt'),
    all: t('home.edits.allAlt'),
  }

  return (
    <Layout>
      {/* 3. Hero carousel */}
      <HeroCarousel
        labels={{ region: t('home.hero.region'), previous: t('home.hero.previous'), next: t('home.hero.next'), pause: t('home.hero.pause'), play: t('home.hero.play'), choose: t('home.hero.choose') }}
        slides={[
          {
            id: 'bridal',
            desktop: 'hero-bridal-desktop.webp',
            mobile: 'hero-bridal-mobile.webp',
            alt: t('home.hero.bridal.alt'),
            tone: 'light',
            eyebrow: t('home.hero.bridal.eyebrow'),
            title: t('home.hero.bridal.title'),
            accent: t('home.hero.bridal.accent'),
            body: t('home.hero.bridal.body'),
            action: t('home.hero.bridal.action'),
            href: occasions[0]?.href ?? '/collections/all/',
            position: position(1),
          },
          {
            id: 'daily',
            desktop: 'hero-dailywear-desktop.webp',
            mobile: 'hero-dailywear-mobile.webp',
            alt: t('home.hero.daily.alt'),
            tone: 'dark',
            eyebrow: t('home.hero.daily.eyebrow'),
            title: t('home.hero.daily.title'),
            accent: t('home.hero.daily.accent'),
            body: t('home.hero.daily.body'),
            action: t('home.hero.daily.action'),
            href: occasions[1]?.href ?? '/collections/all/',
            position: position(2),
          },
          {
            id: 'festive',
            desktop: 'hero-festive-desktop.webp',
            mobile: 'hero-festive-mobile.webp',
            alt: t('home.hero.festive.alt'),
            tone: 'light',
            eyebrow: t('home.hero.festive.eyebrow'),
            title: t('home.hero.festive.title'),
            accent: t('home.hero.festive.accent'),
            body: t('home.hero.festive.body'),
            action: t('home.hero.festive.action'),
            href: occasions[2]?.href ?? '/collections/all/',
            position: position(3),
          },
        ]}
      />

      {/* 4. Shop by category */}
      <section className={clsx(styles.section, motion.reveal)} aria-labelledby="home-categories">
        <div className={styles.head}>
          <p className={styles.eyebrow}>{t('home.categories.eyebrow')}</p>
          <h2 id="home-categories" className={styles.heading}>
            {t('home.categories.title')}
          </h2>
          <Ornament className={styles.ornament} />
        </div>
        <ul className={styles.categories}>
          {categories.map((c) => (
            <li key={c.id} className={styles.category}>
              <Link href={c.href} className={styles.categoryLink}>
                <span className={styles.categoryRing}>
                  <span className={styles.categoryPicture}>
                    <ThemeImage src={c.image} alt="" ratio={1} sizes="(min-width: 1024px) 160px, 128px" className={styles.zoomCategory} />
                  </span>
                </span>
                <span className={styles.categoryName}>{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Trust badges */}
      <section className={clsx(styles.trust, motion.reveal)} aria-label={t('home.trust.label')}>
        <ul className={styles.trustList}>
          <li className={styles.trustItem}>
            <BadgeCheck className={styles.trustIcon} strokeWidth={1.4} aria-hidden="true" />
            <p className={styles.trustTitle}>{t('home.trust.hallmark')}</p>
            <p className={styles.trustText}>{t('home.trust.hallmarkText')}</p>
          </li>
          <li className={styles.trustItem}>
            <Gem className={styles.trustIcon} strokeWidth={1.4} aria-hidden="true" />
            <p className={styles.trustTitle}>{t('home.trust.purity')}</p>
            <p className={styles.trustText}>{t('home.trust.purityText')}</p>
          </li>
          <li className={styles.trustItem}>
            <RotateCcw className={styles.trustIcon} strokeWidth={1.4} aria-hidden="true" />
            <p className={styles.trustTitle}>{t('home.trust.returns')}</p>
            <p className={styles.trustText}>{t('home.trust.returnsText')}</p>
          </li>
          <li className={styles.trustItem}>
            <ShieldCheck className={styles.trustIcon} strokeWidth={1.4} aria-hidden="true" />
            <p className={styles.trustTitle}>{t('home.trust.secure')}</p>
            <p className={styles.trustText}>{t('home.trust.secureText')}</p>
          </li>
          <li className={styles.trustItem}>
            <Truck className={styles.trustIcon} strokeWidth={1.4} aria-hidden="true" />
            <p className={styles.trustTitle}>{t('home.trust.shipping')}</p>
            <p className={styles.trustText}>{t('home.trust.shippingText')}</p>
          </li>
        </ul>
      </section>

      {/* 6. Featured collections by occasion */}
      <section className={clsx(styles.section, motion.reveal)}>
        <Heading eyebrow={t('home.occasions.eyebrow')} title={t('home.occasions.title')} accent={t('home.occasions.accent')} />
        <ul className={styles.occasions}>
          {occasions.map((o) => (
            <li key={o.id} className={styles.occasion}>
              <Link href={o.href} className={styles.occasionLink}>
                <span className={styles.occasionPicture}>
                  <ThemeImage src={o.image} alt="" ratio={0.75} sizes="(min-width: 1024px) 25vw, 50vw" className={styles.zoomOccasion} />
                </span>
                <span className={styles.occasionShade} />
                <span className={styles.occasionCopy}>
                  <span className={styles.occasionName}>{o.name}</span>
                  <span className={styles.occasionLine}>{o.line}</span>
                  <span className={styles.occasionMore}>
                    {t('home.occasions.explore')}
                    <Arrow />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* The store's own collection banners */}
      <section className={clsx(styles.section, motion.reveal)}>
        <Heading eyebrow={t('home.edits.eyebrow')} title={t('home.edits.title')} accent={t('home.edits.accent')} />
        <ul className={styles.edits}>
          {edits.map((e) => (
            <li key={e.id} className={styles.edit}>
              <Link href={e.href} className={styles.editLink}>
                <ThemeImage src={e.image} alt={editAlt[e.id as keyof typeof editAlt] ?? e.name} ratio={1} sizes="(min-width: 1024px) 20vw, 68vw" className={styles.zoomEdit} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. New arrivals */}
      {newest.status === 'loading' || newest.products.length ? (
        <section className={clsx(styles.section, motion.reveal)}>
          <Heading
            align="row"
            eyebrow={t('home.newest.eyebrow')}
            title={t('home.newest.title')}
            accent={t('home.newest.accent')}
            action={
              <Link href="/collections/all/?sort=newest" className={styles.textLink}>
                {t('home.newest.all')}
                <Arrow />
              </Link>
            }
          />
          <div className={styles.products}>{newest.status === 'loading' ? <GridPlaceholder label={t('shop.listing.loading')} count={4} wide /> : <ProductGrid products={newest.products} wide />}</div>
        </section>
      ) : null}

      {/* 8. Shop by price (its ranges are in rupees, so only for a store that sells in them) */}
      {store.currency === 'INR' ? (
        <section className={clsx(styles.section, motion.reveal)}>
          <Heading eyebrow={t('home.prices.eyebrow')} title={t('home.prices.title')} accent={t('home.prices.accent')} lead={t('home.prices.lead')} />
          <ul className={styles.prices}>
            {tiers.map((tier) => (
              <li key={tier.id}>
                <Link href={`/collections/all/?sort=price-low&price=${tier.min}-${tier.max}-${store.currency}`} className={styles.priceLink}>
                  <span className={styles.priceGlyph} aria-hidden="true" />
                  <span className={styles.priceTier}>{tierWords[tier.id].tier}</span>
                  <span>
                    <span className={styles.priceName}>{tierWords[tier.id].name}</span>
                    <br />
                    <span className={styles.priceLine}>{tierWords[tier.id].line}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 9. Brand story */}
      <section className={clsx(styles.story, motion.reveal)}>
        <div className={styles.storyPicture}>
          <span className={styles.storyOutline} aria-hidden="true" />
          <div className={styles.storyFrame}>
            <ThemeImage src="story-heritage-portrait.webp" alt={t('home.story.alt')} ratio={0.8} sizes="(min-width: 768px) 42vw, 100vw" className={styles.image} />
          </div>
        </div>
        <div className={styles.storyCopy}>
          <p className={styles.eyebrow}>{t('home.story.eyebrow')}</p>
          <h2 className={styles.storyTitle}>
            {t('home.story.title')} <em className={styles.em}>{t('home.story.accent')}</em>
          </h2>
          <Ornament className={styles.ornament} />
          <p className={styles.storyBody}>{t('home.story.body', { name: store.name })}</p>
          <ul className={styles.pillars}>
            <li className={styles.pillar}>
              <p className={styles.pillarTitle}>{t('home.story.pillarOne')}</p>
              <p className={styles.pillarText}>{t('home.story.pillarOneText')}</p>
            </li>
            <li className={styles.pillar}>
              <p className={styles.pillarTitle}>{t('home.story.pillarTwo')}</p>
              <p className={styles.pillarText}>{t('home.story.pillarTwoText')}</p>
            </li>
            <li className={styles.pillar}>
              <p className={styles.pillarTitle}>{t('home.story.pillarThree')}</p>
              <p className={styles.pillarText}>{t('home.story.pillarThreeText')}</p>
            </li>
          </ul>
          <Link href="/about/" className={styles.textLink}>
            {t('home.story.more')}
            <Arrow />
          </Link>
        </div>
      </section>

      {/* 10. Customer stories: an invitation until real customers' words (with their permission) replace it */}
      <section className={clsx(styles.section, motion.reveal)}>
        <div className={styles.storyInvite}>
          <QuoteMark />
          <p className={styles.eyebrow}>{t('home.stories.eyebrow')}</p>
          <h2 className={styles.heading}>
            {t('home.stories.title')} <em className={styles.em}>{t('home.stories.accent')}</em>
          </h2>
          <p className={styles.quote}>{t('home.stories.invite')}</p>
          <Link href="/contact/" className={styles.ghost}>
            {t('home.stories.action')}
          </Link>
        </div>
      </section>

      {/* 11. Gallery */}
      <section className={clsx(styles.section, motion.reveal)}>
        <Heading
          align="row"
          eyebrow={t('home.gallery.eyebrow')}
          title={t('home.gallery.title')}
          accent={t('home.gallery.accent')}
          action={
            <Link href={galleryHref} className={styles.textLink}>
              {instagram ? t('home.gallery.follow') : t('home.gallery.open')}
              <Arrow />
            </Link>
          }
        />
        <ul className={styles.gallery}>
          <li className={styles.galleryItem}>
            <Link href={galleryHref} className={styles.galleryLink}>
              <ThemeImage src="gallery-bridal-kundan.webp" alt={t('home.gallery.bridalKundan')} ratio={1} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" className={styles.zoomGallery} />
              <span className={styles.galleryShade} aria-hidden="true">
                <svg className={styles.galleryIcon} viewBox="0 0 24 24" focusable="false">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </Link>
          </li>
          <li className={styles.galleryItem}>
            <Link href={galleryHref} className={styles.galleryLink}>
              <ThemeImage src="gallery-stacked-rings.webp" alt={t('home.gallery.stackedRings')} ratio={1} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" className={styles.zoomGallery} />
              <span className={styles.galleryShade} aria-hidden="true">
                <svg className={styles.galleryIcon} viewBox="0 0 24 24" focusable="false">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </Link>
          </li>
          <li className={styles.galleryItem}>
            <Link href={galleryHref} className={styles.galleryLink}>
              <ThemeImage src="gallery-bridal-portrait.webp" alt={t('home.gallery.bridalPortrait')} ratio={1} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" className={styles.zoomGallery} />
              <span className={styles.galleryShade} aria-hidden="true">
                <svg className={styles.galleryIcon} viewBox="0 0 24 24" focusable="false">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </Link>
          </li>
          <li className={styles.galleryItem}>
            <Link href={galleryHref} className={styles.galleryLink}>
              <ThemeImage src="gallery-temple-bangles.webp" alt={t('home.gallery.templeBangles')} ratio={1} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" className={styles.zoomGallery} />
              <span className={styles.galleryShade} aria-hidden="true">
                <svg className={styles.galleryIcon} viewBox="0 0 24 24" focusable="false">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </Link>
          </li>
          <li className={styles.galleryItem}>
            <Link href={galleryHref} className={styles.galleryLink}>
              <ThemeImage src="gallery-rose-gold-earrings.webp" alt={t('home.gallery.roseEarrings')} ratio={1} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" className={styles.zoomGallery} />
              <span className={styles.galleryShade} aria-hidden="true">
                <svg className={styles.galleryIcon} viewBox="0 0 24 24" focusable="false">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </Link>
          </li>
          <li className={styles.galleryItem}>
            <Link href={galleryHref} className={styles.galleryLink}>
              <ThemeImage src="gallery-gold-chain-bracelets.webp" alt={t('home.gallery.chainBracelets')} ratio={1} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" className={styles.zoomGallery} />
              <span className={styles.galleryShade} aria-hidden="true">
                <svg className={styles.galleryIcon} viewBox="0 0 24 24" focusable="false">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* 12. Join the circle (accounts; core has no newsletter list to sign up to) */}
      <section className={clsx(styles.circle, motion.reveal)}>
        <div className={styles.circleCard}>
          <div className={styles.circleCopy}>
            <p className={styles.circleEyebrow}>{t('home.circle.eyebrow')}</p>
            <h2 className={styles.circleTitle}>{t('home.circle.title')}</h2>
            <p className={styles.circleBody}>{t('home.circle.body')}</p>
            <ul className={styles.circlePerks}>
              <li className={styles.circlePerk}>{t('home.circle.perkOne')}</li>
              <li className={styles.circlePerk}>{t('home.circle.perkTwo')}</li>
              <li className={styles.circlePerk}>{t('home.circle.perkThree')}</li>
            </ul>
            <div className={styles.circleActions}>
              <Link href="/register/" className={styles.circleButton}>
                {t('home.circle.action')}
              </Link>
              <Link href="/sign-in/" className={styles.circleGhost}>
                {t('home.circle.signIn')}
              </Link>
            </div>
          </div>
          <div className={styles.circlePicture}>
            <ThemeImage src="hero-hands.webp" alt={t('home.circle.alt')} ratio={0.75} sizes="(min-width: 768px) 45vw, 1px" className={styles.image} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
