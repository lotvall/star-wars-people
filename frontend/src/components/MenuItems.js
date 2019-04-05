import React from 'react'
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  menuStyle: {
    margin: '0 0',
    "&:first-child": {
      marginBottom: 0
    }
  },
}

const MenuItems = ({classes, activeItem, onClick})=> {
  return (
    <Menu secondary className={classes.menuStyle} >
    <Menu.Item name = 'people'
    active = {
      activeItem === 'people'
    }
    onClick = {
      onClick
    }
    /> 
    <Menu.Item name = 'planets'
    active = {
      activeItem === 'planets'
    }
    onClick = {
      onClick
    }

    />

    <Menu.Item name = 'species'
    active = {
      activeItem === 'species'
    }
    onClick = {
      onClick
    }
    />

    </Menu>
  )
}

MenuItems.propTypes = {
  classes: PropTypes.object.isRequired,
  activeItem: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired, 
};

export default withStyles(styles)(MenuItems)