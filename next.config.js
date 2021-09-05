/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
};
