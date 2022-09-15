/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      "img.freepick.com"
    ]
  },
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
