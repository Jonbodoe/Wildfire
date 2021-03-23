import { Button, Typography } from '@material-ui/core';
import React from 'react';
import DetailsHeader from '../../components/DetailsHeader';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import MainContainer from '../components/MainContainer';

const announcementData = [
    {
        name: 'William Stagner',
        user_id: '1',
        position: 'Logistics Section Chief',
        message: `Truncation should be conditionally applicable on this long line of text
        as this is a much longer line than what the container can support.`,
        time: '2 mins ago'
    },
    {
        name: 'Ryan Higgins',
        user_id: '2',
        position: 'Incident Commander',
        message: `Truncation should be conditionally applicable on this long line of text
        as this is a much longer line than what the container can support.`,
        time: '10 mins ago'
    },
    {
        name: 'James Kabbeko',
        user_id: '3',
        position: 'Operations Section Chief',
        message: `Truncation should be conditionally applicable on this long line of text
        as this is a much longer line than what the container can support.`,
        time: '13 mins ago'
    },

]
const useStyles = makeStyles((theme) => ({
    container: {
        // maxHeight: '200px'
        margin: theme.spacing(1),
        overflow: 'auto'
    },
    ItemContainer: {
        backgroundColor: theme.palette.secondary.lighter,
        padding: theme.spacing(2, 2.5),
        margin: theme.spacing(1.25, 0)
    },

    row: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        //   overflow: 'hidden',
        //   padding: theme.spacing(0, 3),
    },
    icon: {
        // display: 'flex',
        // alignItems: 'center',
        backgroundColor: theme.palette.secondary.dark,
        padding: theme.spacing(0),
        margin: theme.spacing(0)
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.primary.light,
    },
    name: {
        color: theme.palette.primary.dark,
        fontWeight: '600',
        marginBottom: theme.spacing(0.75)
    },
    containerSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        // backgroundColor: theme.palette.secondary.dark,
        backgroundColor: theme.palette.secondary.lighter,
        // color: theme.palette.secondary.lighter,
        textTransform: 'none',
        borderRadius: '0px',
        height: theme.spacing(10),
    },
    link: {
        color: theme.palette.secondary.dark
    }
}));

const UpdatesList = () => {
    const classes = useStyles();
    return <div className={classes.container}>
        <DetailsHeader header={`Updates`} />
        {
            announcementData.map((announcement, i) => (
                <Grid item className={classes.ItemContainer}>
                    <div className={classes.row}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item className={classes.iconContainer}>
                                <Avatar className={classes.icon}>{announcement.name.charAt(0)}</Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid className={classes.containerSpaceBetween}>
                                    {/* <Grid xs={6}> */}
                                        <Typography variant="body2" className={classes.title}>{announcement.position}</Typography>
                                    {/* </Grid>
                                    <Grid xs={6}> */}
                                        <Typography variant="body2" className={classes.title}>{announcement.time}</Typography>
                                    {/* </Grid> */}
                                </Grid>
                                <Grid>
                                    <Typography variant="body2" className={classes.name}>{announcement.name}</Typography>
                                    <Typography variant="body2" className={classes.message} noWrap>{announcement.message}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            )
        )}
        </div>
    
}

export default UpdatesList