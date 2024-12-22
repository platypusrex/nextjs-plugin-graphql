import { createSchema, createYoga } from 'graphql-yoga';

const users = [
  { id: 1, name: 'John', greeting: 'Hello!' },
  { id: 2, name: 'Juan', greeting: 'Hola!' },
  { id: 3, name: 'João', greeting: 'Olá!' },
  { id: 4, name: 'Jean', greeting: 'Bonjour' },
];

const schema = createSchema({
  typeDefs: `#graphql
    type User {
      id: ID!
      name: String!
      greeting: String!
    }
  
    type Query {
      users: [User!]!
    }
  `,
  resolvers: {
    Query: {
      users: () => users
    },
  },
});

const { handleRequest } = createYoga<Record<string, any>>({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

export const GET = (req: Request) => handleRequest(req, {});
export const POST = (req: Request) => handleRequest(req, {});
export const OPTIONS = (req: Request) => handleRequest(req, {});
