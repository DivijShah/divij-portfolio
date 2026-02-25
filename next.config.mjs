/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // Avoid stale/corrupt webpack pack cache warnings in local dev.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
