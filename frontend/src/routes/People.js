import React, { Component } from 'react'
import PeopleQuery from '../containers/PeopleQuery'
import NavBar from '../containers/NavigationContainer'

class People extends Component { 

  render(){  
    const { category, searchString } = this.props.match.params
      return (
          <>
            <NavBar category={category}/>
            <PeopleQuery category={category} searchString={searchString}/>
          </>

      )
  }
}

export default People