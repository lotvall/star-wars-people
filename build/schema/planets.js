"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n\n  type Planet {\n    url: String!\n    name: String!\n    residents: [Person!]\n    films: [Film!]!\n  }\n\n  type PlanetsResponse {\n    count: Int!\n    next: String\n    previous: String\n    results: [Planet!]!\n  }\n  \n  type Query {\n    planets(url: String!): PlanetsResponse!\n  }\n";
//# sourceMappingURL=planets.js.map