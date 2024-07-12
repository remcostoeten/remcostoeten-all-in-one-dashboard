import { AppConfig } from "./AppConfig"

export const getI18nPath = (url: string, locale: string) => {
    if (locale === AppConfig.defaultLocale) {
        return url
    }

    return `/${locale}${url}`
}
