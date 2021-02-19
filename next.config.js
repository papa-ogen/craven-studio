const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: isDev ?  '' : '/craven-studio',
  assetPrefix: isDev ? '' : '/craven-studio',
}

