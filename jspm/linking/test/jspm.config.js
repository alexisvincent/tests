SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "linking-test/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.19"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "linking-test": {
      "main": "linking-test.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
