import { getBaseUrl } from '@/core/utils/get-base-url'
import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${getBaseUrl()}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7
        }
        // Add more URLs here
    ]
}
