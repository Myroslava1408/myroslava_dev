import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf|png|jpg|jpeg|svg)$/,
      type: 'asset/resource',
    })
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
  experimental: {},
}

export default nextConfig
