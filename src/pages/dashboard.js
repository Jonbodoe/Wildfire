import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import MainContainer from '../components/MainContainer';
import primaryLinks from '../components/PrimaryLinks';
import { useSelector } from 'react-redux';
import DashboardIncidents from '../features/dashboard/DashboardIncidents';
import DashboardMaps from '../features/dashboard/DashboardMaps';
import DashboardUpdates from '../features/dashboard/DashboardUpdates';
import DashboardWeather from '../features/dashboard/DashboardWeather';
import { listUpdates } from '../app/reducers/updates/updateSlice';
import { listProfiles } from '../app/reducers/profiles/profilesSlice';
import { listIncidents } from '../app/reducers/incidents/incidentSlice';
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash";
import LoadingSVG from '../images/svgs/loadingSVG';

// import Maps from './Maps';
const useStyles = makeStyles((theme) => ({
    loadingContainer: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));
const Dashboard = () => {
    // console.log(primaryLinks);
    const classes = useStyles();
    const links = primaryLinks()

    const [ dashboard, incidents, updates, maps ] = links;
    // console.log(incidents);
    const updatesData = useSelector(listUpdates)
    const profilesData = useSelector(listProfiles)
    const incidentsData = useSelector(listIncidents)

    return <>
        <MainContainer>
            {
                !_.isEmpty(updatesData) ||  !_.isEmpty(profilesData) ||  !_.isEmpty(incidentsData) ?
                <>
                    <Grid item md={7}>
                        <DashboardUpdates path={updates} updatesData={updatesData} profilesData={profilesData}/>
                        <DashboardMaps path={maps}/>
                    </Grid>
                    <Grid item md={5}>
                        <DashboardIncidents path={incidents} incidentsData={incidentsData}/>
                        <DashboardWeather/>
                    </Grid>
                </>
                :
                <>
                    <Grid item md={3}></Grid>
                    <Grid item md={6} className={classes.loadingContainer}>
                        <div>
                            <LoadingSVG />
                        </div>
                    </Grid>
                    <Grid item md={3}></Grid>
                </>
            }
        </MainContainer>
    </>
}

export default Dashboard;