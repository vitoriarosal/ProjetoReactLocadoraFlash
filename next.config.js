/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Cadastro-RPG' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Cadastro-RPG/' : '',
  
  // Adicionando suporte para imagens externas
  images: {
    domains: ['images.vexels.com'], // Domínio de onde a imagem será carregada
  },
}

module.exports = nextConfig;
