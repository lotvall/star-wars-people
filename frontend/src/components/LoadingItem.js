import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Avatar from './LetterAvatar';

const styles = theme => ({
  root: {

  },
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

const LoadingItem = ({classes, count, length}) => {

  return (
    <>
    <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          <div className={classes.root}>
              <li className={classes.listrow}>
                  <Avatar></Avatar>
                  <Typography className={classes.typography} variant="body1"></Typography>
                  <Typography className={classes.typography} variant="body1"></Typography>

              </li>
          </div>
          </>
    
  )
        
}
export default withStyles(styles)(LoadingItem)