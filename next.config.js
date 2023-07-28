/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'intrstlr.nyc3.cdn.digitaloceanspaces.com',
      },
    ],
  },
}

module.exports = nextConfig
