/* eslint-disable prettier/prettier */
module.exports = {
  webpack: (config) => {
    config.watch = true;
    config.watchOptions = {
      poll: true,
      ignored: /node_modules/,
    };

    return config;
  },
};
