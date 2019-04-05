import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { withRouter } from 'react-router-dom'


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const FilterChip = ({classes, searchString, category, history}) => {
  return (
    <div className={classes.root}>
        <Chip
            label={searchString}
            onDelete={(event) => {
                event.preventDefault()
                history.push(`/${category}`)
                
            }}
            className={classes.chip}
        />
    </div>
  );
}

FilterChip.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  searchString: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default withStyles(styles)(withRouter(FilterChip))
