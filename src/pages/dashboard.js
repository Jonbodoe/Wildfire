import { Grid } from '@material-ui/core';
import React from 'react';
import MainContainer from '../components/MainContainer';
import DashboardIncidents from '../features/dashboard/DashboardIncidents';
import DashboardMaps from '../features/dashboard/DashboardMaps';
import DashboardUpdates from '../features/dashboard/DashboardUpdates';
import DashboardWeather from '../features/dashboard/DashboardWeather';

const Dashboard = () => {
    return <>
        <MainContainer>
            <Grid item md={7}>
                <DashboardUpdates/>
                <DashboardMaps/>
            </Grid>
            <Grid item md={5}>
                <DashboardIncidents/>
                <DashboardWeather/>
            </Grid>
        </MainContainer>
    </>
}

export default Dashboard;