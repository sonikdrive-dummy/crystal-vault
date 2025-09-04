/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;