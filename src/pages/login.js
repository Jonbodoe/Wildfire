import { Button, Typography } from '@material-ui/core';
import React from 'react';
import MainContainer from '../components/MainContainer';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     increment,
//     selected
// } from '../app/reducers/incidentSlice.js'
// import LoginButton from '../components/loginButton';s
// import ReactDOM from 'react-dom';

const Login = () => {
    // const dispatch = useDispatch()
    // console.log(dispatch(increment()), useSelector(selected))
    // const select = useSelector(selected)
    // console.log(select)
    return <>
        <MainContainer>
            <Typography>Loginnnnnn</Typography>
            {/* <Button onClick={() => dispatch(increment())} >Hello</Button>
            <Typography>{select}</Typography> */}
        </MainContainer>
        {/* <LoginButton/> */}
    </>
}

export default Login;