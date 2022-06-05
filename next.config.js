/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'iso.500px.com',
      'www.redwolf.in',
    ],
  },
}

module.exports = nextConfig
