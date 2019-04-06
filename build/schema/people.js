"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n\n  type Person {\n    url: String!\n    name: String!\n    homeworld: Planet!\n    species: [Species!]\n    films: [Film!]!\n  }\n\n  type PeopleResponse {\n    count: Int!\n    next: String\n    previous: String\n    results: [Person!]!\n  }\n  type Query {\n    people(url:String!): PeopleResponse!\n  }\n\n\n";
//# sourceMappingURL=people.js.map