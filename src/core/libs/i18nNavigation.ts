import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import siteConfig from '../data/site-config'

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
    locales: siteConfig.locales,
    localePrefix: siteConfig.localePrefix
})
