import { Divider } from '@material-ui/core';
import React from 'react';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LoadingBar from '../../components/LoadingBar';

const useStyles = makeStyles((theme) => ({
    container: {
        maxHeight: '200px',
        overflow: 'auto'
    },
    row: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
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
    },
    rowLink: {
        '&:hover, &:focus': {
            textDecoration: 'none'
        },
    }
}));


const DashboardUpdates = (props) => {
    const { path, updatesData, profilesData } = props;
    const classes = useStyles();
    const updatesInfo = updatesData.map((update) => {
        const profileId = update.general.userId
        const getProfileData = profilesData.filter((profile)=> profileId === profile.information.profileId)
        const [ profileData ] = getProfileData
        return {...update, profileData}
        // concating the profiles data into the updates data based on ID.
    })


    return <>
        <DetailsContainer>
            <Grid container>
                <DetailsHeader header={`Updates`} />
                <Link button="true" className={classes.link} component={RouterLink} to={path.path}>
                    <ChevronRightIcon />
                </Link>
            </Grid>
            <DetailsCaption caption={`Get the latest updates from personnel reviewing and updating incidents and or cases`} />
            <Divider />
            <div className={classes.container}>
                {
                        updatesInfo.map((update, i) => {
                        const {_id, general, profileData, updates} = update;
                        return profileData? <DetailsBlock key={i} hover={true}>
                            <Link component={RouterLink} to={`/updates/${_id}`} className={classes.rowLink}>
                                <div className={classes.row}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item className={classes.iconContainer}>
                                            <Avatar className={classes.icon} src={require(`./../../images/${profileData.information.img_src}`).default}/>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Grid container className={classes.containerSpaceBetween}>
                                                <Typography variant="body2" className={classes.title}>{profileData.information.position}</Typography>
                                                <Typography variant="body2" className={classes.title}>{general.timestamp}</Typography>
                                            </Grid>
                                            <Typography variant="body2" className={classes.name}>{profileData.information.fullname}</Typography>
                                            <Typography variant="body2" className={classes.message} noWrap>{`Updated incident ${updates.incidentArea} regarding the incident's status, click to view more`}</Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Link>
                        </DetailsBlock>
                        :
                        <LoadingBar/>
                    })
                }
            </div>
        </DetailsContainer>
    </>
}

export default DashboardUpdates