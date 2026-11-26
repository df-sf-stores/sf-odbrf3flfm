import { useStorefront } from '@dripfunnel/storefront-core/theme'

/*
 * The store's ways in (categories, occasions, edits), shared by the header's mega menu, the drawer and the home page.
 * Each link searches the catalogue for now; once the matching collections exist in the admin, point `href` at them
 * (for example '/collections/rings/') and every menu and tile follows.
 */

export type CategoryImage =
  | 'category-rings.webp'
  | 'category-earrings.webp'
  | 'category-necklaces.webp'
  | 'category-bangles.webp'
  | 'category-chains.webp'
  | 'category-pendants.webp'
  | 'category-mangalsutra.webp'

export type OccasionImage = 'occasion-wedding.webp' | 'occasion-daily-wear.webp' | 'occasion-festive.webp' | 'occasion-gifting.webp'

export type EditImage = 'edit-gold.webp' | 'edit-silver.webp' | 'edit-diamond.webp' | 'edit-latest.webp' | 'edit-shop-all.webp'

export type Way<Image extends string> = { id: string; name: string; image: Image; href: string }

export const useCatalog = () => {
  const { t } = useStorefront()

  const categories: Way<CategoryImage>[] = [
    { id: 'rings', name: t('common.categories.rings'), image: 'category-rings.webp', href: '/search/?q=ring' },
    { id: 'earrings', name: t('common.categories.earrings'), image: 'category-earrings.webp', href: '/search/?q=earring' },
    { id: 'necklaces', name: t('common.categories.necklaces'), image: 'category-necklaces.webp', href: '/search/?q=necklace' },
    { id: 'bangles', name: t('common.categories.bangles'), image: 'category-bangles.webp', href: '/search/?q=bangle' },
    { id: 'chains', name: t('common.categories.chains'), image: 'category-chains.webp', href: '/search/?q=chain' },
    { id: 'pendants', name: t('common.categories.pendants'), image: 'category-pendants.webp', href: '/search/?q=pendant' },
    { id: 'mangalsutra', name: t('common.categories.mangalsutra'), image: 'category-mangalsutra.webp', href: '/search/?q=mangalsutra' },
  ]

  const occasions: (Way<OccasionImage> & { line: string })[] = [
    { id: 'wedding', name: t('common.occasions.wedding'), line: t('common.occasions.weddingLine'), image: 'occasion-wedding.webp', href: '/search/?q=bridal' },
    { id: 'daily', name: t('common.occasions.daily'), line: t('common.occasions.dailyLine'), image: 'occasion-daily-wear.webp', href: '/search/?q=daily' },
    { id: 'festive', name: t('common.occasions.festive'), line: t('common.occasions.festiveLine'), image: 'occasion-festive.webp', href: '/search/?q=festive' },
    { id: 'gifting', name: t('common.occasions.gifting'), line: t('common.occasions.giftingLine'), image: 'occasion-gifting.webp', href: '/search/?q=gift' },
  ]

  const edits: Way<EditImage>[] = [
    { id: 'gold', name: t('common.edits.gold'), image: 'edit-gold.webp', href: '/search/?q=gold' },
    { id: 'diamond', name: t('common.edits.diamond'), image: 'edit-diamond.webp', href: '/search/?q=diamond' },
    { id: 'silver', name: t('common.edits.silver'), image: 'edit-silver.webp', href: '/search/?q=silver' },
    { id: 'latest', name: t('common.edits.latest'), image: 'edit-latest.webp', href: '/collections/all/?sort=newest' },
    { id: 'all', name: t('common.edits.all'), image: 'edit-shop-all.webp', href: '/collections/all/' },
  ]

  return { categories, occasions, edits }
}
