/** @type {import('next').NextConfig} */
const withGraphql = require('nextjs-plugin-graphql');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withGraphql(nextConfig);
