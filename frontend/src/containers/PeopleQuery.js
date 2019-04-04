import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PeopleList from '../components/PeopleList'
import LoadingItem from '../components/LoadingItem'
import MiniSpinner from '../components/spinner/MiniSpinner'

const PEOPLE_QUERY = gql `
query ($url: String!) {
  people(url: $url){
    count
    next
    previous
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
    __typename
  }
}
`


const PeopleRoute = ({category, searchString}) => {

  console.log(searchString)

  console.log(`https://swapi.co/api/${searchString ? `${category}/?search=${searchString}` : 'people'}`)

  return (
    <Query query={PEOPLE_QUERY} fetchPolicy="network-only" variables={
      {
        url: `https://swapi.co/api/${searchString ? `${category}/?search=${searchString}` : 'people'}`
      }
    }>
  {
      ({fetchMore, loading, error, data}) => {


          if(loading && !data.people) {
            return (
              <>
                <LoadingItem/>
                <div 
                  style={{marginTop: '15px', marginBottom: '15px'}}>
                  <MiniSpinner />
                </div>
              </>
            )
          
          }
          if(error) console.log('there was an error', error)
          if(data) {
            console.log('logging data', data)
              return(
                  <> 
                      <PeopleList
                          people={data.people.results} 
                          fetchMore={fetchMore}
                          next={data.people.next}
                          count={data.people.count}
                          loading={loading}
                          searchString={searchString}
                      />
                  </>
              )
          }
      }
  }
  </Query>)
}

export default PeopleRoute