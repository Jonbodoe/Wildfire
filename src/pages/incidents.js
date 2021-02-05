import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
// import { DataGrid } from '@material-ui/data-grid';


const useStyles = makeStyles((theme) => ({
    items: {
        margin: theme.spacing(1,0),
        width: '100%',
        height: theme.spacing(5),
        boxShadow: '0px 0px 10px #dbdbdb',
        backgroundColor: theme.palette.secondary.lighter,
        display: 'flex',
        alignItems: 'center'
    },
}));

const Incidents = () => {
    const classes = useStyles();
    return <MainContainer>
        <Grid item md={12}> 
            <PageTitle title={"Incidents"} />
        </Grid>
        <Grid item md={6}>
            <Grid item className={classes.items}>
                <Typography>Hello</Typography>
            </Grid>
        </Grid>
        <Grid item md={6}>
        </Grid>
    </MainContainer>
}

export default Incidents