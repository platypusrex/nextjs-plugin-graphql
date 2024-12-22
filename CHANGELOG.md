# Changelog

## 1.2.0

### Minor Changes

- a376e54: This release adds support for both esm and commonjs for newer versions of Next. Esbuild and necessary build step was added to ensure cjs/esm output. Typescript support also added via jsdocs. The plugin now includes the typings for .graphql/.gql file extentions, and also include the necessary declaration files to add types to the plugin.

### Patch Changes

- cc7b728: Updates the example next.js application to v15. Includes pages to app dir migration. Removes apollo client and server. Updates all dependencies.

## 1.1.3

### Patch Changes

- b1cd0ed: Dep updates and workflow fixes.

  fix: release workflow

- a338027: Updates dev dependencies and exmaple application dependencies.
- 5164a3c: Removing yarn.lock

## 1.1.2

### Patch Changes

- 32aaf01: chore(deps): bump semver from 5.7.1 to 5.7.2

## 1.1.1

### Patch Changes

- 64d0bda: Small documentation corrections.
- d1d272d: Updating packages core (`@graphql-tools/webpack-loader`) and dev dependencies. Removes `standard-version` and using `changesets` for release management automation moving forward.

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.0](https://github.com/platypusrex/nextjs-plugin-graphql/compare/@release/1.0.0...@release/1.1.0) (2023-05-14)

## 1.0.0 (2022-01-13)
