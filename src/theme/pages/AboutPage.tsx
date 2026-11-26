import { Link, ThemeImage, useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { BadgeCheck, Gem, HandHeart } from 'lucide-react'
import { clsx } from 'clsx'
import { Layout } from '../components/Layout'
import { Ornament } from '../components/Ornament'
import { about as styles } from '../components/styles/about'
import motion from '../styles/motion.module.css'

export const AboutPage = () => {
  const { store, t } = useStorefront()
  useHead({ title: t('pages.about.seoTitle', { name: store.name }), description: store.description ?? t('pages.about.seoDescription') })
  return (
    <Layout>
      <section className={styles.intro}>
        <div className={styles.introCopy}>
          <p className={styles.eyebrow}>{t('pages.about.eyebrow')}</p>
          <h1 className={styles.title}>
            {t('pages.about.title')} <em className={styles.em}>{t('pages.about.accent')}</em>
          </h1>
          <Ornament className={styles.ornament} />
          <p className={styles.lead}>{t('pages.about.first')}</p>
          <p className={styles.body}>{t('pages.about.second')}</p>
        </div>
        <div className={styles.introPicture}>
          <ThemeImage src="hero-choker.webp" alt={t('pages.about.alt')} ratio={0.75} sizes="(min-width: 768px) 45vw, 100vw" className={styles.image} />
        </div>
      </section>

      <section className={clsx(styles.values, motion.reveal)} aria-labelledby="about-values">
        <h2 id="about-values" className={styles.valuesTitle}>
          {t('pages.about.valuesTitle')}
        </h2>
        <ul className={styles.valueList}>
          <li className={styles.value}>
            <BadgeCheck className={styles.valueIcon} strokeWidth={1.3} aria-hidden="true" />
            <h3 className={styles.valueName}>{t('pages.about.valueOne')}</h3>
            <p className={styles.valueText}>{t('pages.about.valueOneText')}</p>
          </li>
          <li className={styles.value}>
            <HandHeart className={styles.valueIcon} strokeWidth={1.3} aria-hidden="true" />
            <h3 className={styles.valueName}>{t('pages.about.valueTwo')}</h3>
            <p className={styles.valueText}>{t('pages.about.valueTwoText')}</p>
          </li>
          <li className={styles.value}>
            <Gem className={styles.valueIcon} strokeWidth={1.3} aria-hidden="true" />
            <h3 className={styles.valueName}>{t('pages.about.valueThree')}</h3>
            <p className={styles.valueText}>{t('pages.about.valueThreeText')}</p>
          </li>
        </ul>
      </section>

      <section className={clsx(styles.care, motion.reveal)}>
        <div className={styles.carePicture}>
          <ThemeImage src="story-chain.webp" alt={t('pages.about.careAlt')} ratio={0.8} sizes="(min-width: 768px) 40vw, 100vw" className={styles.image} />
        </div>
        <div className={styles.careCopy}>
          <p className={styles.eyebrow}>{t('pages.about.careEyebrow')}</p>
          <h2 className={styles.careTitle}>{t('pages.about.careTitle')}</h2>
          <ul className={styles.careList}>
            <li className={styles.careItem}>{t('pages.about.careOne')}</li>
            <li className={styles.careItem}>{t('pages.about.careTwo')}</li>
            <li className={styles.careItem}>{t('pages.about.careThree')}</li>
            <li className={styles.careItem}>{t('pages.about.careFour')}</li>
          </ul>
          <div className={styles.actions}>
            <Link href="/collections/all/" className={styles.button}>
              {t('pages.about.shop')}
            </Link>
            <Link href="/contact/" className={styles.ghost}>
              {t('pages.about.contact')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
