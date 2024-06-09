import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types'

const localePrefix: LocalePrefix = 'as-needed'

export const AppConfig = {
    name: 'Remcostoeten all in one',
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    localePrefix
}
