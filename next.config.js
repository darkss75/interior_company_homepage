/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/interior_company_homepage',
  assetPrefix: '/interior_company_homepage/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
