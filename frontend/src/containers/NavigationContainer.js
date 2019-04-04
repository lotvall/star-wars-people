import React from 'react'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import NavBar from '../components/NavBar'

const PEOPLE_NAME_QUERY = gql `
query ($url: String!) {
  people(url: $url){
    count
    next
    previous
    results {
      name
      url
      
    }
    __typename
  }
}
`
const PLANETS_NAME_QUERY = gql`
query ($url: String!) {
  planets(url: $url){
    count
    next
    results{
      name
      url
    }
  }
}
`

const SPECIES_NAME_QUERY = gql`
query ($url: String!) {
  species(url: $url){
    count
    next
    results{
      name
      url
    }
  }
}
`

const NavigationContainer = ({category,  data: { fetchMore, loading, errors, people, planets, species}}) => {
  if(loading )  {
    return <NavBar data={[]}/>
  } else if (category === "people"){
    return <NavBar data={people} category={category} loading={loading} fetchMore={fetchMore}/>
  } else if (category === "planets") {
    console.log(planets)
    return <NavBar data={planets} category={category} loading={loading} fetchMore={fetchMore}/>
  } else if (category === "species") {
    return <NavBar data={species} category={category} loading={loading} fetchMore={fetchMore}/>
  } 
}

export default compose(
  graphql(PLANETS_NAME_QUERY, {
    options: (props) => ({ variables:{url: `https://swapi.co/api/planets`} }),
    skip: ({ category }) => category !== 'planets',
  }),
  graphql(PEOPLE_NAME_QUERY, {
    options: (props) => ({ variables:{url: `https://swapi.co/api/people`} }),
    skip: ({ category }) => category !== 'people',
  }),
  graphql(SPECIES_NAME_QUERY, {
    options: (props) => ({ variables:{url: `https://swapi.co/api/species`} }),
    skip: ({ category }) => category !== 'species',
  }),
)(NavigationContainer);