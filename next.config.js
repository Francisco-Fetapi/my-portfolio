const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  ...nextTranslate(),
};

module.exports = nextConfig;
