import withGraphQL from 'nextjs-plugin-graphql';

export default withGraphQL({
  reactStrictMode: true,
  graphqlOptions: {
    esModule: true,
  },
});
