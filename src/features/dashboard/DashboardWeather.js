import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import DetailsBlock from '../../components/DetailsBlock';
import { makeStyles } from '@material-ui/core/styles';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';
import CloudIcon from '@material-ui/icons/Cloud';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    column: {
        justifyContent: 'center',
        textAlign: 'center'
    },
    weatherIcon: {
        color: theme.palette.primary.light,
        fontSize: '60px'
    },
    temperature: {
        fontSize: '2rem',
        fontWeight: '500'
    },
    textBold: {
        fontWeight: '500'
    },
    weatherInfo: {
        padding: theme.spacing(2),
        color: theme.palette.primary.light
    }
}));

const WeatherData = {
    location: 'Los Angeles',
    weatherType: 'Cloudy',
    temperature: '74°F',
    windSpeed: 'NE 8mph',
    humidity: '05%',
    precipitation: '05%',
    groundTemp: '74°F',
    lastRained: '4 weeks ago'
}

const DashboardWeather = () => {
    
    const classes = useStyles();
    return <>
        <DetailsContainer>
            <DetailsHeader header={`Weather`}/>
            <DetailsCaption caption={`Get real-time information based on the current location`}/>
            <Divider/>
            <DetailsBlock>
                <Grid container className={classes.container}>
                    <Grid item md={5} className={classes.column}>
                        <CloudIcon className={classes.weatherIcon}/>
                        <Typography variant="body2" className={classes.textBold}>{WeatherData.weatherType}</Typography>
                        <Typography variant="body2" className={classes.temperature}>{WeatherData.temperature}</Typography>
                    </Grid>
                    <Grid item md={7} className={classes.weatherInfo}>
                        <Grid container>
                            <Typography variant="body2" className={classes.textBold}>Precipitation:</Typography>
                            <Typography variant="body2">{WeatherData.precipitation}</Typography>
                        </Grid>
                        <Grid container>
                            <Typography variant="body2" className={classes.textBold}>Wind:</Typography>
                            <Typography variant="body2">{WeatherData.windSpeed}</Typography>
                        </Grid>
                        <Grid container>
                            <Typography variant="body2" className={classes.textBold}>Humidity:</Typography>
                            <Typography variant="body2">{WeatherData.humidity}</Typography>
                        </Grid>
                        <Grid container>
                            <Typography variant="body2" className={classes.textBold}>Ground Temp:</Typography>
                            <Typography variant="body2">{WeatherData.groundTemp}</Typography>
                        </Grid>
                        <Grid container>
                            <Typography variant="body2" className={classes.textBold}>Last Rained:</Typography>
                            <Typography variant="body2">{WeatherData.lastRained}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DetailsBlock>
        </DetailsContainer>
    </>
    // https://www.weatherbit.io/account/dashboard
}

export default DashboardWeather;