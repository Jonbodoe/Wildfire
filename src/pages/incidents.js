import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import { IncidentList } from '../features/IncidentList';
// import { DataGrid } from '@material-ui/data-grid';


// const useStyles = makeStyles((theme) => ({
//     items: {
//         margin: theme.spacing(1,0),
//         width: '100%',
//         height: theme.spacing(5),
//         boxShadow: '0px 0px 10px #dbdbdb',
//         backgroundColor: theme.palette.secondary.lighter,
//         display: 'flex',
//         alignItems: 'center'
//     },
// }));
function getIncidents () {
    return fetch(`${process.env.PORT || 'http://localhost:8080'}/incidents/get-incidents-db`)
    // Should use Axios versus fetch API? 
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then(function(response) {
        return response;
    }).catch(function(error) {
        throw Error(error);
    });
}

const Incidents = () => {
    const [incidentList, setIncidentList] = useState();
    // const [mountStatus, setMountStatus] = useState(false);

    useEffect(() => {
        let mounted = true;
        getIncidents()
          .then(items => {
            if(mounted) {
              setIncidentList(items)
            }
          })
        return () => mounted = false;
    }, [])
    // console.log(incidentList, 'state')

    // const classes = useStyles();
    return <MainContainer>
        <Grid item md={12}> 
            <PageTitle title={"Incidents"} />
        </Grid>
        <Grid item md={6}>
            <IncidentList state = {incidentList}/>
            {/* <Grid item className={classes.items}>
                <Typography>Hello</Typography>
            </Grid> */}
        </Grid>
        <Grid item md={6}>
        </Grid>
    </MainContainer>
}


export default Incidents