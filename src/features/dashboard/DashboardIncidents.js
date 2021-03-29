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
    const formattedIncidents = openIncidentsList.map((data)=> {
        const { _id } = data;
        return {_id,...data.incident, ...data.geographics}
    });
    
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
                <DetailsTable 
                    data={formattedIncidents} 
                    linkAccessors={"_id"}
                    path={'/incidents'}
                    allowedKeys={["municipal", "priority", "status", "volume_traffic", "_id"]}
                    tableHeader={["Municipal", "Priority", "Status", "Volume", "Id"]}
                />
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default DashboardIncidents;