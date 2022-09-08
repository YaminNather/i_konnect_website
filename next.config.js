/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "img.freepick.com"
    ]
  }
}

module.exports = nextConfig
