import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';
import MapDisplay from '../../components/MapDisplay';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import MapKey from '../maps/MapKey';

const width = 250;

const useStyles = makeStyles((theme) => ({
    details: {
        width: width,
        paddingLeft: theme.spacing(2.5)
    },
    map: {
        width: `calc(100% - ${width}px)`,
        height: theme.spacing(50),
    },
    link: {
        color: theme.palette.secondary.dark
    }
}));


const DashboardMaps = (props) => {
    const classes = useStyles();
    return <>
        <DetailsContainer>
            <Grid container>
                <MapDisplay />
                <Grid className={classes.details}>
                    <Grid container>
                        <DetailsHeader header={`Maps`} />
                        <Link className={classes.link} button="true" component={RouterLink} to={props.path.path}>
                            <ChevronRightIcon />
                        </Link>
                    </Grid>
                    <DetailsCaption caption={`View real time cases and incidents occuring based on the location`} />
                    <Divider />
                    <MapKey/>
                </Grid>
            </Grid>
        </DetailsContainer>
    </>
}

export default DashboardMaps;