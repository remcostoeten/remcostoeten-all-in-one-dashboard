/* eslint-disable import/no-extraneous-dependencies, import/extensions */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withNextIntl = require('next-intl/plugin');

const withNextIntlConfig = withNextIntl('./src/core/libs/i18n.ts');

const nextConfig = {
reactStrictMode: false,
typescript: {
  ignoreBuildErrors: false,
},
eslint: {
  ignoreDuringBuilds: true,
},
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.builder.io',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'http',
      hostname: 'b.io',
      port: '',
      pathname: '/**'
    }
  ],
},
};

module.exports = withBundleAnalyzer(
  withNextIntlConfig(nextConfig)
);