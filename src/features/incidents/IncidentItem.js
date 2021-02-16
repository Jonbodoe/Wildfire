import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    items: {
        padding: theme.spacing(0, 1.5),
        width: '100%',
        // boxShadow: '0px 0px 10px #dbdbdb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    itemContent: {
        textAlign: 'left',
        flexGrow: 1,
        flexBasis: 0,
    },
    icon: {
        display: 'flex',
        textAlign: 'right',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        textTransform: 'none',
        borderRadius: '0px',
        height: theme.spacing(6),
        backgroundColor: theme.palette.secondary.lighter,
        color: theme.palette.primary.main,
        margin: theme.spacing(1, 0),
    }
}));

const IncidentItem = (props) => {
    const classes = useStyles();
    return <Button key={props.state._id} className={classes.button}>
    <Grid item className={classes.items}>
        <Grid className={classes.itemContent}>

            <Typography variant="body2">{props.state.geographics.municipal}</Typography>
            {/*
             for skeleton loading
                1. wrap a component around typography to add the loading functionality
                2. look into material docs to render props (to determine if it is visable)
            */}
        </Grid>
        <Grid className={classes.itemContent}>
            <Typography variant="body2">{props.state.geographics.state}</Typography>
        </Grid>
        <Grid className={classes.itemContent}>
            <Typography variant="body2">{props.state.incident.priority}</Typography>
        </Grid>
        <Grid className={classes.itemContent}>
            <Typography variant="body2">{props.state.incident.status}</Typography>
        </Grid>
        {/* <Grid className={classes.icon}>
            <ChevronRightIcon />
        </Grid> */}
    </Grid>
</Button>
}

export default IncidentItem;
