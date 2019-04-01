export default `

  type Planet {
    url: String!
    name: String!
    residents: [Person!]
    films: [Film!]!
  }

  type PlanetsResponse {
    count: Int!
    next: String
    previous: String
    results: [Planet!]!
  }
  
  type Query {
    planets(url: String!): PlanetsResponse!
  }
`;