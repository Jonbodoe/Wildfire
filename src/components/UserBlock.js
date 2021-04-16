import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: theme.spacing(2)
    },
    profileDetails: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1,1)
    },
    position: {
        color: theme.palette.primary.light,
    },
    fullName: {
        fontWeight: '500'
    }
}));

const UserBlock = (props) => {
    const { profileData } = props;
    const { information } = profileData;
    const profileImg = require(`./../images/${information.img_src}`);
    // console.log(profileData, 'profile');
    const classes = useStyles();
    return  <Grid container>
    <Avatar className={classes.avatar} src={profileImg.default} />
    <Grid className={classes.profileDetails}>
        <Grid>
            <Typography className={classes.position}>{information.position || `Position`}</Typography>
            <Typography className={classes.fullName}>{information.fullname || `Full Name`}</Typography>
        </Grid>
    </Grid>
</Grid>
}

export default UserBlock;