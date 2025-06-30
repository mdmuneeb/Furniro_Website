// next.config.js (example using next-safe)
const nextSafe = require('next-safe');

module.exports = nextSafe({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", 'cool-moray-7.accounts.dev', 'scdn.clerk.com', 'clerk-telemetry.com'],
      fontSrc: ["'self'", 'fonts.gstatic.com', 'cool-moray-7.accounts.dev'],
      scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'scdn.clerk.com'],
      connectSrc: ["'self'", 'clerk-telemetry.com', 'scdn.clerk.com'],
      imgSrc: ["'self'", 'data:', 'cool-moray-7.accounts.dev'],
      styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
    }
  }
});
