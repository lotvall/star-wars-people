import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Avatar from './LetterAvatar';
import MiniSpinner from '../components/spinner/MiniSpinner'


const styles = theme => ({
  listrow: {
      display:'flex',
      alignItems: 'center',
      borderBottom: '1px solid #eeeef0',
      height: 60,
      margin: 0,
      padding:0,
      textDecoration: 'none',
      '&:hover': {
          backgroundColor: '#fafafb',
          borderColor: '#eeeef0',
          textDecoration: 'none',
          
      }
  },
  typography: {
      flex: '1 1 0%',
      fontSize: '1rem',
      marginLeft: '10px',
      marginRight: '10px',
      maxWidth: '654px' // calc(1440-32-80-20)/2
  },
  

})

const LoadingItem = ({classes}) => {

    const renderLoadingItem = (i) => (
        <li className={classes.listrow} key={`loading-item-${i}`}>
            <Avatar></Avatar>
            <Typography className={classes.typography} variant="body1"></Typography>
            <Typography className={classes.typography} variant="body1"></Typography>
        </li>
    )
    

  return (
    <>
        {renderLoadingItem(1)}
        {renderLoadingItem(2)}
        {renderLoadingItem(3)}
        {renderLoadingItem(4)}
        {renderLoadingItem(5)}
        {renderLoadingItem(6)}
        {renderLoadingItem(7)}
        {renderLoadingItem(8)}
        {renderLoadingItem(9)}
        {renderLoadingItem(10)}
        <div style={{marginTop: '15px', marginBottom: '15px'}}>
            <MiniSpinner />
        </div>
    </>
    
  )
        
}

LoadingItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingItem)