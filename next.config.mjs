/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import withBundleAnalyzer from '@next/bundle-analyzer'
import withNextIntl from 'next-intl/plugin'
// Import withHydrationOverlay
const { withHydrationOverlay } = require("@builder.io/react-hydration-overlay/next");

const withNextIntlConfig = withNextIntl('./src/core/libs/i18n.ts')

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
})

// Define nextConfig with your existing configurations and additional ones
const nextConfig = {
    eslint: {
        dirs: ['.']
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        // Related to Pino error with RSC: https://github.com/orgs/vercel/discussions/3150
        serverComponentsExternalPackages: ['pino']
    }
};

// Wrap your configuration with withHydrationOverlay
module.exports = withHydrationOverlay({
    // Optional: appRootSelector configuration
    appRootSelector: "main",
})(bundleAnalyzer(withNextIntlConfig(nextConfig)));