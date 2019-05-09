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

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
var graphQLpath = '/graphql';

var types = (0, _mergeGraphqlSchemas.fileLoader)(_path2.default.join(__dirname, './schema'));
var resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)((0, _mergeGraphqlSchemas.fileLoader)(_path2.default.join(__dirname, './resolvers')));
var typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(types, { all: true });

var server = new _apolloServerExpress.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

app.use(graphQLpath, _express2.default.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(_express2.default.static('build/public'));
  app.get('/*', function (request, response) {
    response.sendFile(_path2.default.join(__dirname, 'public', 'index.html'));
  });
}

server.applyMiddleware({ app: app, graphQLpath: graphQLpath });

var PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, function () {
  return console.log('\uD83D\uDE80 Server ready at http://localhost:4000' + server.graphqlPath);
});
//# sourceMappingURL=index.js.map