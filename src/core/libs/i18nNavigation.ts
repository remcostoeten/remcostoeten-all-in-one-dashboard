import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { AppConfig } from '@/core/utils/AppConfig'

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
    locales: AppConfig.locales,
    localePrefix: AppConfig.localePrefix
})
