/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any experimental features that might cause deployment issues
  swcMinify: true,
};

module.exports = nextConfig; 