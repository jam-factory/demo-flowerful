/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-itm1-1.cdninstagram.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
