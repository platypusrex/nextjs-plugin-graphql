import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3001/api/graphql',
  documents: './src/gql/**/*.graphql',
  generates: {
    './src/types/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
