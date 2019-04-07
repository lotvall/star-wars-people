import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
import cors from 'cors'

import 'babel-polyfill';



const app = express();
app.use(cors())
const graphQLpath = '/graphql';

const types = fileLoader(path.join(__dirname, './schema'));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))
const typeDefs = mergeTypes(types, { all: true });

const server = new ApolloServer({ typeDefs, resolvers });

app.use(graphQLpath, express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build/public'));
  app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

server.applyMiddleware({ app, graphQLpath });

const PORT = process.env.PORT || 4000

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)