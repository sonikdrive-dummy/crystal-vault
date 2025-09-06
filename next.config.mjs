/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // Configure for Replit environment - allow all hosts for proxy
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [];
  },
  // Allow all hosts for Replit proxy
  allowedHosts: ['*'],
  // Disable host check for development
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;