import React, { Component } from 'react'
import PersonItem from './PersonItem'
import { Waypoint } from 'react-waypoint';
import LoadingItem from './LoadingItem'
import MiniSpinner from './spinner/MiniSpinner'
import NoResults from './NoResults';


class PeopleList extends Component {

  handleFetchMore = async () => {
    const {fetchMore, next } = this.props
    await fetchMore({
      variables: {
        url: next
      },
      updateQuery: (prev, { fetchMoreResult}) => {
          if (!fetchMoreResult) {
              return prev;
          }
          
          return {
              ...prev,
              people: {
                  next: fetchMoreResult.people.next,
                  results: [...prev.people.results, ...fetchMoreResult.people.results],
                  __typename: "PeopleResponse"
              }
          }
      }
    })

  }

  render() {
    const { people, next, loading, category, searchString } = this.props;
    return (
      <div>
      {
        loading &&
        <div style={{marginTop: '15px', marginBottom: '15px'}}>
          <MiniSpinner />
        </div>
          }
        {
          // Render a list of people
          people.map((person, index) => (
          <React.Fragment key={person.url}>
            <PersonItem person={person}  />
            {
              (index  === people.length-8) && !loading && !!next && 
              <Waypoint onEnter={() => this.handleFetchMore() } />
            }
          </React.Fragment>
        ))}

          {
            // Render if list is empty
            people.length === 0 && !!searchString && <NoResults searchString={searchString} category={category}/>
          }
          
      </div>
    )
  }
}

export default PeopleList