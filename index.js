// import express from 'express'
// import { ApolloServer, gql } from 'apollo-server-express'
// import cors from 'cors'
// import http from 'http'
// import { ApolloServer } from 'apollo-server'

// Apollo Server Express w middleware

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

//Mount a jwt or other authentication middleware that is run before the GraphQL execution
app.use(graphQLpath, express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
} )

server.applyMiddleware({ app, graphQLpath });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)








// Apollo Server

// import path from 'path';
// import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

// const types = fileLoader(path.join(__dirname, './schema'));
// const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))
// const typeDefs = mergeTypes(types, { all: true });

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// const PORT = process.env.PORT || 4000

// server.listen({port: PORT}).then((server) => {
//   console.log(`🚀  Server ready at ${server.url}`);
// });