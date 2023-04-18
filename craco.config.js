const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        alias: {
          "@components": "components",
          "@configs": "configs",
          "@graphql": "graphql",
          "@routes": "routes",
          "@services": "services",
        },
        source: "tsconfig",
        baseUrl: "src",
      },
    },
  ],
};
