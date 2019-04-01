export default `

  type Person {
    url: String!
    name: String!
    homeworld: Planet!
    species: [Species!]
    films: [Film!]!
  }

  type PeopleResponse {
    count: Int!
    next: String
    previous: String
    results: [Person!]!
  }
  type Query {
    people(url:String!): PeopleResponse!
  }


`;