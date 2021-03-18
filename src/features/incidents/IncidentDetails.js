import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsHeader from '../../components/DetailsHeader';
import { useSelector } from 'react-redux';
import _ from "lodash";
import {
    selectIncident, getDetailBlocks
} from '../../app/reducers/incidents/incidentSlice'
import { LinearProgress } from '@material-ui/core';
// import DetailsLoader from '../../components/DetailsLoader';
import DetailsTable from '../../components/DetailsTable';

const useStyles = makeStyles((theme) => ({
    openLabel: {
        borderColor: theme.palette.warning.light
    },
    reviewingLabel: {
        borderColor: theme.palette.info.light
    },
    mustResolveLabel: {
        borderColor: theme.palette.error.light
    },
    resolvedLabel: {
        borderColor: theme.palette.success.light
    },
}));
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: theme.spacing(10),
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        backgroundColor: theme.palette.secondary.lighter
    },
}))(LinearProgress);

const IncidentDetails = (props) => {
    const { incidents } = props;
    // console.log(incidents)
    const classes = useStyles();
    const isLoaded = !_.isEmpty(incidents);
    const [loading, setloading] = useState(isLoaded);
    const selectedId = useSelector(selectIncident);
    const detailBlocks = useSelector(getDetailBlocks);
    const selectedIncident = incidents.find((incident) => !incident._id.indexOf(selectedId));

    useEffect(() => {
        setloading(!isLoaded ? true : false);
    }, [incidents]);

    // There's no point rendering the rest of this component until a selectedIncident is defined. Shaves time off each re-render.
    if(!selectedIncident) { return null; }

    // deconstruct these properties for a little cleaner code
    const { geographics, incident } = selectedIncident;

    return <DetailsContainer query={!loading && !isLoaded ? incident.status : ''}>
        {
            !loading ?
                <>
                    {/* <DetailsLoader loading={loading}> */}
                    {/* 
                        Wanted to implemenet the lazy-loading effect on the content within by passing a loading prop like <DetailsHeader loading={loading}/> itself 
                        and tried wrapping it in <DetailsLoader loading={loading}>...</DetailsLoader>, however when I try to pass the data without the condition on 
                        line 57, it throws an error immediately since the data hasn't been mounted yet. 

                        How would you go about creating the lazy-loading component? 
                    */}
                    <DetailsHeader header={`Incident: ${geographics.municipal}`} />
                    {/* </DetailsLoader> */}

                    {/**
                     * I think the DetailsBlock component can do more
                     * heavy-lifting to help clean up this component more --
                     * right now it's just rendering `children`, and 
                     * not providing much value beyond a generic React component. But it has a very common pattern of displaying data.
                     * We're also doing a lot of data formatting and transformation here, in the presentational component -- that's a job for redux middleware functions.
                     * See 'getDetailBlocks' in incidentSlice.js
                     *  
                     */}
                    {detailBlocks.map((block, i) => <DetailsBlock key={i} title={block.title} detailRows={block.rows} />
                    )}
                        {/*
                             Would was going to pass the information in two arrays like <DetailsBlock type={[...]} content={[...]}/> however, 
                             i'm not too sure how to go about mapping out two different arrays at the same time. 
                             got any ideas? 

                             Would use the _.pick lodash method but the string of type's is slightly different from the schema's object keys

                             ---

                             Yep! Sometimes it's easier to format data in a cleaner way before we pass it to a React component -- there's no rule that says you have to use JSON exactly the way it comes from an API call! :) 
                             In fact, it's pretty common to adjust data from a fetch response in a way that is easier to work with -- this practice is called data transformation. It's typically done to make data as close 
                             to "final" formats, look friendlier, like formatting timestamps, or flatten deeply nested JSON.

                             The most appropriate place to do that in a React/Redux application is closer to the reducer, usually done in redux middleware.

                             I added an example function of this in incidentSlice.js: getDetailBlocks
                                             
                        */}
                    <DetailsBlock title={`Incident Cases`} >
                        <DetailsTable 
                            data={incident.cases} 
                            allowedKeys={["zip_code", "initial_time", "volume_traffic"]}
                            tableHeader={["Zip Code", "Initial Time", "Volume Traffic"]}
                            // Needa figure this out for the cell rows display to make it more reuseable 
                        />
                    </DetailsBlock>
                </>
                :
                <>
                    <BorderLinearProgress variant="indeterminate" />
                </>
        }
    </DetailsContainer>
}

export default IncidentDetails;
