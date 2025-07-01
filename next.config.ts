/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Match all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self' cool-moray-7.accounts.dev scdn.clerk.com clerk-telemetry.com;
              font-src 'self' fonts.gstatic.com cool-moray-7.accounts.dev;
              script-src 'self' 'unsafe-inline' cdn.jsdelivr.net scdn.clerk.com;
              connect-src 'self' clerk-telemetry.com scdn.clerk.com;
              img-src 'self' data: cool-moray-7.accounts.dev;
              style-src 'self' 'unsafe-inline' fonts.googleapis.com;
            `.replace(/\n/g, '').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
