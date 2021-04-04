import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// import MainContainer from '../components/MainContainer'
const useStyles = makeStyles((theme) => ({
    logo: {
        minWidth: '150px',
        maxWidth: '250px'
    },
    logoContainer: {
        padding: theme.spacing(2,0)
    }
}));

const BrandLogo = (props) => {
    const { darkMode } = props;
    const classes = useStyles();
    return <Typography align="center" className={classes.logoContainer}>
        <img className={classes.logo} src={ !darkMode ? require('./../images/IRlogo.svg').default : require('./../images/IRlogowhite.svg').default} alt={'Intuitive Robotics Logo'}/>
    </Typography>
}

export default BrandLogo;