"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n\n  type Species {\n    url: String!\n    name: String!\n    homeworld: Planet\n    people: [Person!]!\n    films: [Film!]!\n  }\n\n  type SpeciesResponse {\n    count: Int!\n    next: String\n    previous: String\n    results: [Species!]!\n  }\n  type Query {\n    species(url: String!): SpeciesResponse!\n  }\n";
//# sourceMappingURL=species.js.map