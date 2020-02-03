const config = require("./buildconfig.json");

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        ...config
      }
    }
  }
};
