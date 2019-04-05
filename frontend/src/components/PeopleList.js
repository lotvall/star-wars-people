import React from 'react'
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import PersonItem from './PersonItem'
import MiniSpinner from './spinner/MiniSpinner'
import NoResults from './NoResults';


const PeopleList = (props) => {

  const { people, next, loading, category, searchString } = props;

  const handleFetchMore = async () => {
    const {fetchMore, next } = props
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
    return (
      <div>
        {
          // render a spinner on top if loading
          loading &&
          <div style={{marginTop: '15px', marginBottom: '15px'}}>
            <MiniSpinner />
          </div>
        }
        {
          // Render a list of people
          people.map((person, index) => (
          <React.Fragment key={person.url}>
            <PersonItem person={person} />
            {
              (index  === people.length-8) && !loading && !!next && 
              <Waypoint onEnter={() => handleFetchMore() } />
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

PeopleList.propTypes = {
  people: PropTypes.array.isRequired, 
  next: PropTypes.string, 
  loading: PropTypes.bool.isRequired, 
  fetchMore: PropTypes.func.isRequired,
  searchString: PropTypes.string, 
  category: PropTypes.string.isRequired,
};

export default PeopleList