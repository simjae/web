/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
