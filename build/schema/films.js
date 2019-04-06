"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n\n  type Film {\n    url: String!\n    title: String!\n    characters: [Person!]!\n    planets: [Planet!]!\n    species: [Species!]\n  }\n\n  type FilmsResponse {\n    count: Int!\n    next: String\n    previous: String\n    results: [Film!]!\n  }\n";
//# sourceMappingURL=films.js.map