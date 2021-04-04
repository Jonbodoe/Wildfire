import { Typography, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginStatus, listLogins, login } from '../app/reducers/logins/loginSlice';
import PrimaryButton from '../components/PrimaryButton';
import BrandLogo from '../components/BrandLogo';
import LoadingSVG from '../images/svgs/loadingSVG';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: `url(${require('./../images/widebg.png').default})`,
        backgroundColor: theme.palette.secondary.light,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    loginColumn: {
        height: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark,
    },
    loginContainer: {
        width: '100%',
        margin: theme.spacing(4),
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main
    },
    infoContainer: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
    },
    inputsContainer: {
        padding: theme.spacing(1.5, 0),
        color: theme.palette.secondary.light,
    },
    loadingContainer: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    caption: {
        color: theme.palette.primary.lighter
    },
    textField: {
        color: theme.palette.secondary.light,
        margin: theme.spacing(1, 0),
        '& .MuiInputBase-input, .MuiInputLabel-root': {
            margin: theme.spacing(0, 1.5),
            color: theme.palette.secondary.light,
        },
        '& .MuiInput-underline::after, .MuiInput-underline::before': {
            borderColor: theme.palette.primary.light
        }
    },
    title: {
        fontWeight: '600',
        color: theme.palette.primary.main
    },
    subTitle: {
        color: theme.palette.primary.light
    }
}));

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {
    const [ error, setError ] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();
    const isLoggedIn = useSelector(checkLoginStatus);
    // Currently set to false in redux store
    const loginList = useSelector(listLogins)
    // From redux store

    const verifyLoginInfo = (info, logins) => {
        const { email, password } = info;
        const emailCheck = logins.filter(login => login.credientials.email === email);
        const [loginInfo] = emailCheck;
        if (loginInfo.credientials.password === password) {
            return true
        } else {
            return false
        }
    }

    const formik = useFormik({
        initialValues: {
            email: 'janedoe@nps.gov',
            password: 'jeffersonedu',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setLoading(true);
            const verify = verifyLoginInfo(values, loginList)
            // comparing values from formik with loginList for a match, the function condition is above
            if (verify) {
                setTimeout(() => dispatch(login()), 2000);
                // for demo'ing loading 
            } else {
                setTimeout(() => setLoading(false), 750);
                // for demo'ing loading 
                setError(true);
            }
        },
    });
    if (isLoggedIn) {
        setLoading(false);
        setError(false)
    }
    return <>
        {
            !isLoading ?
                <Grid container className={classes.root}>
                    <Grid item md={7} className={classes.imageColumn}>
                        <div className={classes.infoContainer}>
                            <Typography className={classes.title} variant='h3'>Making Wildfires<br /> More Managable.</Typography>
                            <Typography className={classes.subTitle} variant='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                        </div>
                    </Grid>
                    <Grid item md={4} className={classes.loginColumn}>
                        <div className={classes.loginContainer}>
                            <BrandLogo darkMode={true}/>
                            <form onSubmit={formik.handleSubmit}>
                                <Typography variant={'body2'} align="center" className={classes.caption}>Member Login</Typography>
                                <div className={classes.inputsContainer}>
                                    {
                                        error? <Alert severity="error">Incorrect Login Information</Alert> : <></>
                                    }
                                    <TextField
                                        fullWidth
                                        className={classes.textField}
                                        id="standard-basic"
                                        name="email"
                                        label="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                    <TextField
                                        fullWidth
                                        className={classes.textField}
                                        id="password standard-basic"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                    {/* {
                                        error? <Alert severity="info"></Alert> : <></>
                                    } */}
                                    <Typography variant='caption' className={classes.caption} align='right'>Forgot Password?</Typography>
                                </div>
                                <div>
                                    <PrimaryButton
                                        text={`Login`}
                                        type="submit"
                                        fullWidth={true}
                                    />
                                </div>
                            </form>
                            <Typography align="center" variant='caption' className={classes.caption}>Not a member? learn more!</Typography>
                        </div>
                    </Grid>
                    <Grid item md={1}></Grid>
                </Grid>
                :
                <Grid container>
                    <Grid item md={3}></Grid>
                    <Grid item md={6} className={classes.loadingContainer}>
                        <div>
                            <LoadingSVG/>
                        </div>
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
        }
    </>

}

export default Login;