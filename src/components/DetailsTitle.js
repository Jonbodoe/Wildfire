import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: '600',
        color: theme.palette.primary.light,
        paddingBottom: theme.spacing(1) 
    }
}));

const DetailsTitle = (props) => {
    const classes = useStyles();
    return <Typography variant="body2" className={classes.title}>
        {props.title}
    </Typography>
}

export default DetailsTitle;