import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
    selected,
    select
} from './../../app/reducers/incidentSlice'
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
        color: theme.palette.primary.main,
        // backgroundColor: theme.palette.secondary.lighter,
        // color: theme.palette.primary.main,
        // margin: theme.spacing(1, 0),
    },
    inactive: {
        backgroundColor: theme.palette.secondary.lighter,
        margin: theme.spacing(1, 0),
    },
    active: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
        '&$hover': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&$active': {
            backgroundColor: theme.palette.secondary.main,
        },
    }
}));

const IncidentItem = (props) => {
    // console.log('hello')
    // const [id, setId] = useState('');

    const setSelectedId = (event) => {
        console.log(event);
        dispatch(select(event))
    };
    // dispatch(setSelectedId(e.target.value))
    const dispatch = useDispatch()
    // console.log(dispatch(increment()), useSelector(selected))
    const selectedId = useSelector(selected)
    // console.log(selectedId)
    const classes = useStyles();
    return <Button 

            key={props.state._id} 
            data-id={props.state._id} 
            className={`${classes.button} ${props.state._id === selectedId ? classes.active : classes.inactive}`} 
            onClick={(e) => setSelectedId(e.currentTarget.dataset.id)}
        >
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
        </Grid>
    </Button>
}

export default IncidentItem;
