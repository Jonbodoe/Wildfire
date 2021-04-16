import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: theme.spacing(10),
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        backgroundColor: theme.palette.secondary.lighter
    },
}))(LinearProgress);

const LoadingBar = () => <BorderLinearProgress variant="indeterminate" />

export default LoadingBar