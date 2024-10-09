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
                destination: 'https://api.eeveegoldsavings.com:3000/:path*' // Proxy to Backend
            }
        ]
    }
};

export default nextConfig;
