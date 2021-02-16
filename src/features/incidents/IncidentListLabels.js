import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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
    // itemLocation: {
    //     textAlign: 'left',
    //     flexGrow: 2,
    //     flexBasis: 0,
    // },
    icon: {
        display: 'flex',
        textAlign: 'right',
        alignItems: 'center',
    },
    header: {
        paddingBottom: theme.spacing(1.5),
        fontWeight: '600'
    },
    headerRow: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}));

const EventListLabels = (props) => {
    const classes = useStyles();
    return <>
        {/* <Grid className={classes.headerRow}>
            <Typography variant="body1" className={classes.header}>{props.header}</Typography>
            <Grid className={classes.icon}>
                <KeyboardArrowUp />
            </Grid>
        </Grid> */}
        <Grid item className={classes.itemRow}>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.labelOne}</Typography>
            </Grid>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.labelTwo}</Typography>
            </Grid>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.labelThree}</Typography>
            </Grid>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.labelFour}</Typography>
            </Grid>
        </Grid>
        {props.children}
    </>
}

export default EventListLabels;