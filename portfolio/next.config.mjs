/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: isDev ? undefined : "https://ats1999.github.io",
};

export default nextConfig;
