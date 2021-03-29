import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsHeader from '../../components/DetailsHeader';
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";
import {
    selectIncident, getDetailBlocks, select
} from '../../app/reducers/incidents/incidentSlice'
import { Grid, IconButton, LinearProgress } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import DetailsTitle from '../../components/DetailsTitle';
import CaseImageList from './CaseImageList';

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
    headerContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    iconContainer: {
        height: theme.spacing(4.5),
        width: theme.spacing(4.5),
        margin: theme.spacing(0.75)
    },
    iconLink: {
        color: theme.palette.secondary.dark
    }
}));

const CaseDetails = (props) => {
    const classes = useStyles();
    const { incidents } = props;
    const isLoaded = !_.isEmpty(incidents);
    const history = useHistory();
    const [loading, setloading] = useState(isLoaded);
    const { caseId } = useParams();
    const { incidentId } = useParams();
    const dispatch = useDispatch();
    const selectedId = useSelector(selectIncident);
    const detailBlocks = useSelector(getDetailBlocks);

    const selectedIncident = incidents.find((incident) => !incident._id.indexOf(selectedId));

    useEffect(() => {
        setloading(!isLoaded ? true : false);
        if (!selectedId) {
            dispatch(select(incidentId));
        }
        // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
        // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
    }, [selectedIncident]);

    if (!selectedIncident) { return null; }
    // If the incident is not selected, return early to prevent re-renders

    const { geographics, incident } = selectedIncident;
    const [IncidentInformation, AreasAffected, AdditionalNotes] = detailBlocks;
    // To deconstruct the array for easier use

    return <DetailsContainer query={!loading && isLoaded ? incident.status : ''}>
        {
            !loading ?
                <>
                    <Grid container className={classes.headerContainer}>
                        <IconButton
                            onClick={() => {
                                history.goBack();
                            }}
                            className={classes.iconContainer} aria-label="backspace">
                            <NavigateBeforeIcon className={classes.iconLink} fontSize='medium' />
                        </IconButton>
                        <div>
                            <DetailsHeader header={`Zip Code: ${caseId}`} />
                            <DetailsTitle title={`Incident: ${geographics.municipal}`} />
                        </div>
                    </Grid>
                    <DetailsBlock title={IncidentInformation.title} detailRows={IncidentInformation.rows} />
                    <DetailsBlock title={'Case Images'}>
                        <CaseImageList/>
                    </DetailsBlock>
                    <DetailsBlock title={AreasAffected.title} detailRows={AreasAffected.rows} />
                    <DetailsBlock title={AdditionalNotes.title} detailRows={AdditionalNotes.rows} />
                </>
                :
                <>
                    <BorderLinearProgress variant="indeterminate" />
                </>
        }

    </DetailsContainer>
}

export default CaseDetails;
