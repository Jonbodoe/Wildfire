import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsHeader from '../../components/DetailsHeader';
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";
import {
    selectIncident, getIncidentDetailBlocks, select
} from '../../app/reducers/incidents/incidentSlice'
import { Grid, LinearProgress } from '@material-ui/core';
import DetailsTable from '../../components/DetailsTable';
import DetailsSelect from '../../components/DetailsSelect';
import labels from '../../app/detailStatusLabels';
// import { Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DetailsTextField from '../../components/DetailsTextField';
import PrimaryButton from '../../components/PrimaryButton';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: theme.spacing(10),
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        backgroundColor: theme.palette.secondary.lighter
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    saveButton: {
        fontWeight: 600,
        borderRadius: '0px',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(2, 0),
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.darkish,
        },
    },
}))

const IncidentDetails = (props) => {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    let [status, priority] = labels;
    const { incidents } = props;
    const isLoaded = !_.isEmpty(incidents);
    const [loading, setloading] = useState(isLoaded);
    const { incidentId } = useParams();
    const dispatch = useDispatch();
    const selectedId = useSelector(selectIncident);
    const detailBlocks = useSelector(getIncidentDetailBlocks);

    const selectedIncident = incidents.find((incident) => !incident._id.indexOf(selectedId));

    useEffect(() => {
        setloading(!isLoaded ? true : false);
        if (!selectedId) {
            dispatch(select(incidentId));
        }
        // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
        // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
    }, [selectedId, selectedIncident]);

    if (!selectedIncident) { return null; }
    // If the incident is not selected, return early to prevent re-renders

    const { geographics, incident } = selectedIncident;
    const [ incidentInfo ] = detailBlocks;
    const [ IncidentInformation, AreasAffected ] = incidentInfo.incidentDetails;
    // To deconstruct the array for easier use

    const testButton = () =>{
        return console.log('changes saved!');
    }

    return <DetailsContainer query={!loading && isLoaded ? incident.status : ''}>
        {
            !loading ?
                <>
                    <DetailsHeader header={`Incident: ${geographics.municipal}`} />
                    <DetailsBlock title={IncidentInformation.title} detailRows={IncidentInformation.rows} />
                    <DetailsBlock title={`Incident Cases`} >
                        <DetailsTable
                            data={incident.cases}
                            linkAccessors={'zip_code'}
                            path={`${url}/case`}
                            // base url to have links within the table rows.
                            allowedKeys={["zip_code", "initial_time", "volume_traffic", "reviewed"]}
                            // for filtering specific data properties
                            tableHeader={["Zip Code", "Initial Time", "Volume Traffic", "Review"]}
                        />
                    </DetailsBlock>
                    <DetailsBlock title={AreasAffected.title} detailRows={AreasAffected.rows} />
                    <DetailsBlock title={`Additional Notes`}>
                        <DetailsTextField rows={4} info={incident.additional_notes} label={`List any additional information`} />
                    </DetailsBlock>
                    <DetailsBlock title={`Incident Progress`}>
                        <Grid container>
                            <Grid item xs={6}>
                                <DetailsSelect label={'Status'} dataLabels={status.statuses} selected={incident.status} />
                            </Grid>
                            <Grid item xs={6}>
                                <DetailsSelect label={'Priority'} dataLabels={priority.priorities} selected={incident.priority} />
                            </Grid>
                            <PrimaryButton handler={testButton} text={'Save Changes'}>
                                <NavigateNextIcon />
                            </PrimaryButton>
                        </Grid>
                    </DetailsBlock>
                    {/* 
                        Listen for all 3 values
                        submit on button event
                        should wrap in a form element
                        https://formik.org/docs/examples/basic use formik
                    */}
                </>
                :
                <>
                    <BorderLinearProgress variant="indeterminate" />
                </>
        }

    </DetailsContainer>
}

export default IncidentDetails;
