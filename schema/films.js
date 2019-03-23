export default `

  type Film {
    url: String!
    title: String!
    characters: [Person!]!
    planets: [Planet!]!
    species: [Species!]
  }

  type FilmsResponse {
    count: Int!
    next: String
    previous: String
    results: [Film!]!
  }
`;