import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textContainer: {
        // flexGrow: 2,
        padding: theme.spacing(2)
    },
    userContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    profileContainer: {
        // flexGrow: 1
        padding: theme.spacing(1)
    },
    position: {
        color: theme.palette.primary.light,
    },
    name: {
        color: theme.palette.primary.main,
        fontWeight: '600'
    },
    description: {
        color: theme.palette.primary.light,
    },
    profileImg: {
        height: theme.spacing(5),
        width: theme.spacing(5),
    }
}));

const DetailsUser = (props) => {
    const classes = useStyles();
    const profileImg = require('../images/profilePic.jpg');
    return <Grid item className={classes.userContainer}>
        <Grid className={classes.profileContainer}>
            <Avatar className={classes.profileImg} src={profileImg} />
        </Grid>
        <Grid className={classes.textContainer}>
            <Typography className={classes.position} variant="body2">
                Position Title
            </Typography>
            <Typography className={classes.name} variant="body1">
                Name of personnel
            </Typography>
            <Typography className={classes.position} variant="body2">
                Timestamp
            </Typography>
        </Grid>
    </Grid>
}

export default DetailsUser