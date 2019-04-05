import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '60px',
        '&:hover': {
          backgroundColor: '#fafafb',
          borderColor: '#eeeef0',
          textDecoration: 'none',
          
      }
    },
    typography: {
      fontSize: '1rem',
      paddingLeft: '40px',
      maxWidth: '654px' // calc(1440-32-80-20)/2
  },
});

const NoResults = ({classes, searchString, category}) => {
  let message;
  if(category==='people') {
    message = `There are no people with ${searchString} as their name`
  } else if (category==='planets') {
    message = `There are no people with ${searchString} as their homeworld`
  } else if (category==='species') {
    message = `There are no people with ${searchString} as their species`
  }
  return (
    <div className={classes.root} elevation={0}>
      <Typography className={classes.typography} variant="body1">{message}</Typography>
    </div>
  );
}


NoResults.propTypes = {
  classes: PropTypes.object.isRequired,
  searchString: PropTypes.string, 
  category: PropTypes.string.isRequired,
};

export default withStyles(styles)(NoResults)