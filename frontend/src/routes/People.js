import React from 'react'
import PeopleQuery from '../containers/PeopleQuery'
import NavBar from '../containers/NavBar'
import TitleBar from '../components/TitleBar';
import FilterBar from '../components/Filters'


const People = (props) => {  
  const { category, searchString } = props.match.params
  return (
    <>
      <TitleBar/>
      <NavBar category={category}/>
      { searchString && <FilterBar searchString={searchString} category={category} /> }
      <PeopleQuery category={category} searchString={searchString}/>
    </>
  )
}

export default People