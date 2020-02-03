module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Electron-app-sample",
        copyright: "Copyright © 2020 ${author}",
        appId: "my-company.my-app",
        artifactName: "${name}_${os}-setup.${ext}",
        publish: [
          {
            provider: "generic",
            url:
              "https://tsdevstorage.blob.core.windows.net/temp-blob-container",
            channel: "beta"
          }
        ],
        win: {
          compression: "store"
        },
        mac: {
          compression: "store"
        }
      }
    }
  }
};
