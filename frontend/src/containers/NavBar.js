import React, { Component } from 'react'
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

class NavBar extends Component {
  state = {
    activeItem: null,
  }

  componentWillMount() {
    const { category } = this.props.match.params
    this.setState({
      activeItem: category
    })
  }

  handleCategoryClick = (e, item) => {
    e.preventDefault()
    this.setState({
      activeItem: item.name
    })

    this.props.history.push(`/${item.name}`)
  }

  render() {
    const { activeItem } = this.state
    const { category, classes } = this.props
    const placeholder = category !== 'people' ? (category === 'planets' ? `Search by homeworld` : `Search by species`) : `Search by name`

    return ( 
      <Segment vertical className={classes.segment}>
        <MenuItems activeItem={activeItem} onClick={this.handleCategoryClick} />
        <SearchInput placeholder ={placeholder} category={category} history={this.props.history}/>
      </Segment>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default  (withRouter(withStyles(styles)(NavBar)))