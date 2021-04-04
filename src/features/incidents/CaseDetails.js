import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsHeader from '../../components/DetailsHeader';
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";
import {
    selectIncident, getCaseDetailBlocks, select, selectCase, 
} from '../../app/reducers/incidents/incidentSlice'
import { Grid, IconButton, LinearProgress, Typography } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useHistory } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import DetailsTitle from '../../components/DetailsTitle';
import CaseImageList from './CaseImageList';
import DetailsTextField from '../../components/DetailsTextField';
import DetailsSelect from '../../components/DetailsSelect';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PrimaryButton from '../../components/PrimaryButton';
import labels from '../../app/detailStatusLabels';

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
    },
    subtitle: {
        fontWeight: '500',
        paddingTop: theme.spacing(1.25),
        paddingBottom: theme.spacing(0.75)
    }
}));

const CaseDetails = (props) => {
    const classes = useStyles();
    let [status, priority] = labels;
    const { incidents } = props;
    const isLoaded = !_.isEmpty(incidents);
    const history = useHistory();
    const [loading, setloading] = useState(isLoaded);
    const { caseId } = useParams();
    const { incidentId } = useParams();
    const dispatch = useDispatch();
    const selectedId = useSelector(selectIncident);
    const detailBlocks = useSelector(getCaseDetailBlocks);


    const selectedIncident = incidents.find((incident) => !incident._id.indexOf(selectedId));

    useEffect(() => {
        setloading(!isLoaded ? true : false);
        if (!selectedId) {
            dispatch(select(incidentId));
        }
        dispatch(selectCase(caseId));
        // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
        // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
    }, [selectedIncident, caseId, incidentId]);

    if (!selectedIncident) { return null; }
    // If the incident is not selected, return early to prevent re-renders

    const { geographics, incident } = selectedIncident;
     // To deconstruct the array for easier use
    const [ casesInfo ] = detailBlocks;
    const [ CaseInformation, CaseImages ] = casesInfo.caseDetails;

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
                            <NavigateBeforeIcon className={classes.iconLink} fontSize='small' />
                        </IconButton>
                        <div>
                            <DetailsHeader header={`Zip Code: ${caseId}`} />
                            <DetailsTitle title={`Incident: ${geographics.municipal}`} />
                        </div>
                    </Grid>
                    <DetailsBlock title={CaseInformation.title} detailRows={CaseInformation.rows} />
                    <DetailsBlock title={CaseImages.title}>
                        <CaseImageList images={CaseImages.rows}/>
                    </DetailsBlock>
                    <DetailsBlock title={`Resource Assessment`}>
                        <Typography className={classes.subtitle} variant={'body2'}>Valuable Assets</Typography>
                        <DetailsTextField rows={4} info={''} label={`(e.g. natural resources, critical infrastructure, landmarks, etc...)`} />
                        <Typography className={classes.subtitle} variant={'body2'}>Hazards Warning</Typography>
                        <DetailsTextField rows={4} info={''} label={`(e.g. hazardous chemicals, fuel types, dangerous agents, etc...)`} />
                    </DetailsBlock>
                    <DetailsBlock title={`Additional Notes`}>
                        <DetailsTextField rows={4} info={''} label={`List any additional information`} />
                    </DetailsBlock>
                    <DetailsBlock title={`Case Progress`}>
                        <Grid container>
                            <Grid item xs={6}>
                                <DetailsSelect label={'Status'} dataLabels={status.statuses} selected={incident.status} />
                            </Grid>
                            <Grid item xs={6}>
                                <DetailsSelect label={'Priority'} dataLabels={priority.priorities} selected={incident.priority} />
                            </Grid>
                            <PrimaryButton text={'Save Changes'}>
                                <NavigateNextIcon />
                            </PrimaryButton>
                        </Grid>
                    </DetailsBlock>
                </>
                :
                <>
                    <BorderLinearProgress variant="indeterminate" />
                </>
        }

    </DetailsContainer>
}

export default CaseDetails;
