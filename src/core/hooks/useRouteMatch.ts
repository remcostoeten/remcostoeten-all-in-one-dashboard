'use client'

import { usePathname } from 'next/navigation';

export function useRouteMatch(patterns) {
    const pathname = usePathname();
    const localePattern = /^\/([a-z]{2})\//; // Assuming locale is always two lowercase letters

    // Extract locale from pathname
    const localeMatch = pathname.match(localePattern);
    const locale = localeMatch ? localeMatch[1] : '';

    // Remove locale from pathname
    const pathWithoutLocale = pathname.replace(localePattern, '/');

    // Check if any pattern matches the pathname without locale
    const isMatch = Array.isArray(patterns)
        ? patterns.some(pattern => new RegExp(`^${pattern}$`).test(pathWithoutLocale))
        : new RegExp(`^${patterns}$`).test(pathWithoutLocale);

    return isMatch;
}

/**
 * Checks if the current pathname matches any of the provided patterns.
 *
 * @param {string | string[]} patterns - The patterns to match against the pathname.
 * @return {boolean} Returns true if any of the patterns match the pathname, false otherwise.
 */
