import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import MenuItems from '../components/MenuItems'
import SearchInput from '../components/SearchInput';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  segment:{
    display: 'flex',
    padding: '14px',
    border: '0',
    borderBottom: '1px solid #eeeef0',
  }
}

const NavBar = (props) => {
  const { category, classes } = props
  const [ activeItem, setActiveItem] = useState(category)

  const handleCategoryClick = (e, item) => {
    e.preventDefault()
    setActiveItem(item.name)
    props.history.push(`/${item.name}`)
  }
    const placeholder = category !== 'people' ? (category === 'planets' ? `Search by homeworld` : `Search by species`) : `Search by name`

    return ( 
      <Segment vertical className={classes.segment} >
        <MenuItems activeItem={activeItem} onClick={handleCategoryClick} />
        <SearchInput placeholder ={placeholder} category={category} history={props.history}/>
      </Segment>
    )
  }

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,

};

export default  withStyles(styles)(
  withRouter(NavBar)
)