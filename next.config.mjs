/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';
import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

const withNextIntlConfig = withNextIntl('./src/core/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
    eslint: {
        dirs: ['.']
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        serverComponentsExternalPackages: ['pino']
    },
    images: {
        domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'cdn.builder.io', 'cdn.dribbble.com', 'dribbble.com'],
    },
};

export default withHydrationOverlay({
  appRootSelector: "main",
})(bundleAnalyzer(withNextIntlConfig(nextConfig)));