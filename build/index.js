'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import express from 'express'
// import { ApolloServer, gql } from 'apollo-server-express'
// import cors from 'cors'
// import http from 'http'
// import { ApolloServer } from 'apollo-server'

// Apollo Server Express w middleware

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
var graphQLpath = '/graphql';

var types = (0, _mergeGraphqlSchemas.fileLoader)(_path2.default.join(__dirname, './schema'));
var resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)((0, _mergeGraphqlSchemas.fileLoader)(_path2.default.join(__dirname, './resolvers')));
var typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(types, { all: true });

var server = new _apolloServerExpress.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

app.use(graphQLpath, _express2.default.static('public'));

app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, 'public', '../public/build/index.html'));
});

server.applyMiddleware({ app: app, graphQLpath: graphQLpath });

var PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, function () {
  return console.log('\uD83D\uDE80 Server ready at http://localhost:4000' + server.graphqlPath);
});

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
//# sourceMappingURL=index.js.map