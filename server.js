// import express from 'express'
// import { ApolloServer, gql } from 'apollo-server-express'
// import cors from 'cors'
// import http from 'http'
import { ApolloServer } from 'apollo-server'
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const types = fileLoader(path.join(__dirname, './schema'));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))
const typeDefs = mergeTypes(types, { all: true });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({port: 4000}).then((server) => {
  console.log(`🚀  Server ready at ${server.url}`);
});