# Next.js + GraphQL Documents
[![npm package](https://img.shields.io/npm/v/nextjs-plugin-graphql/latest.svg)](https://www.npmjs.com/package/nextjs-plugin-graphql)
[![License](https://img.shields.io/npm/l/nextjs-plugin-graphql.svg)](https://github.com/platypusrex/nextjs-plugin-graphql/blob/master/LICENSE)

[Next.js](https://github.com/zeit/next.js) plugin for preprocessing GraphQL Documents (operations, fragments and SDL)

### Installation

npm

```
npm install --save nextjs-plugin-graphql
```

or yarn

```
yarn add nextjs-plugin-graphql
```
### Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withGraphql = require('nextjs-plugin-graphql');

module.exports = withGraphql();
```

Optionally add Next.js configuration as a parameter

```js
// next.config.js
const withGraphql = require('nextjs-plugin-graphql');

module.exports = withGraphql({
  webpack(config, options) {
    return config;
  },
});
```

Or with [`next-compose-plugins`](https://github.com/cyrilwanner/next-compose-plugins) when composing multiple plugins

```js
// next.config.js
const withPlugins = require("next-compose-plugins");
const withGraphql = require("nextjs-plugin-graphql");

module.exports = withPlugins([
  withGraphql
  // your other plugins here
]);
```

And now in your components you can import `.graphql` | `.gql` files

```graphql
query Users {
  users {
    id
    name
  }
}
```

```js
import USERS_QUERY from './usersQuery.graphql';

export default () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Options

#### graphqlOptions

The plugins supports all available options of graphql-tools webpack loader.
Check out the [documentation](https://github.com/ardatan/graphql-tools/blob/3846041c14d0fe37d43b77156e2a0b85da8651ba/packages/webpack-loader/README.md) for the list of options.

Example with options:

```js
module.exports = withSvgr({
  graphqlOptions: {
    noDescription: true,
    esModule: true,
  },
});
```

### Typescript

Typescript is unable to interpret imported graphql files, so `nextjs-plugin-graphql` includes definitions
for graphql files (.graphql/.gql). Per the recommendations of the Next.js maintainers you
should not reference these types in the `next-env.d.ts` file. You can instead create a `typings`
directory inside your `src` directory. Then simple create a definitions file (ie: `index.d.ts`) and 
reference the definitions there. There shouldn't be any need to adjust your `tsconfig.json` 
for your project.

`src/typings/index.d.ts`
```js
/// <reference types="nextjs-plugin-graphql/types/graphql" />
```

### Contributors
This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LICENSE
MIT
