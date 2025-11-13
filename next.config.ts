import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    return config
  },
  images: {
    domains: [
      'cdn.brandfetch.io',
      'cdn.jsdelivr.net',
      'cdn.worldvectorlogo.com',
      'cdn-icons-png.flaticon.com',
      'images.unsplash.com',
      'www.svgrepo.com',
    ],
  },
  reactCompiler: true,
  experimental: {
    // turbo: false // більше не підтримується
  },
}

export default nextConfig
