/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import withBundleAnalyzer from '@next/bundle-analyzer'
import withNextIntl from 'next-intl/plugin'

const withNextIntlConfig = withNextIntl('./src/core/libs/i18n.ts')

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
    images: {
        domains: ['api.microlink.io', 'images.unsplash.com']
    },
    eslint: {
        dirs: ['.']
    },
    poweredByHeader: false,
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
}

export default withNextIntlConfig(bundleAnalyzer(nextConfig))
