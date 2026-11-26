'use client'

import { SearchField, navigate, useStorefront } from '@dripfunnel/storefront-core/theme'
import { clsx } from 'clsx'
import { layout } from '../styles/layout'
import { shop } from '../styles/shop'

// The characters that would end or change a query value; the browser encodes the rest of the words itself.
const queryValue = (words: string) => words.trim().replace(/%/g, '%25').replace(/&/g, '%26').replace(/#/g, '%23').replace(/\+/g, '%2B').replace(/\s+/g, '+')

/** The search box at the top of the mobile drawer: it hands the words to the search page. */
export const DrawerSearch = () => {
  const { t } = useStorefront()
  return (
    <SearchField
      label={t('shop.search.label')}
      placeholder={t('shop.search.placeholder')}
      button={t('shop.search.button')}
      value=""
      onSearch={(words) => {
        if (words.trim()) navigate(`/search/?q=${queryValue(words)}`)
      }}
      suggest={3}
      className={clsx(shop.search, layout.drawerSearch)}
    />
  )
}
