import React from 'react'
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  menuStyle: {
    margin: '0 0',
    marginRight: '0px',
    marginLeft: '0px',
    paddingLeft: '40px',
    paddingRight: '11px',
    "&:first-child": {
      marginBottom: 0,
      marginLeft: 5,
    },
    
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      margin:'0px 0px',
      marginLeft: 0,
      "&:first-child": {
        marginBottom: 5,
        marginLeft: 0,
      },
    },
  },
})

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