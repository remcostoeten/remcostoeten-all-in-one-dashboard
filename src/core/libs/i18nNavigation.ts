import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { AppConfig } from '@/core/data/AppConfig'

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
    locales: AppConfig.locales,
    localePrefix: AppConfig.localePrefix
})
