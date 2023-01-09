const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: false,
  swcMinify: true,
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
