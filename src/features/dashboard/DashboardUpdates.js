import { Divider } from '@material-ui/core';
import React from 'react';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const announcementData = [
    {
        name: 'William Stagner',
        position: 'Logistics Section Chief',
        message: `Truncation should be conditionally applicable on this long line of text
        as this is a much longer line than what the container can support.`,
        time: '2 mins ago'
    },
    {
        name: 'Ryan Higgins',
        position: 'Incident Commander',
        message: `Truncation should be conditionally applicable on this long line of text
        as this is a much longer line than what the container can support.`,
        time: '10 mins ago'
    },
    {
        name: 'James Kabbeko',
        position: 'Operations Section Chief',
        message: `Truncation should be conditionally applicable on this long line of text
        as this is a much longer line than what the container can support.`,
        time: '13 mins ago'
    },

]

const useStyles = makeStyles((theme) => ({
    container: {
        maxHeight: '200px',
        overflow: 'auto'
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
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.lighter,
        padding: theme.spacing(0),
        margin: theme.spacing(0)
    },
    link: {
        color: theme.palette.secondary.dark
    }
}));

const DashboardUpdates = (props) => {
    const classes = useStyles();
    return <>
        <DetailsContainer>
            <Grid container>
                <DetailsHeader header={`Updates`} />
                <Link button="true" className={classes.link} component={RouterLink} to={props.path.path}>
                    <ChevronRightIcon/>
                </Link>
            </Grid>
            {/* <DetailsHeader header={`Updates`} /> */}
            <DetailsCaption caption={`Get the latest updates from personnel reviewing and updating incidents and or cases`} />
            <Divider />
            <div className={classes.container}>
                {
                    announcementData.map((announcement, i) => 
                    <DetailsBlock key={i}>
                        <div className={classes.row}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item className={classes.iconContainer}>
                                    <Avatar className={classes.icon}>{announcement.name.charAt(0)}</Avatar>
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Grid container className={classes.containerSpaceBetween}>
                                        <Typography variant="body2" className={classes.title}>{announcement.position}</Typography>
                                        <Typography variant="body2" className={classes.title}>{announcement.time}</Typography>
                                    </Grid>
                                    <Typography variant="body2" className={classes.name}>{announcement.name}</Typography>
                                    <Typography variant="body2" className={classes.message} noWrap>{announcement.message}</Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </DetailsBlock>           
                    )
                }
            </div>
        </DetailsContainer>
    </>
}

export default DashboardUpdates