import { Grid } from '@material-ui/core';
import React from 'react';
import MainContainer from '../components/MainContainer';
import UpdateDetails from '../features/updates/UpdateDetails';
import UpdatesList from '../features/updates/UpdatesList';


const Updates = () => {
    return <MainContainer>
        <Grid item md={6}>
            <UpdatesList/>
        </Grid>
        <Grid item md={6}>
            <UpdateDetails/>
        </Grid>
    </MainContainer>
}

export default Updates