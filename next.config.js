module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/auth/web3/:path*",
          destination: "http://localhost:8080/api/:path*", // Proxy to Backend
        },
      ];
    },
  };
  return nextConfig;
};
