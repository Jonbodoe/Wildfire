import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import MainContainer from '../components/MainContainer';
import UpdateDetails from '../features/updates/UpdateDetails';
import UpdatesList from '../features/updates/UpdatesList';
import {
    Switch,
    Route,
    useLocation,
    useRouteMatch,
} from "react-router-dom";
import DetailsHeader from '../components/DetailsHeader';
// import IncidentSVG from '../images/svgs/incidentSVG';
import { listUpdates, selectUpdate } from '../app/reducers/updates/updateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { listProfiles } from '../app/reducers/profiles/profilesSlice';
import { listIncidents } from '../app/reducers/incidents/incidentSlice';
import UpdateSVG from '../images/svgs/updateSVG';


const Updates = () => {
    // let location = useLocation();
    let location = useLocation();
    let { path } = useRouteMatch();
    const dispatch = useDispatch();
    const updatesList = useSelector(listUpdates);
    const profilesList = useSelector(listProfiles);
    const incidentList = useSelector(listIncidents);

    useEffect(() => {
        if (location.pathname === path) {
            dispatch(selectUpdate(''));
        }
        // When switching through the tabs of navigation, resets the selected incident since it is just /incident param and not /incident/{incidentId....}
    });
    return <MainContainer>
        <Grid item md={6}>
            <UpdatesList updates={updatesList} profiles={profilesList}/>
        </Grid>
        <Grid item md={6}>
        <Switch>
                <Route exact path={path}>
                    <UpdateSVG/>
                    <DetailsHeader header={'Select an Update'} align={'center'}/>
                </Route>
                <Route path={`${path}/:updateId`} exact>
                    <UpdateDetails updates={updatesList} profiles={profilesList} incidents={incidentList}/>
                </Route>
            </Switch>
        </Grid>
    </MainContainer>
}

export default Updates