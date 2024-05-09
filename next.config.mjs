/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://gvm-ui.vercel.app",
      "img.freepik.com",
      "icons.veryicon.com",
      "images.unsplash.com",
    ],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
