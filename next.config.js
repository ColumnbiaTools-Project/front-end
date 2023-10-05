/** @type {import('next').NextConfig} */

require("dotenv").config();
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "firebasestorage.googleapis.com"],
  },
  env: {
    COLUMBIA_ADMIN_SECRET_KEY: process.env.COLUMBIA_ADMIN_SECRET_KEY,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_TOSS_CLIENT_KEY: process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY,
    TOSS_PAYMENTS_SECRET_KEY: process.env.TOSS_PAYMENTS_SECRET_KEY,
  },
  experimental: {
    serverComponentsExternalPackages: ["firebase-admin"],
    middleware: true,
  },
  output: "export",
};

module.exports = nextConfig;
