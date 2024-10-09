/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'eeveegoldsavings.com'],
    unoptimized: true,
  },
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://13.126.98.206:3000/:path*' // Proxy to Backend
      }
    ]
  }
};

module.exports = nextConfig;
