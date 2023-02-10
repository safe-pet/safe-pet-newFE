/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true, // className do not match error 방지
  },
  env: {
    NEXT_PUBLIC_KAKAO_KEY: process.env.NEXT_PUBLIC_KAKAO_KEY,
    NEXT_PUBLIC_NAVER_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_CALLBACK_URL: process.env.NEXT_PUBLIC_CALLBACK_URL,
    NEXT_PUBLIC_REDIRECT_URL: process.env.NEXT_PUBLIC_REDIRECT_URL,
  },
};

module.exports = nextConfig;
