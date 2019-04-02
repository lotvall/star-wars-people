import React, { Component } from 'react'
import PersonItem from './PersonItem'
import { Waypoint } from 'react-waypoint';
import LoadingItem from './LoadingItem'
import MiniSpinner from './spinner/MiniSpinner'


class PeopleList extends Component {

  state = {
    loadingMore: false
  }

  handleFetchMore = async () => {
    const {fetchMore, next } = this.props
    this.setState({loadingMore: true})
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
    this.setState({loadingMore: false})

  }

  render() {
    const { count, people, next, loading } = this.props;
    const { loadingMore  } = this.state;
    console.log('loading? peoplelist', loading, loadingMore)
    return (
      <div>
      {
            loading &&
            <div 
              style={{marginTop: '15px', marginBottom: '15px'}}>
              <MiniSpinner />
            </div>
          }
        {people.map((person, index) => (
          <React.Fragment key={person.url}>
          <PersonItem person={person}  />
          {
           (index  === people.length-8) &&
            !loadingMore &&
            !loading && 
            !!next &&
            <Waypoint onEnter={() => {
              this.handleFetchMore()}   
            }/>
          }
          </React.Fragment>
        ))}
        
          { 
            loadingMore &&
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