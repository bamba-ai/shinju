/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/shinju",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
