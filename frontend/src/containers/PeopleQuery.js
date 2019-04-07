import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PeopleList from '../components/PeopleList'
import LoadingItem from '../components/LoadingItem'

const PEOPLE_QUERY = gql `
query ($url: String!) {
  people(url: $url){
    next
    results {
      name
      url
      homeworld {
        name
      }
      species {
        name
      }
      films {
        title
      }
    }
  }
}
`


const PeopleRoute = ({category, searchString}) => {

  const url = searchString ? 
    `https://swapi.co/api/${category}/?search=${searchString}` : 
    'https://swapi.co/api/people/'

  return (
    <Query query={PEOPLE_QUERY} variables={{url}} notifyOnNetworkStatusChange={true} >
      {
        ({fetchMore, loading, error, data, refetch}) => {

          if(error) {
            console.log('there was an error', error)
          }
          
          if(loading && !data.people) {
            return <LoadingItem/>
          }
          if(data) {
              return (
                  <> 
                      <PeopleList
                          people={data.people.results} 
                          fetchMore={fetchMore}
                          next={data.people.next}
                          loading={loading}
                          searchString={searchString}
                          category={category}
                      />
                      {
                        // Lazy Loading
                        loading && data.people.next &&
                        <>
                        <LoadingItem />
                        
                        </>
                      }
                  </>
              )
          }
      }
  }
  </Query>)
}

export default PeopleRoute