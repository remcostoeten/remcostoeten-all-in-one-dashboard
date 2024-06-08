/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import withBundleAnalyzer from "@next/bundle-analyzer";
import withNextIntl from "next-intl/plugin";

const withNextIntlConfig = withNextIntl("./src/core/libs/i18n.ts");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    eslint: {
      dirs: ["."],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      // Related to Pino error with RSC: https://github.com/orgs/vercel/discussions/3150
      serverComponentsExternalPackages: ["pino"],
    },
  }),
);
