import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DetailsTable from '../../components/DetailsTable';
import _ from "lodash";
import {
    listIncidents
} from '../../app/reducers/incidents/incidentSlice'

const useStyles = makeStyles((theme) => ({
    link: {
        color: theme.palette.secondary.dark
    }
}));


const DashboardIncidents = (props) => {
    const incidentList = useSelector(listIncidents);
    const openIncidentsList = incidentList.filter(incident => incident.incident.status === "Open")
    // console.log(openIncidentsList);
    const formattedIncidents = openIncidentsList.map((data)=> {
        return {...data.incident, ...data.geographics}
    });
    console.log(formattedIncidents);
    // console.log(openIncidentsList);
    const classes = useStyles();
    return <>
        <DetailsContainer>
            <Grid container>
                <DetailsHeader header={`Incidents`} />
                <Link className={classes.link} button="true" component={RouterLink} to={props.path.path}>
                    <ChevronRightIcon />
                </Link>
            </Grid>
            <DetailsCaption caption={`Information regarding on-going incidents based on the current and or designated location`} />
            <Divider />
            <DetailsBlock>
                {/* location,cases.length,priority,volume */}
                <DetailsTable 
                    data={formattedIncidents} 
                    // linkAccessors={''}

                    // Maybe flatten the array of objects into 1 giant object to pass into
                    allowedKeys={["municipal", "volume_traffic", "status"]}
                    tableHeader={["Municipal", "Volume", "Status"]}
                    // Needa figure this out for the cell rows display to make it more reuseable 
                />
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default DashboardIncidents;