import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainContainer from '../components/MainContainer';
// import PageTitle from '../components/PageTitle';
// import MapView from '../components/MapView';
import MapDetails from '../features/maps/MapDetails';
// import MapDisplay from '../components/MapDisplay';
// import MapDetails from './sub-pages/MapDetails';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
    }
}));

const Maps = () => {
    const classes = useStyles();
    return <>
        <MainContainer>
        <Grid item md={7} className={classes.container}>
            {/* <MapDisplay/> */}
        </Grid>
        <Grid item md={5}>
            <MapDetails/>
        </Grid>
        </MainContainer>
    </>
}

export default Maps