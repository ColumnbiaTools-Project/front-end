/** @type {import('next').NextConfig} */

require("dotenv").config();
const nextConfig = {
  images:{
    domains: ['res.cloudinary.com','firebasestorage.googleapis.com']
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_TOSS_CLIENT_KEY:process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY,
    TOSS_PAYMENTS_SECRET_KEY: process.env.TOSS_PAYMENTS_SECRET_KEY,
  },
  experimental: {
    serverComponentsExternalPackages: ["firebase-admin"],
    middleware: true,
  },
};

module.exports = nextConfig;
