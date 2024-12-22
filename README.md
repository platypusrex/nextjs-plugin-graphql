# Next.js + GraphQL Documents
[![npm package](https://img.shields.io/npm/v/nextjs-plugin-graphql/latest.svg)](https://www.npmjs.com/package/nextjs-plugin-graphql)
[![License](https://img.shields.io/npm/l/nextjs-plugin-graphql.svg)](https://github.com/platypusrex/nextjs-plugin-graphql/blob/master/LICENSE)

[Next.js](https://github.com/zeit/next.js) plugin for preprocessing GraphQL Documents (operations, fragments and SDL)

### Installation

npm

```
npm add nextjs-plugin-graphql
```

pnpm

```
pnpm add nextjs-plugin-graphql
```

yarn

```
yarn add nextjs-plugin-graphql
```
### Usage

Create a `next.config.js` in your project

```ts
// next.config.ts
import type { NextConfig } from 'next';
import withGraphql from 'nextjs-plugin-graphql';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withGraphql(nextConfig);
```

Optionally add Next.js configuration as a parameter

```ts
// next.config.ts
import type { NextConfig } from 'next';
import withGraphql from'nextjs-plugin-graphql';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withGraphql({
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
});
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

export default async function Page() {
  const data = await gqlClient.request(USERS_QUERY);
  
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

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  
};

export default withGraphql({
  ...nextConfig,
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
```ts
/// <reference types="nextjs-plugin-graphql/types/graphql" />
```

### Contributors
This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LICENSE
MIT
