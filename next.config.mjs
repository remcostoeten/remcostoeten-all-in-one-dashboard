/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import withBundleAnalyzer from '@next/bundle-analyzer'
import withNextIntl from 'next-intl/plugin'
import { withContentlayer } from 'next-contentlayer' // Step 1: Import withContentlayer

const withNextIntlConfig = withNextIntl('./src/core/libs/i18n.ts')

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
    eslint: {
        dirs: ['.']
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        serverComponentsExternalPackages: ['pino']
    }
}

export default withContentlayer(bundleAnalyzer(withNextIntlConfig(nextConfig)))