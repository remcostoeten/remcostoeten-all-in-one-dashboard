import siteConfig from '../data/site-config'

export const getI18nPath = (url: string, locale: string) => {
    if (locale === siteConfig.defaultLocale) {
        return url
    }

    return `/${locale}${url}`
}
