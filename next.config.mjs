/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  basePath: '/Travel-web',
  assetPrefix: '/Travel-web',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
