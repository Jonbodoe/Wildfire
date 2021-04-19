import React from 'react';
import MainContainer from '../components/MainContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import DetailsContainer from '../components/DetailsContainer';
import DetailsHeader from '../components/DetailsHeader';
import DetailsBlock from '../components/DetailsBlock';
// import UserBlock from '../components/UserBlock';
// import DetailsTable from '../components/DetailsTable';
// import { getSelectedIncident } from '../app/reducers/incidents/incidentSlice';
// import ReactDOM from 'react-dom';
const getDetailBlocks = () => {
    // get user id 
    const blocks = [
        {
            title: 'General Information',
            rows: [
                {
                    type: 'Organization',
                    content: 'National Park Service',
                },
                {
                    type: 'Serving Since',
                    content: 'June 2004',
                },
                {
                    type: 'Email',
                    content: 'rebeccastrictland@nps.gov',
                },
                {
                    type: 'Phone',
                    content: '1-800-472-3000 EXT:4',
                },
            ]
        }
    ]

    return blocks || [];
}

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: theme.spacing(3,0)
    },
    profileDetails: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(3)
    },
    position: {
        color: theme.palette.primary.light,
    },
    fullName: {
        fontWeight: '500'
    }
}));  



const Profile = () => {
    const profileDetails = getDetailBlocks();
    // console.log(profileDetails)
    // const classes = useStyles();
    // const profileImg = require('./../images/profilePic.jpg');
    // const [ title, content ] = profileDetails;
    // getSelectedIncident
    // const selectedIncident = incidents.find((incident) => !incident._id.indexOf(selectedId));
    // const selectedIncident = useSelector(getSelectedIncident);
    // console.log(selectedIncident)
    // const { geographics, incident } = selectedIncident; 
    // console.log(title, content)
    return <MainContainer>
        <Grid item md={6}>
            <DetailsContainer>
                <DetailsHeader header={`Profile Information`} />
                {/* <UserBlock/> */}
                    {
                        profileDetails.map((block, i) => <DetailsBlock key={i} title={block.title} detailRows={block.rows}/>)
                    }
            </DetailsContainer>
        </Grid>
        <Grid item md={6}>
            <DetailsContainer>
                <DetailsHeader header={`Incidents Reviewing`} />
                <Typography variant='body2'>Neeeda get user's id to fetch incidents owned by user</Typography>
                {/* <DetailsTable 
                    data={incident.cases} 
                    allowedKeys={["zip_code", "initial_time", "volume_traffic"]}
                    tableHeader={["Zip Code", "Initial Time", "Volume Traffic"]}
                    // Needa figure this out for the cell rows display to make it more reuseable 
                /> */}
            </DetailsContainer>
        </Grid>
    </MainContainer>
}

export default Profile