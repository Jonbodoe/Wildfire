import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
// import _ from "lodash";

const useStyles = makeStyles((theme) => ({
    itemRow: {
        padding: theme.spacing(1, 3),
        width: '100%',
        // boxShadow: '0px 0px 10px #dbdbdb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.primary.light
    },
    itemContent: {
        textAlign: 'left',
        flexGrow: 1,
        flexBasis: 0,
    },
}));
// ['Location', 'State', 'Volume', 'Status']
const IncidentListLabels = (props) => {
    // Not too sure how to use the _pick. if half the data is in two different objects, not in the same root level
    const classes = useStyles();
    return <>
        <Grid item className={classes.itemRow}>
            {
                props.keyLabels.map(label => <Grid key={label} className={classes.itemContent}>
                    <Typography variant="body2">{label}</Typography>
                </Grid>)
            }
        </Grid>
        {props.children}
    </>
}

export default IncidentListLabels;