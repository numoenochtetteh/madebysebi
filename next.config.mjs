/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),

  turbopack: {
    root: process.cwd(),
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
