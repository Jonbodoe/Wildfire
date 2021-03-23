import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MainContainer from '../components/MainContainer';
// import PageTitle from '../components/PageTitle';
import IncidentList from '../features/incidents/IncidentList';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
// import IncidentView from '../features/incidents/IncidentDetails';
import IncidentDetails from '../features/incidents/IncidentDetails';
import {
    listIncidents, errorLog, select
} from './../app/reducers/incidents/incidentSlice'
import {
    Switch,
    Route,
    // Link,
} from "react-router-dom";
import DetailsTitle from '../components/DetailsTitle';
import DetailsContainer from '../components/DetailsContainer';
import CaseDetails from '../features/incidents/CaseDetails';
// import Results from '../components/Results';

const Incidents = () => {
    let location = useLocation();
    let { path } = useRouteMatch();
    const dispatch = useDispatch();
    const incidentsList = useSelector(listIncidents);
    const errorMessage = useSelector(errorLog);

    useEffect(() => {
        if (location.pathname === path) {
            dispatch(select(''));
        }
        // When switching through the tabs of navigation, resets the selected incident since it is just /incident param and not /incident/{incidentId....}
    });


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
                    {/* Not too sure how to re-direct */}
                </Route>
                <Route path={`${path}/:incidentId`} exact>
                    <IncidentDetails incidents={incidentsList} error={errorMessage} />
                </Route>
                <Route path={`${path}/:incidentId/case/:caseId`}>
                    <CaseDetails incidents={incidentsList} error={errorMessage}/>
                </Route>
            </Switch>
        </Grid>
        {/* </Router> */}
    </MainContainer>
}


export default Incidents
