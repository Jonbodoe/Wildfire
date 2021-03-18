import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DetailsTitle from '../../components/DetailsTitle';

const useStyles = makeStyles((theme) => ({
    currentLocation: {
        // backgroundColor: theme.palette.info.main,
        color: theme.palette.info.main
    },
    incidents:{
        color: theme.palette.error.main
    },
    cases: {
        color: theme.palette.warning.main
    },
    dataPoints: {
        color: theme.palette.warning.main
    },
    topic: {
        fontWeight: '500'
    },
    caption: {
        color: theme.palette.primary.light
    },
    icon: {
        padding: theme.spacing(0)
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
            icon: <FiberManualRecordIcon className={classes.currentLocation} />,
            topic: 'Current Location',
            caption: ''
        },
        {
            icon: <FiberManualRecordIcon className={classes.incidents} />,
            topic: 'Known Incidents',
            caption: 'Areas affected based on county and or city'
        },
        {
            icon: <FiberManualRecordIcon className={classes.cases} />,
            topic: 'Known Case(s)',
            caption: 'Areas affected based on zip code'
        },
        {
            icon: <FiberManualRecordIcon className={classes.dataPoints} />,
            topic: 'Receiving Data Point(s)',
            caption: 'Number based on the number of reported incidents'
        },

    ]
    return <>
        <div className={classes.title}>
            <DetailsTitle title={`Map Key`} />
        </div>
        {
            listData.map((listItem, i)  => {
                return <Grid key={i} container className={classes.row}>
                    <Grid item xs={2}>
                        {
                            listItem.icon
                        }
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

export default MapKey

