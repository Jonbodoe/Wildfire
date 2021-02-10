import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    items: {
        margin: theme.spacing(1.5, 0),
        padding: theme.spacing(3),
        width: '100%',
        height: theme.spacing(5),
        boxShadow: '0px 0px 10px #dbdbdb',
        backgroundColor: theme.palette.secondary.lighter,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    itemContent: {
        flexGrow: 1,
    },
    itemText: {

    },
    icon: {
        display: 'flex',
        alignItems: 'center',
    }
}));


const IncidentItem = (props) => {
    const classes = useStyles();
    console.log(props.state)
    return <Grid key={props.state._id} item className={classes.items}>
        <Grid className={classes.itemContent}>
            <Typography className={classes.itemText} variant="body2">{props.state.geographics.municipal}</Typography>
        </Grid>
        <Grid className={classes.itemContent}>
            <Typography className={classes.itemText} variant="body2">{props.state.geographics.state}</Typography>
        </Grid>
        <Grid className={classes.itemContent}>
            <Typography className={classes.itemText} variant="body2">{props.state.incident.priority}</Typography>
        </Grid>
        <Grid className={classes.icon}>
            <ChevronRightIcon />
        </Grid>
    </Grid>
}

const SwitchCase = (props) => {
    if (props.state && !props.error.message) {
        return props.state.map(item => <IncidentItem key={item._id} state={item} />);
    } else if (!props.state && props.error.message) {
        return <Typography>{props.error.message.message}</Typography>;
    } else {
        return <Typography>Loading...</Typography>;

    }
}

export const IncidentList = (props) => {
    const incidentList = props.state;
    const errorMessage = props.error;
    return <>
        <SwitchCase state={incidentList} error={errorMessage} />
    </>
}