/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'], // Strapiの画像を使用する場合はここにドメインを追加
    },
  }
  
  module.exports = nextConfig