import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        borderTop: '4px solid',
        margin: theme.spacing(2,2),
        padding: theme.spacing(2,3),
        backgroundColor: theme.palette.secondary.lighter,
        boxShadow: '0px 0px 10px #dbdbdb',
    },
    openLabel: {
        borderColor: theme.palette.warning.light
    },
    reviewingLabel: {
        borderColor: theme.palette.info.light
    },
    mustResolveLabel: {
        borderColor: theme.palette.error.light
    },
    resolvedLabel: {
        borderColor: theme.palette.success.light
    },
    standardLabel: {
        borderColor: theme.palette.secondary.main
    }
}));  

const DetailsContainer = (props) => {
    const labelColorSwitch = (query) => {
        switch (query) {
            case "Open": return classes.openLabel;
            case "Reviewing": return classes.reviewingLabel;
            case "Must Resolve": return classes.mustResolveLabel;
            case "Resolved": return classes.resolvedLabel;
            default: return classes.standardLabel
        }
    }
    const classes = useStyles();
    return <Grid className={`${classes.container} ${labelColorSwitch(props.query)}`}>
        {props.children}
    </Grid>
}

export default DetailsContainer;