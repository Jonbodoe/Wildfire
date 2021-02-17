import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    type: {
        color: theme.palette.primary.main,
        fontWeight: '500',
        flexGrow: 1,
        flexBasis: 0,
    },
    content: {
        color: theme.palette.primary.light,
        flexGrow: 2,
        flexBasis: 0,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

const DetailsContent = (props) => {
    const classes = useStyles();
    return <>
        <Grid className={classes.container} item>
            <Typography variant="body2" className={classes.type}>{props.type}: </Typography>
            <Typography variant="body2" className={classes.content}>{props.content}</Typography>
        </Grid>
    </>
}

export default DetailsContent