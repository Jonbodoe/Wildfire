import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import DetailsContainer from '../components/DetailsContainer';
import DetailsHeader from '../components/DetailsHeader';
import DetailsBlock from '../components/DetailsBlock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { listIncidents } from '../app/reducers/incidents/incidentSlice';
import { isEmpty } from 'lodash-es';
import DetailsTable from '../components/DetailsTable';
import LoadingBar from '../components/LoadingBar';

const getDetailBlocks = () => {
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
                    content: 'janedoe@nps.gov',
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
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: theme.spacing(3, 0)
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
    iconButton: {
        marginLeft: theme.spacing(1)
    },
    logoutContainer: {
        textAlign: 'right',
    }
}));

const Profile = () => {
    const classes = useStyles();
    const [isLoading, setLoading] = useState(true)
    const profileDetails = getDetailBlocks();
    const profileImg = require(`./../images/janedoe.jpg`);
    const incidentsList = useSelector(listIncidents);

    useEffect(() => {
        setLoading(isEmpty(incidentsList));
    }, [incidentsList]);

    if (isEmpty(incidentsList)) return null;

    const getIncidentsList = incidentsList.filter(
        (incident) => incident.incident.status === "Open"
    );
    const formattedIncidents = getIncidentsList.map((data) => {
        const { _id } = data;
        return { _id, ...data.incident, ...data.geographics };
    });
    
    return <MainContainer>
        <Grid item md={6}>
            <DetailsContainer>
                <DetailsHeader header={`Profile Information`} />
                <Grid container>
                    <Avatar className={classes.avatar} src={profileImg.default} />
                    <Grid className={classes.profileDetails}>
                        <Grid>
                            <Typography className={classes.position}>Logistics Section Chief</Typography>
                            <Typography className={classes.fullName}>Jane Doe</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {
                    profileDetails.map((block, i) => <DetailsBlock key={i} title={block.title} detailRows={block.rows} />)
                }
            </DetailsContainer>
        </Grid>
        <Grid item md={6}>
            <DetailsContainer>
                <DetailsBlock>
                    <DetailsHeader header={`Incidents Assigned`} />
                    {
                        !isLoading ?
                            <DetailsTable
                                data={formattedIncidents}
                                linkAccessors={"_id"}
                                path={"/incidents"}
                                allowedKeys={[
                                    "municipal",
                                    "priority",
                                    "status",
                                    "volume_traffic",
                                    "_id",
                                ]}
                                tableHeader={["Municipal", "Priority", "Status", "Volume", "Id"]}
                            />
                            :
                            <LoadingBar />
                    }
                </DetailsBlock>
            </DetailsContainer>
        </Grid>
        <Grid container>
            <Grid item md={6}></Grid>
            <Grid item md={6} className={classes.logoutContainer}>
                <Button className={classes.button} variant="contained" disableElevation>Log Out
                    <ExitToAppIcon className={classes.iconButton} />
                </Button>
            </Grid>
        </Grid>
    </MainContainer>
}

export default Profile