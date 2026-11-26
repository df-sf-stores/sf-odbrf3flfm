import type { ReactNode } from 'react'
import { ConsentBanner, ConsentSettingsButton, Link, PoweredBy, PreviewBanner, StoreLogo, ThemeImage, useCart, useMenu, useStorefront, useWishlist } from '@dripfunnel/storefront-core/theme'
import { clsx } from 'clsx'
import { useCatalog } from './catalog'
import { Drawer } from './interactive/Drawer'
import { DrawerSearch } from './interactive/DrawerSearch'
import { MegaMenu } from './interactive/MegaMenu'
import { NavItem } from './interactive/NavItem'
import { layout as styles } from './styles/layout'
import motion from '../styles/motion.module.css'

/** Footer bottom bar: true shows the "Cookie settings" button (and its divider), false hides both. */
const SHOW_COOKIE_SETTINGS: boolean = true

const Chevron =({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

/** A social network's mark, drawn simply in the footer's line style; unknown networks get a link glyph. */
const SocialIcon = ({ network }: { network: string }) => {
  const name = network.toLowerCase()
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {name.includes('instagram') ? (
        <>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" />
        </>
      ) : name.includes('facebook') ? (
        <path d="M14 8h2.5V4.5H14A4 4 0 0010 8.5V11H7.5v3.5H10V21h3.5v-6.5H16l.5-3.5h-3V8.8A.8.8 0 0114 8z" />
      ) : name.includes('youtube') ? (
        <>
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="M10 9.2v5.6l4.8-2.8z" />
        </>
      ) : name.includes('pinterest') ? (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M11 9.5l-2.2 10M9.6 13.2c3.8 1.2 6.2-1 6.2-3.4 0-2.1-1.8-3.6-3.9-3.6-2.6 0-4.1 1.8-4.1 3.7 0 .8.3 1.5.8 1.9" />
        </>
      ) : name.includes('whatsapp') ? (
        <path d="M4.5 19.5l1.2-3.6A8 8 0 1112 20a8 8 0 01-3.9-1zM9.2 8.5c0 3.2 3 6.3 6.3 6.3l1-1.4-1.9-1-1 .8a4.6 4.6 0 01-2.8-2.8l.8-1-1-1.9z" />
      ) : (
        <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" />
      )}
    </svg>
  )
}

/** One footer column: an accordion on phones, an open list from 1024px. */
const FooterColumn = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <details className={styles.columnDetails}>
      <summary className={styles.columnSummary}>
        {title}
        <Chevron className={styles.columnIcon} />
      </summary>
      <div className={styles.columnBody}>{children}</div>
    </details>
    <div className={styles.columnOpen}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </div>
  </div>
)

export const Layout = ({ children }: { children: ReactNode }) => {
  const { store, t, mode, poweredBy } = useStorefront()
  const menu = useMenu()
  const { count } = useCart()
  const { count: wished } = useWishlist()
  const { categories, occasions, edits } = useCatalog()

  const shopLinks = (
    <>
      <Link href="/collections/all/" className={styles.footerLink}>
        {t('common.footer.all')}
      </Link>
      <Link href="/collections/all/?sort=newest" className={styles.footerLink}>
        {t('common.nav.newIn')}
      </Link>
      {categories.slice(0, 5).map((c) => (
        <Link key={c.id} href={c.href} className={styles.footerLink}>
          {c.name}
        </Link>
      ))}
    </>
  )
  const helpLinks = (
    <>
      <Link href="/contact/" className={styles.footerLink}>
        {t('common.nav.contact')}
      </Link>
      <Link href="/account/orders/" className={styles.footerLink}>
        {t('common.footer.track')}
      </Link>
      <Link href="/policies/shipping/" className={styles.footerLink}>
        {t('common.footer.shipping')}
      </Link>
      <Link href="/policies/returns/" className={styles.footerLink}>
        {t('common.footer.returns')}
      </Link>
      <Link href="/about/" className={styles.footerLink}>
        {t('common.nav.about')}
      </Link>
    </>
  )
  const legalLinks = (
    <>
      <Link href="/policies/terms/" className={styles.footerLink}>
        {t('common.footer.terms')}
      </Link>
      <Link href="/policies/privacy/" className={styles.footerLink}>
        {t('common.footer.privacy')}
      </Link>
      <Link href="/policies/legal/" className={styles.footerLink}>
        {t('common.footer.notice')}
      </Link>
    </>
  )

  return (
    <div className={styles.shell}>
      {mode === 'live' ? null : <PreviewBanner t={t} className={styles.preview} />}

      <aside className={styles.announce} aria-label={t('common.announce.label')}>
        <ul className={styles.announceList}>
          <li className={styles.announceItem}>{t('common.announce.first')}</li>
          <li className={styles.announceItem}>{t('common.announce.second')}</li>
          <li className={styles.announceItem}>{t('common.announce.third')}</li>
        </ul>
      </aside>

      <header className={clsx(styles.header, motion.header)}>
        <div className={clsx(styles.bar, motion.bar)}>
          <Drawer openLabel={t('common.nav.menu')} closeLabel={t('common.nav.close')} title={t('common.nav.menu')}>
            <DrawerSearch />
            <details className={styles.accordion} open>
              <summary className={styles.accordionSummary}>
                {t('common.nav.categories')}
                <Chevron className={styles.accordionIcon} />
              </summary>
              <div className={styles.accordionBody}>
                {categories.map((c) => (
                  <Link key={c.id} href={c.href} className={styles.drawerLink}>
                    <span className={styles.megaThumb}>
                      <ThemeImage src={c.image} alt="" ratio={1} sizes="36px" className={styles.megaThumbImage} />
                    </span>
                    {c.name}
                  </Link>
                ))}
              </div>
            </details>
            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                {t('common.nav.occasions')}
                <Chevron className={styles.accordionIcon} />
              </summary>
              <div className={styles.accordionBody}>
                {occasions.map((o) => (
                  <Link key={o.id} href={o.href} className={styles.drawerLink}>
                    {o.name}
                  </Link>
                ))}
              </div>
            </details>
            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                {t('common.nav.edits')}
                <Chevron className={styles.accordionIcon} />
              </summary>
              <div className={styles.accordionBody}>
                {edits.map((e) => (
                  <Link key={e.id} href={e.href} className={styles.drawerLink}>
                    {e.name}
                  </Link>
                ))}
              </div>
            </details>
            {menu.items.map((item) =>
              item.children.length ? (
                <details key={item.id} className={styles.accordion}>
                  <summary className={styles.accordionSummary}>
                    {item.label}
                    <Chevron className={styles.accordionIcon} />
                  </summary>
                  <div className={styles.accordionBody}>
                    <Link href={item.href} className={styles.drawerLink}>
                      {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.id} href={child.href} className={styles.drawerLink}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link key={item.id} href={item.href} className={styles.drawerMain}>
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/collections/all/?sort=newest" className={styles.drawerMain}>
              {t('common.nav.newIn')}
            </Link>
            <Link href="/about/" className={styles.drawerMain}>
              {t('common.nav.about')}
            </Link>
            <Link href="/contact/" className={styles.drawerMain}>
              {t('common.nav.contact')}
            </Link>
            <Link href="/account/" className={styles.drawerMain}>
              {t('common.tools.account')}
            </Link>
            <Link href="/account/wishlist/" className={styles.drawerMain}>
              {t('common.tools.wishlist')}
            </Link>
          </Drawer>

          <Link href="/" className={styles.brand}>
            {store.logo ? (
              <span className={motion.logo}>
                <StoreLogo className={styles.logo} />
              </span>
            ) : (
              <span className={styles.wordmark}>
                <span className={styles.wordmarkName}>{store.name}</span>
                <span className={styles.wordmarkTag}>{t('common.brand.tag')}</span>
              </span>
            )}
          </Link>

          <nav className={styles.nav} aria-label={t('common.nav.label')}>
            <MegaMenu label={t('common.nav.shop')} href="/collections/all/" toggleLabel={t('common.nav.submenu', { item: t('common.nav.shop') })} id="mega-shop">
              <div className={styles.megaInner}>
                <div className={styles.megaColumn}>
                  <p className={styles.megaHeading}>{t('common.nav.categories')}</p>
                  {categories.map((c) => (
                    <Link key={c.id} href={c.href} className={styles.megaLink}>
                      <span className={styles.megaThumb}>
                        <ThemeImage src={c.image} alt="" ratio={1} sizes="36px" className={styles.megaThumbImage} />
                      </span>
                      {c.name}
                    </Link>
                  ))}
                </div>
                <div className={styles.megaColumn}>
                  <p className={styles.megaHeading}>{t('common.nav.occasions')}</p>
                  {occasions.map((o) => (
                    <Link key={o.id} href={o.href} className={styles.megaLink}>
                      {o.name}
                    </Link>
                  ))}
                </div>
                <div className={styles.megaColumn}>
                  <p className={styles.megaHeading}>{t('common.nav.edits')}</p>
                  {edits.map((e) => (
                    <Link key={e.id} href={e.href} className={styles.megaLink}>
                      {e.name}
                    </Link>
                  ))}
                </div>
                <div className={styles.megaFeatures}>
                  <Link href={occasions[0]?.href ?? '/collections/all/'} className={styles.megaFeature}>
                    <span className={styles.megaFeaturePicture}>
                      <ThemeImage src="occasion-wedding.webp" alt={t('common.nav.featureBridalAlt')} ratio={0.75} sizes="240px" className={styles.megaFeatureImage} />
                    </span>
                    <span className={styles.megaFeatureName}>{t('common.nav.featureBridal')}</span>
                  </Link>
                  <Link href="/collections/all/?sort=newest" className={styles.megaFeature}>
                    <span className={styles.megaFeaturePicture}>
                      <ThemeImage src="occasion-daily-wear.webp" alt={t('common.nav.featureDailyAlt')} ratio={0.75} sizes="240px" className={styles.megaFeatureImage} />
                    </span>
                    <span className={styles.megaFeatureName}>{t('common.nav.featureDaily')}</span>
                  </Link>
                </div>
              </div>
            </MegaMenu>
            {menu.items.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
            <Link href="/collections/all/?sort=newest" className={styles.navLink}>
              {t('common.nav.newIn')}
            </Link>
            <Link href="/about/" className={styles.navLink}>
              {t('common.nav.about')}
            </Link>
            <Link href="/contact/" className={styles.navLink}>
              {t('common.nav.contact')}
            </Link>
          </nav>

          <div className={styles.tools}>
            <Link href="/search/" className={styles.toolWide}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4.5 4.5" />
              </svg>
              <span className={styles.hidden}>{t('common.tools.search')}</span>
            </Link>
            <Link href="/account/" className={styles.toolWide}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="8.5" r="3.8" />
                <path d="M4.5 20c1.2-3.6 4-5.4 7.5-5.4s6.3 1.8 7.5 5.4" />
              </svg>
              <span className={styles.hidden}>{t('common.tools.account')}</span>
            </Link>
            <Link href="/account/wishlist/" className={styles.tool}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z" />
              </svg>
              <span className={styles.hidden}>{wished > 0 ? t('common.tools.wishlistCount', { count: wished }) : t('common.tools.wishlist')}</span>
              {wished > 0 ? (
                <span className={styles.count} aria-hidden="true">
                  {wished}
                </span>
              ) : null}
            </Link>
            <Link href="/cart/" className={styles.tool}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M5.5 8h13l-1 12h-11z" />
                <path d="M9 8V6.5a3 3 0 016 0V8" />
              </svg>
              <span className={styles.hidden}>{count > 0 ? t('common.tools.cartCount', { count }) : t('common.tools.cart')}</span>
              {count > 0 ? (
                <span className={styles.count} aria-hidden="true">
                  {count}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </header>

      <main id="main" className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            {store.logo ? <StoreLogo className={styles.footerLogo} /> : <p className={styles.footerName}>{store.name}</p>}
            <p className={styles.note}>{store.tagline ?? t('common.footer.note')}</p>
            {store.contactEmail ? <p className={styles.contact}>{store.contactEmail}</p> : null}
            {store.contactPhone ? <p className={styles.contact}>{store.contactPhone}</p> : null}
          </div>

          <div className={styles.columns}>
            <FooterColumn title={t('common.footer.shop')}>{shopLinks}</FooterColumn>
            <FooterColumn title={t('common.footer.help')}>{helpLinks}</FooterColumn>
            <FooterColumn title={t('common.footer.legal')}>{legalLinks}</FooterColumn>
          </div>

          <div className={styles.footerNews}>
            <h2 className={styles.footerNewsTitle}>{t('common.footer.joinTitle')}</h2>
            <p className={styles.note}>{t('common.footer.joinBody')}</p>
            <Link href="/register/" className={styles.footerButton}>
              {t('common.footer.joinAction')}
            </Link>
            {store.social.length ? (
              <div className={styles.social}>
                {store.social.map((s) => (
                  <Link key={s.network} href={s.url} className={styles.socialLink}>
                    <SocialIcon network={s.network} />
                    <span className={styles.hidden}>{s.network}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.payments}>
          <p className={styles.payLabel}>{t('common.footer.pay')}</p>
          <ul className={styles.payList} aria-label={t('common.footer.pay')}>
            <li className={styles.payBadge}>
              <ThemeImage src="pay-upi.png" alt={t('common.footer.payUpi')} ratio={250 / 89} sizes="80px" className={styles.payLogo} />
            </li>
            <li className={styles.payBadge}>
              <ThemeImage src="pay-visa.png" alt={t('common.footer.payVisa')} ratio={250 / 82} sizes="80px" className={styles.payLogo} />
            </li>
            <li className={styles.payBadge}>
              <ThemeImage src="pay-mastercard.png" alt={t('common.footer.payMastercard')} ratio={250 / 195} sizes="80px" className={styles.payLogo} />
            </li>
            <li className={styles.payBadge}>
              <ThemeImage src="pay-rupay.png" alt={t('common.footer.payRupay')} ratio={250 / 66} sizes="80px" className={styles.payLogo} />
            </li>
          </ul>
        </div>

        {/* Footer bottom bar: inside <footer>, so it shares the footer's background (bg-footer-bg) with no seam. */}
        <div className={styles.baseInner}>
          <p className={styles.copyright}>{t('common.footer.copyright', { name: store.name })}</p>
          <div className={styles.baseEnd}>
            {SHOW_COOKIE_SETTINGS ? (
              <>
                <ConsentSettingsButton t={t} className={styles.cookies} />
                <span className={styles.divider} aria-hidden="true" />
              </>
            ) : null}
            <div className={styles.poweredGroup}>
              {/* The platform requires its sealed "Powered by" line whenever the store's rule shows one. */}
              {poweredBy ? <PoweredBy brand={poweredBy} t={t} className={styles.powered} /> : <span className={styles.powered}>{t('common.footer.poweredBy')}</span>}
              <Link href={t('common.footer.poweredUrl')} className={styles.brandLink}>
                <ThemeImage src="dripfunnel-white-logo.png" alt={t('common.footer.poweredLogo')} ratio={2077 / 369} sizes="104px" className={styles.brandLogo} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ConsentBanner t={t} className={styles.consent} />
    </div>
  )
}
