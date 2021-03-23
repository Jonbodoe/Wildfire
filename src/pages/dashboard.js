import { Grid } from '@material-ui/core';
import React from 'react';
import MainContainer from '../components/MainContainer';
import primaryLinks from '../components/PrimaryLinks';
import DashboardIncidents from '../features/dashboard/DashboardIncidents';
import DashboardMaps from '../features/dashboard/DashboardMaps';
import DashboardUpdates from '../features/dashboard/DashboardUpdates';
import DashboardWeather from '../features/dashboard/DashboardWeather';
// import Maps from './Maps';

const Dashboard = () => {
    // console.log(primaryLinks);
    const links = primaryLinks()
    const [ dashboard, incidents, updates, maps ] = links;
    // console.log(incidents);
    return <>
        <MainContainer>
            <Grid item md={7}>
                <DashboardUpdates path={updates}/>
                <DashboardMaps path={maps}/>
            </Grid>
            <Grid item md={5}>
                <DashboardIncidents path={incidents}/>
                <DashboardWeather/>
            </Grid>
        </MainContainer>
    </>
}

export default Dashboard;