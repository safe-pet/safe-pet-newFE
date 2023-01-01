/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_KAKAO_KEY: process.env.NEXT_PUBLIC_KAKAO_KEY,
  },
};

module.exports = nextConfig;
