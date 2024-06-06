import type { MetadataRoute } from 'next/dist/lib/metadata/types/metadata-interface';

import { getBaseUrl } from '@/core/utils/Helpers';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
