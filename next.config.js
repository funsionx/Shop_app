/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**'
      },
    ],
  },
}

module.exports = nextConfig
// https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg