import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { AppConfig } from '@/core/utils/app-config'

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
    locales: AppConfig.locales,
    localePrefix: AppConfig.localePrefix
})
