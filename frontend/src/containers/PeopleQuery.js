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
  }
}
`


const PeopleRoute = ({category, searchString}) => <Query query={PEOPLE_QUERY} variables={{url: `https://swapi.co/api/${searchString ? category : 'people'}/?${searchString}`}}>
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
            return(
                <> 
                    <PeopleList
                        people={data.people.results} 
                        fetchMore={fetchMore}
                        next={data.people.next}
                        count={data.people.count}
                        loading={loading}
                    />
                </>
            )
        }
    }
}
</Query>

export default PeopleRoute