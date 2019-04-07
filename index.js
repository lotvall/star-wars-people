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

app.use(graphQLpath, express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('./build/public/index.html'))
//   //  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// } )

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build/public'));
  app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, 'build/public', 'index.html'));
  });
}



// app.use('/static', express.static('./build/public/static'));
// app.use('facivon', express.static('./build/public/favicon.ico'));



server.applyMiddleware({ app, graphQLpath });

const PORT = process.env.PORT || 4000

app.listen({ port: PORT }, () =>
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