import { Button, Typography, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import MainContainer from '../components/MainContainer';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useRouteMatch} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { checkLoginStatus, login } from '../app/reducers/logins/loginSlice';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    loginColumn: {
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.light,
    },
    loginContainer: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.secondary.lighter
    }
}));  

const Login = () => {
    const isLoggedIn = useSelector(checkLoginStatus);
    // const { loginStatus } = props;
    const dispatch = useDispatch();
    const classes = useStyles();
    // console.log(dispatch(increment()), useSelector(selected))
    // const select = useSelector(selected)
    // console.log(select)

    const handleLogin = (e) => {
        dispatch(login());
    }

    return <>
        {/* <MainContainer> */}
        <Grid container className={classes.root}>
            <Grid item md={8}>
                <Typography>Loginnnnnn</Typography>
            </Grid>
            <Grid item md={4} className={classes.loginColumn}>
                <div className={classes.loginContainer}>
                    <Button 
                        onClick={handleLogin}
                        variant="contained"
                    >
                        Login
                    </Button>
                </div>
            </Grid>
        </Grid>
    </>
}

export default Login;