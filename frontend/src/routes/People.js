import React, { Component } from 'react'
import PeopleQuery from '../containers/PeopleQuery'
import NavBar from '../containers/NavBar'
import TitleBar from '../components/TitleBar';
import FilterBar from '../components/Filters'


class People extends Component { 

  render(){  
    const { category, searchString } = this.props.match.params
      return (
          <>
            <TitleBar/>
            <NavBar category={category}/>
            { searchString && <FilterBar searchString={searchString} category={category} /> }
            <PeopleQuery category={category} searchString={searchString}/>
          </>

      )
  }
}

export default People