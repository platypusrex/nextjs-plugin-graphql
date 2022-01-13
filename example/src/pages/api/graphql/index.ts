import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer, gql } from 'apollo-server-micro';

const users = [
  { id: 1, name: 'John', greeting: 'Hello!' },
  { id: 2, name: 'Juan' , greeting: 'Hola!'},
  { id: 3, name: 'João', greeting: 'Olá!' },
  { id: 4, name: 'Jean', greeting: 'Bonjour' },
]

const typeDefs = gql`
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

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = server.start();

const graphql = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  await startServer;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export default graphql;
