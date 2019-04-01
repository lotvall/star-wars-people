export default `

  type Species {
    url: String!
    name: String!
    homeworld: Planet
    people: [Person!]!
    films: [Film!]!
  }

  type SpeciesResponse {
    count: Int!
    next: String
    previous: String
    results: [Species!]!
  }
  type Query {
    species(url: String!): SpeciesResponse!
  }
`;