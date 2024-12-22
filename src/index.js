/** @typedef {import('next').NextConfig} NextConfig */

/**
 * Options to pass to the `@graphql-tools/webpack-loader`
 *
 * @typedef {Object} GraphQLConfigOptions
 * @property {boolean} [noDescription] - If true, excludes descriptions from the GraphQL documents.
 * @property {boolean} [noEmptyNodes] - If true, excludes empty nodes from the GraphQL documents.
 * @property {boolean} [noLoc] - If true, excludes location data from the GraphQL documents.
 * @property {boolean} [replaceKinds] - If true, replaces GraphQL kinds with custom kinds.
 * @property {boolean} [esModule] - If true, outputs the result as an ES module.
 * @property {boolean} [importHelpers] - If true, includes import helpers in the output.
 */

/** @typedef {NextConfig & { graphqlOptions?: GraphQLConfigOptions }} Config */

/**
 * A Next.js plugin to preprocess GraphQL Documents.
 *
 * @param {Config} nextConfig - The existing Next.js configuration object.
 * @returns {NextConfig} - The modified Next.js configuration object.
 */
export default function (nextConfig) {
  const graphqlNextConfig = {
    ...nextConfig,
    webpack(config, options) {
      if (!options?.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      const { dir } = options;
      const { graphqlOptions } = nextConfig;

      config.module.rules.push({
        test: /\.(graphql|graphqls|gql)$/,
        include: [dir],
        exclude: /node_modules/,
        loader: '@graphql-tools/webpack-loader',
        options: graphqlOptions ?? {},
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
  delete graphqlNextConfig.graphqlOptions;
  return graphqlNextConfig;
}
