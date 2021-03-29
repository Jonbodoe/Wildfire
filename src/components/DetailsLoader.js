import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 8,
    },
    colorPrimary: {
      backgroundColor: theme.palette.secondary.lighter,
    },
    bar: {
      backgroundColor: theme.palette.secondary.light,
    },
  }))(LinearProgress);

const DetailsLoader = (props) => {
    return props.loading?  <LinearProgress variant="determinate"/> : props.children
}

export default DetailsLoader;