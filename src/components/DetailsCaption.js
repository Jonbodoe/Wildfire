import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    caption: {
        color: theme.palette.primary.light,
        paddingBottom: theme.spacing(1.25)
    }
}));

const DetailsCaption = (props) => {
    const classes = useStyles();
    return <>  
        <Typography variant="body2" className={classes.caption}>{props.caption}</Typography>
    </>
}

export default DetailsCaption;