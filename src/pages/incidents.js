import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import MainContainer from '../components/MainContainer';
import IncidentList from '../features/incidents/IncidentList';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router-dom';
import IncidentDetails from '../features/incidents/IncidentDetails';
import {
    listIncidents, errorLog, select
} from './../app/reducers/incidents/incidentSlice'
import {
    Switch,
    Route,
} from "react-router-dom";
import CaseDetails from '../features/incidents/CaseDetails';
import DetailsHeader from '../components/DetailsHeader';
import IncidentSVG from '../images/svgs/incidentSVG';

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
    return <MainContainer>
        <Grid item md={6}>
            <IncidentList state={incidentsList} error={errorMessage} />
        </Grid>
        <Grid item md={6}>
            <Switch>
                <Route exact path={path}>
                    <IncidentSVG/>
                    <DetailsHeader header={'Select an incident'} align={'center'}/>
                </Route>
                <Route path={`${path}/:incidentId`} exact>
                    <IncidentDetails incidents={incidentsList} error={errorMessage} />
                </Route>
                <Route path={`${path}/:incidentId/case/:caseId`}>
                    <CaseDetails incidents={incidentsList} error={errorMessage} />
                </Route>
            </Switch>
        </Grid>
    </MainContainer>
}


export default Incidents
