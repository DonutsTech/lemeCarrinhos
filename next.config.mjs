import path from 'path';
import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/style')],
  },
  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    return config;
  },
};

export default withVideos(nextConfig, {
  assetPrefix: '/assets/video/',
});
