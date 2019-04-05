
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilterChip from './FilterChip'

const styles = theme => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight:'40px',
    height: '60px',
    borderBottom: '1px solid #eeeef0',

  },
})


const FilterBar = ({ classes, searchString, category}) => {

  return (
    <div className={classes.root}>
      <FilterChip searchString={searchString} category={category}/>
    </div>
  )
}

FilterBar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchString: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};



export default withStyles(styles) (FilterBar)