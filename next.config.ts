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
              default-src 'self';
              script-src 'self' 'unsafe-inline' cdn.jsdelivr.net scdn.clerk.com *.clerk.accounts.dev;
              connect-src 'self' clerk-telemetry.com scdn.clerk.com *.clerk.accounts.dev *.clerk.com https://3cjlrb5t.apicdn.sanity.io;
              font-src 'self' fonts.gstatic.com;
              img-src 'self' data: https:;
              style-src 'self' 'unsafe-inline' fonts.googleapis.com;
            `.replace(/\n/g, '').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
