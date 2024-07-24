import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types'

const localePrefix: LocalePrefix = 'as-needed'

const siteConfig = {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    localePrefix,
    title: 'Remco Stoeten\'s All-in-One Dashboard',
    description:
        'Manage your personal projects with Remco Stoeten\'s All-in-One Dashboard.',
    name: 'Remco Stoeten',
    github: 'https://github.com/remcostoeten',
    repository:
        'https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard'
}

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL
export const WHATSAPP_NAME = process.env.MY_NAME
export const WHATSAPP_NAME_FULL = process.env.MY_FULL_NAME
export default siteConfig
