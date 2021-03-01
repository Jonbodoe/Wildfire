import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
    //   borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.secondary.lighter,
    },
    bar: {
    //   borderRadius: 5,
      backgroundColor: theme.palette.secondary.light,
    },
  }))(LinearProgress);

const DetailsLoader = (props) => {
    // const classes = BorderLinearProgress();
    console.log(props.loading)
    return props.loading?  <LinearProgress variant="determinate"/> : props.children
}

export default DetailsLoader;