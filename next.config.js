/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'localhost',
      'via.placeholder.com',
    ],
  },
}

module.exports = nextConfig
