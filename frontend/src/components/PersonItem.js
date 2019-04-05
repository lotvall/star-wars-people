import React from 'react'
import PropTypes from 'prop-types';
import Avatar from './LetterAvatar'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


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


const PeopleListItem = ({classes, person, }) => {
    return (
            <li className={classes.listrow}>
                <Avatar>{person.name}</Avatar>
                <Typography className={classes.typography} variant="body1">
                    {person.name}
                </Typography>
                <Typography className={classes.typography} variant="body1"> 
                    {person.species[0] ? person.species[0].name : "Unknown species"} from {person.homeworld.name}
                </Typography>

            </li>
    )           
}

PeopleListItem.propTypes = {
    classes: PropTypes.object.isRequired, 
    person: PropTypes.object, 
  };

export default withStyles(styles)(PeopleListItem)