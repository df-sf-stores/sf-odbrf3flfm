'use client'

import { clsx } from 'clsx'
import { useStorefront, useWishlist } from '@dripfunnel/storefront-core/theme'
import { shop as styles } from '../styles/shop'

const heart = 'M12 20.2l-1.3-1.2C6 14.8 3 12.1 3 8.8 3 6.1 5.1 4 7.8 4c1.5 0 3 .7 4.2 1.9C13.2 4.7 14.7 4 16.2 4 18.9 4 21 6.1 21 8.8c0 3.3-3 6-7.7 10.2z'

/** The heart over a product card's picture; signed out, core asks the shopper to sign in first. */
export const CardHeart = ({ productId, name }: { productId: string; name: string }) => {
  const { t } = useStorefront()
  const wishlist = useWishlist()
  const on = wishlist.has(productId)
  return (
    <button
      type="button"
      className={clsx(styles.heart, on && styles.heartOn)}
      aria-pressed={on}
      aria-label={t('shop.wishlist.heart', { name })}
      disabled={wishlist.busy || wishlist.status === 'loading'}
      onClick={() => void wishlist.toggle(productId, null)}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <path d={heart} fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
