import React, { useState } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardArrowUp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(1, 2)
    },
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
    },
    text: {
        padding: theme.spacing(1,0)
    },
    openIcon: {
        transform: "rotate(0deg)",
        transition: theme.transitions
    },
    closeIcon: {
        transform: "rotate(180deg)",
        transition: theme.transitions
    }
}));


const IncidentListContainer = (props) => {
    const [toggleShow, setToggleShow] = useState(true);
    const classes = useStyles();
    return <Grid className={classes.container}>
        <Grid className={classes.headerRow}>
            <Typography variant="body1" className={classes.header}>{props.header}</Typography>
            <Grid className={`
                ${classes.icon} 
                ${toggleShow ? classes.openIcon : classes.closeIcon}
            `}>
                <KeyboardArrowUp onClick={() => { setToggleShow(!toggleShow) }} />
            </Grid>
        </Grid>
        <Divider />
        {
            toggleShow ? props.children : <></>
        }
    </Grid>
}

export default IncidentListContainer;