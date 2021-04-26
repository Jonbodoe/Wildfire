import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import MailIcon from '@material-ui/icons/Mail';
// import DetailsContainer from '../components/DetailsContainer';
import DetailsHeader from '../components/DetailsHeader';
import isEmpty from "lodash/isEmpty";
import SummaryBlocks from '../features/summary/summaryBlocks';
import { useSelector } from 'react-redux';
import { listIncidents } from '../app/reducers/incidents/incidentSlice';
import LoadingBar from '../components/LoadingBar';


const useStyles = makeStyles((theme) => ({
    headerCaption: {
        color: theme.palette.primary.light,
        marginBottom: theme.spacing(0.75)
    },
    container: {
        margin: theme.spacing(2.5,1.5),
        padding: theme.spacing(3,4),
        backgroundColor: theme.palette.secondary.lighter,
        boxShadow: '0px 0px 10px #dbdbdb',
    },
    button: {
        fontWeight: 600,
        borderRadius: '0px',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.dark,
        margin: theme.spacing(1),
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.darkish,
            color: theme.palette.primary.main,
        },
    },
    buttonContainer: {
        textAlign: 'right'
    },
    iconButton: {
        marginLeft: theme.spacing(1)
    }
}));

const Summary = () => {
    const [isLoading, setLoading] = useState(true);
    const classes = useStyles();
    const incidentList = useSelector(listIncidents);

    const urgentIncidents = incidentList.filter(incident => incident.incident.status === "Must Resolve");

    // console.log(urgentIncidents);
    useEffect(()=>{
        isEmpty(urgentIncidents)? setLoading(true) : setLoading(false)
    },[urgentIncidents])

    return <MainContainer>
        <Grid container className={classes.container}>
                <Grid item md={6}>
                    <DetailsHeader header={`Incidents Summary`} />
                    <Typography variant={'body2'} className={classes.headerCaption}>Incidents that are marked as "Must Resolve" will appear on this page</Typography>
                </Grid>
                <Grid item md={6} className={classes.buttonContainer}>
                    <Button className={classes.button} variant="contained" disableElevation>View PDF
                        <PictureAsPdfIcon className={classes.iconButton}/>
                    </Button>
                    <Button className={classes.button} variant="contained" disableElevation>Send Email
                        <MailIcon className={classes.iconButton}/>
                    </Button>
                </Grid>
                {/* <Divider/> */}
                {
                    !isLoading ? urgentIncidents.map((incident, i) => <SummaryBlocks key={i} incident={incident} />) : <LoadingBar/>
                }
                {/* <SummaryBlocks incidents={incidentList} /> */}
        </Grid>
    </MainContainer>
}


// const blocks =  [
//     {
//         title: 'Incident Information',
//         rows:  [
//             { type: 'Incident', content: geographics.municipal },
//             { type: 'State', content: geographics.state }, 
//             { type: 'Region', content: geographics.region }, 
//             { type: 'ID', content: selectedIncident._id.substr(selectedId.length - 5) }, 
//             { type: 'Initial Time', content: `${geographics.time_stamp} ${geographics.time_zone} `}, 
//             { type: 'Zipcodes Affected', content: incident.zip_codes.map(zip => `${zip}, `) }
//         ] 
//     },
//     {
//         title: 'Areas Affected',
//         rows:  [
//             { type: 'Volume Traffic', content: incident.volume_traffic },
//             { type: 'Property', content: incident.property.map(property => `${property}, `) },
//             { type: 'Wildfire Type', content: incident.wildfire_type },
//         ] 
//     },
//     {
//         title: 'Additional Notes',
//         rows:  [
//             { content: 'Lorem ipsum dolor sit amet' },
//         ] 
//     }
// ];

export default Summary