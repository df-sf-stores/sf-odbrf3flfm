import { useHead, useStorefront } from '@dripfunnel/storefront-core/theme'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Layout } from '../components/Layout'
import { Ornament } from '../components/Ornament'
import { about as styles } from '../components/styles/about'

export const ContactPage = () => {
  const { store, t } = useStorefront()
  useHead({ title: t('pages.contact.seoTitle', { name: store.name }), description: t('pages.contact.seoDescription') })
  const place = [store.address?.street, store.address?.city, store.address?.region, store.address?.postal].filter(Boolean).join(', ')
  return (
    <Layout>
      <section className={styles.contact}>
        <div className={styles.contactCopy}>
          <p className={styles.eyebrow}>{t('pages.contact.eyebrow')}</p>
          <h1 className={styles.title}>{t('pages.contact.title')}</h1>
          <Ornament className={styles.ornament} />
          <p className={styles.lead}>{t('pages.contact.lead')}</p>
          <h2 className={styles.helpTitle}>{t('pages.contact.helpTitle')}</h2>
          <ul className={styles.helpList}>
            <li className={styles.careItem}>{t('pages.contact.helpOne')}</li>
            <li className={styles.careItem}>{t('pages.contact.helpTwo')}</li>
            <li className={styles.careItem}>{t('pages.contact.helpThree')}</li>
            <li className={styles.careItem}>{t('pages.contact.helpFour')}</li>
          </ul>
        </div>
        <dl className={styles.cards}>
          {store.contactEmail ? (
            <div className={styles.card}>
              <Mail className={styles.cardIcon} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <dt className={styles.cardTerm}>{t('pages.contact.email')}</dt>
                <dd className={styles.cardValue}>{store.contactEmail}</dd>
              </div>
            </div>
          ) : null}
          {store.contactPhone ? (
            <div className={styles.card}>
              <Phone className={styles.cardIcon} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <dt className={styles.cardTerm}>{t('pages.contact.phone')}</dt>
                <dd className={styles.cardValue}>{store.contactPhone}</dd>
              </div>
            </div>
          ) : null}
          {place ? (
            <div className={styles.card}>
              <MapPin className={styles.cardIcon} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <dt className={styles.cardTerm}>{t('pages.contact.visit')}</dt>
                <dd className={styles.cardValue}>{place}</dd>
              </div>
            </div>
          ) : null}
        </dl>
      </section>
    </Layout>
  )
}
