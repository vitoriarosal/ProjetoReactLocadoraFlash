/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Cadastro-RPG' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Cadastro-RPG/' : '',
  
  images: {
    domains: ['images.vexels.com'], 
  },
}

module.exports = nextConfig;
