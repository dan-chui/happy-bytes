/** @type {import('next').NextConfig} */

const { withContentlayer } = import('next-contentlayer');

const nextConfig = {};

module.exports = withContentlayer({ ...nextConfig });
