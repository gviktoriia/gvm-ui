/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.freepik.com", "icons.veryicon.com", "images.unsplash.com"],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
