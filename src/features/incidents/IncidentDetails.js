import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsTitle from '../../components/DetailsTitle';
import DetailsContent from '../../components/DetailsContent';
import DetailsHeader from '../../components/DetailsHeader';
import { useSelector } from 'react-redux';
import _ from "lodash";
import {
    selectIncident,
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
    const classes = useStyles();
    const [loading, setloading] = useState(false);

    const selectedId = useSelector(selectIncident);
    const selectedIncident = props.state.find((incident) => !incident._id.indexOf(selectedId));

    useEffect(() => {
        setloading(_.isEmpty(props.state) ? true : false);
    }, [props.state]);


    return <DetailsContainer query={!loading && !_.isEmpty(props.state) ? selectedIncident.incident.status : ''}>
        {
            !loading && !_.isEmpty(props.state) ?
                <>
                    {/* <DetailsLoader loading={loading}> */}
                    {/* 
                        Wanted to implemenet the lazy-loading effect on the content within by passing a loading prop like <DetailsHeader loading={loading}/> itself 
                        and tried wrapping it in <DetailsLoader loading={loading}>...</DetailsLoader>, however when I try to pass the data without the condition on 
                        line 57, it throws an error immediately since the data hasn't been mounted yet. 

                        How would you go about creating the lazy-loading component? 
                    */}
                    <DetailsHeader header={`Incident: ${selectedIncident.geographics.municipal}`} />
                    {/* </DetailsLoader> */}
                    <DetailsBlock title={'test'} type={'test'} content={"helo"}>
                        <DetailsTitle title={`Incident Information`} />
                        <DetailsContent type='Incident' content={selectedIncident.geographics.municipal} loading={loading} />
                        <DetailsContent type='State' content={selectedIncident.geographics.state} />
                        <DetailsContent type='Region' content={selectedIncident.geographics.region} />
                        <DetailsContent type='ID' content={selectedIncident._id.substr(selectedId.length - 5)} />
                        <DetailsContent type='Initial Time' content={`${selectedIncident.geographics.time_stamp} ${selectedIncident.geographics.time_zone} `} />
                        <DetailsContent type='Zipcodes Affected' content={selectedIncident.incident.zip_codes.map(zip => `${zip}, `)} />
                        {/*
                             Would was going to pass the information in two arrays like <DetailsBlock type={[...]} content={[...]}/> however, 
                             i'm not too sure how to go about mapping out two different arrays at the same time. 
                             got any ideas? 

                             Would use the _.pick lodash method but the string of type's is slightly different from the schema's object keys
                        */}
                    </DetailsBlock>
                    <DetailsBlock>
                        <DetailsTitle title={`Incident Cases`} />
                        <DetailsTable 
                            data={selectedIncident.incident.cases} 
                            allowedKeys={["zip_code", "initial_time", "volume_traffic"]}
                            tableHeader={["Zip Code", "Initial Time", "Volume Traffic"]}
                            // Needa figure this out for the cell rows display to make it more reuseable 
                        />
                    </DetailsBlock>
                    <DetailsBlock>
                        <DetailsTitle title={`Areas Affected`} />
                        <DetailsContent type="Volume Traffic" content={selectedIncident.incident.volume_traffic} />
                        <DetailsContent type="Property" content={selectedIncident.incident.property.map(property => `${property}, `)} />
                        <DetailsContent type="Wildfire Type" content={selectedIncident.incident.wildfire_type} />
                    </DetailsBlock>
                    <DetailsBlock>
                        <DetailsTitle title={`Additional Notes`} />
                        <DetailsContent type={`Title`} content={'Lorem ipsum dolor sit amet'} />
                    </DetailsBlock>
                    <DetailsBlock>
                        <DetailsTitle title={`Incident Progress`} />
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