import React, {useEffect, useState} from 'react';
import DetailsContainer from '../../components/DetailsContainer';
// import { withStyles } from '@material-ui/core/styles';
// import { LinearProgress } from '@material-ui/core';
import DetailsBlock from '../../components/DetailsBlock';
// import DetailsTitle from '../../components/DetailsTitle';
// import DetailsContent from '../../components/DetailsContent';
import DetailsHeader from '../../components/DetailsHeader';
// import DetailsUser from '../../components/DetailsUser';
// import { Divider} from '@material-ui/core';
import { useParams } from 'react-router';
import { getSelectedUpdate, getUpdateId, getUpdatesDetailBlocks, listUpdates, selectUpdate } from '../../app/reducers/updates/updateSlice';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import LoadingBar from '../../components/LoadingBar';
// import { listProfiles } from '../../app/reducers/profiles/profilesSlice';
import UserBlock from '../../components/UserBlock';
import { Divider } from '@material-ui/core';
// import { listIncidents } from '../../app/reducers/incidents/incidentSlice';

const UpdateDetails = (props) => {
    const { updates, profiles, incidents } = props;
    const { updateId } = useParams();
    const selectedId = useSelector(getUpdateId);
    const isLoaded = !_.isEmpty(updates);
    const [loading, setloading] = useState(isLoaded);
    const selectedUpdate = useSelector(getSelectedUpdate);
    const updateDetailBlocks = useSelector(getUpdatesDetailBlocks);
    const dispatch = useDispatch();
    // console.log(updateId, 'iddd')

    useEffect(() => {
        setloading(!isLoaded ? true : false);
        if (!selectedId) {
            dispatch(selectUpdate(updateId));
        }
        // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
        // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
    }, [selectedId, isLoaded, updateId, dispatch]);
    // console.log(selectedId,'the id');

    if (!isLoaded || _.isEmpty(profiles)) { return null; }
    // Returns early if data is not found
    const [update] = updateDetailBlocks;
    const [ updateTime, updateInformation ] = update.updateDetails;
    const updateProfileId = selectedUpdate.general.userId;
    const filterProfile = profiles.find((profile) => !profile.information.profileId.indexOf(updateProfileId));


    // const openIncidentsList = incidentList.filter(incident => incident.incident.status === "Open")
    // const formattedIncidents = openIncidentsList.map((data)=> {
    //     const { _id } = data;
    //     return {_id,...data.incident, ...data.geographics}
    // });
    // console.log(filterProfile);
    return <>
        <DetailsContainer>
        {
            !loading ?
                <>
                    <DetailsHeader header={`Update Incident`} />
                    <DetailsBlock title={updateTime.title} detailRows={updateTime.rows} />
                    <DetailsBlock title={updateInformation.title} detailRows={updateInformation.rows} />
                    <Divider/>
                    <UserBlock profileData={filterProfile}/>
                </>
            :
                <LoadingBar/>
        } 
        </DetailsContainer>
    </>
}

export default UpdateDetails;