import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import MainContainer from '../components/MainContainer';
// import PageTitle from '../components/PageTitle';
import IncidentList from '../features/incidents/IncidentList';
import { useSelector } from 'react-redux';
import { Link as RouterLink, withRouter, Router, useRouteMatch } from 'react-router-dom';
import Link from '@material-ui/core/Link';
// import IncidentView from '../features/incidents/IncidentDetails';
import IncidentDetails from '../features/incidents/IncidentDetails';
import {
    listIncidents, fetchIncidents, errorLog, refreshState
} from './../app/reducers/incidents/incidentSlice'
import {
    Switch,
    Route,
    // Link,
} from "react-router-dom";
import DetailsTitle from '../components/DetailsTitle';
import DetailsContainer from '../components/DetailsContainer';
// import Results from '../components/Results';

const Incidents = () => {
    let { path, url } = useRouteMatch();
    // const path = props.location.pathname
    const incidentsList = useSelector(listIncidents);
    const errorMessage = useSelector(errorLog);
    console.log(incidentsList)
    // const errorMessage = useSelector(errorLog);

    // "state" is a confusing prop name. Is this React "State"? A U.S. State? A loading status?
    // I changed the name to describe what it is -- `incidents`
    return <MainContainer>
        {/* <Router > */}
        <Grid item md={6}>
            <IncidentList state={incidentsList} error={errorMessage} />
        </Grid>
        <Grid item md={6}>
            <Switch>
                <Route exact path={path}>
                    <DetailsContainer>
                        <DetailsTitle title="Click on an incident to view more details" />
                    </DetailsContainer>
                </Route>
                <Route path={`${path}/:incident`}>
                    {/* <DetailsTitle title="You made it!" /> */}
                    <IncidentDetails incidents={incidentsList} error={errorMessage} />
                </Route>
            </Switch>
            {/* <IncidentDetails incidents={incidentsList} error={errorMessage}/> */}
        </Grid>
        {/* </Router> */}
    </MainContainer>
}


export default Incidents
