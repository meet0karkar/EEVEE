/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'eeveegoldsavings.com'],
    unoptimized: true,
  },
  output: 'export',
  
};

export default nextConfig;
