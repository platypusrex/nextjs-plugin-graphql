import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const users = [
  { id: 1, name: 'John', greeting: 'Hello!' },
  { id: 2, name: 'Juan', greeting: 'Hola!' },
  { id: 3, name: 'João', greeting: 'Olá!' },
  { id: 4, name: 'Jean', greeting: 'Bonjour' },
];

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    greeting: String!
  }

  type Query {
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(server);
