/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  compiler: {
    removeConsole: true, // Change to True upon build
  },
};

module.exports = withContentlayer({ ...nextConfig });
