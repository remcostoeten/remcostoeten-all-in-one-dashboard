import type { MetadataRoute } from 'next'
import { getBaseUrl } from '@/core/utils/Helpers'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${getBaseUrl()}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7
        },
        {
            url: `${getBaseUrl()}/about`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6
        },
        {
            url: `${getBaseUrl()}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6
        },
        {
            url: `${getBaseUrl()}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
        // Add more URLs as needed
    ]
}