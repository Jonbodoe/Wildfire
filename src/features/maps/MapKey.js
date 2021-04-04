import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DetailsTitle from '../../components/DetailsTitle';

const useStyles = makeStyles((theme) => ({
    currentLocation: {
        color: theme.palette.info.main
    },
    incidents: {
        color: theme.palette.error.main
    },
    cases: {
        color: theme.palette.warning.main
    },
    dataPoints: {
        color: '#ffdd00'
    },
    topic: {
        fontWeight: '500'
    },
    caption: {
        color: theme.palette.primary.light
    },
    icon: {
        padding: theme.spacing(1.15)
    },
    row: {
        padding: theme.spacing(0.5, 0)
    },
    title: {
        paddingTop: theme.spacing(0.75)
    }
}));


const MapKey = () => {
    const classes = useStyles();
    const listData = [
        {
            icon: <CurrentLocationIcon />,
            topic: 'Current Location',
            caption: ''
        },
        {
            icon: <IncidentsIcon />,
            topic: 'Known Incidents',
            caption: 'Areas affected based on county and or city'
        },
        {
            icon: <CasesIcon />,
            topic: 'Known Case(s)',
            caption: 'Areas affected based on zip code'
        },
        {
            icon: <DatapointsIcon />,
            topic: 'Receiving Data Point(s)',
            caption: 'Number based on the number of reported incidents'
        },

    ]
    return <>
        <div className={classes.title}>
            <DetailsTitle title={`Map Key`} />
        </div>
        {
            listData.map((listItem, i) => {
                return <Grid key={i} container className={classes.row}>
                    <Grid item xs={2}>
                        <div className={classes.icon}>
                        {
                            listItem.icon
                        }
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant={'body2'} className={classes.topic}>{listItem.topic}</Typography>
                        <Typography variant={'body2'} className={classes.caption}>{listItem.caption}</Typography>
                    </Grid>
                </Grid>
            })
        }
    </>
}
const CurrentLocationIcon = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 300 300"
    >
        <circle cx="150" cy="150" r="150" fill="#2196f3"></circle>
    </svg>
}
const CasesIcon = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 300.3 300.3"
        version="1.1"
        viewBox="0 0 300.3 300.3"
        xmlSpace="preserve"
    >
        <path
            fill="none"
            stroke="#FF9800"
            strokeMiterlimit="12"
            strokeWidth="35.486"
            d="M150.5 37.4L27.1 284.2 274 284.2z"
        ></path>
    </svg>
}
const IncidentsIcon = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 300 300"
        version="1.1"
        viewBox="0 0 300 300"
        xmlSpace="preserve"
    >
        <path fill="#F44336" d="M150.5 0.5L0.5 300.5 300.5 300.5z"></path>
    </svg>
}
const DatapointsIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 299 300">
        <path fill="#fd0" d="M0 0H300V300H0z"></path>
    </svg>
}

export default MapKey

