import React, { Component } from 'react'
import PersonItem from './PersonItem'
import { Waypoint } from 'react-waypoint';
import LoadingItem from './LoadingItem'
import MiniSpinner from './spinner/MiniSpinner'


class PeopleList extends Component {

  state = {
    loading: false
  }

  handleFetchMore = async () => {
    const {fetchMore, next } = this.props
    this.setState({loading: true})
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
    this.setState({loading: false})

  }

  render() {
    const { count, people, next,  } = this.props;
    const { loading  } = this.state;
    console.log('loading? peoplelist', loading)
    return (
      <div>
        {people.map((person, index) => (
          <React.Fragment key={person.url}>
          <PersonItem person={person}  />
          {
           (index  === people.length-8) &&
            !loading &&
            !!next &&
            <Waypoint onEnter={() => {
              this.handleFetchMore()}   
            }/>
          }
          </React.Fragment>
        ))}
        
          { 
            loading &&
            next &&
            <>
            <LoadingItem count={count} length={people.length}/>
            <div 
              style={{marginTop: '15px', marginBottom: '15px'}}>
              <MiniSpinner />
            </div>
            </>
          }
      </div>
    )
  }
}

export default PeopleList