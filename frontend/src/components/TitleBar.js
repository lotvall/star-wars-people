import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '40px',
        [theme.breakpoints.down('md')]: {
          alignItems: 'center',
          height: '60px',
        }
    },
});

const TitleBar = ({classes}) => {
  return (
    <div className={classes.root} elevation={0}>
      <Typography variant="h6">Star Wars People</Typography>
    </div>
  );
}


TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBar)