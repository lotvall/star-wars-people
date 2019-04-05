import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import indigo from '@material-ui/core/colors/indigo';


const styles = {
  root:{
    paddingLeft: '40px',
  },
  avatar: {
    margin: 0,
    color: '#fff',
    backgroundColor: indigo[400],
    width: '40px',
    height: '40px',
    fontSize: '1rem',

  },
};

const LetterAvatars = (props) => {
  const { classes, children } = props;
  let initials;
  if(children) {
    initials = children.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>{!!children && initials}</Avatar>
    </div>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default withStyles(styles)(LetterAvatars);
