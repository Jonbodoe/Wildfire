import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid } from "@material-ui/core"
import DetailsBlock from '../../components/DetailsBlock';
import DetailsHeader from '../../components/DetailsHeader';
import LoadingBar from '../../components/LoadingBar';

const useStyles = makeStyles((theme) => ({
    divider: {
        margin: theme.spacing(0.75, 0)
    },
    imageContainer: {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(2)
    },
    image: {
        maxWidth: '100%',
        height: 'auto'
    }
}));

const SummaryBlocks = (props) => {
    const [api, setApi] = useState();
    const { incident } = props;
    const municipal = incident.geographics.municipal;
    const coordinates = incident.geographics.geolocation_radius;
    const cases = incident.incident.cases;
    const classes = useStyles();
    const formattedIncidents = dataIncidentBlocks(incident);
    const formattedCases = dataCaseDetails(cases);
    const [incidentBlocks] = formattedIncidents;
    const { incidentDetails } = incidentBlocks;
    const [caseBlocks] = formattedCases;
    const { caseDetails } = caseBlocks;

    useEffect(() => {
        fetch(`${'https://wildfireics-app.herokuapp.com'}/api/mapbox`)
        .then(function (response) {
            if (!response.ok) {
                console.log(response.statusText)
            }
            return response.json();
        }).then(function (response) {
            return response;
        }).then(items => {
            setApi(items);
        }).catch(function (error) {
            console.log(error)  
        });
    }, [setApi])
    

    return <>
        { api ?
            <>
                <Grid item md={6}>
                    <Divider className={classes.divider} />
                    <DetailsHeader header={municipal} />
                    {
                        incidentDetails.map((block, i) => <DetailsBlock key={i} title={block.title} detailRows={block.rows} />)
                    }
                    <DetailsHeader header={'Cases Associated with Incident'} />
                    {
                        caseDetails.map((block, i) => <DetailsBlock key={i} title={block.title} detailRows={block.rows} />)
                    }
                </Grid>
                <Grid item md={6}>
                    <div className={classes.imageContainer}>
                    {
                        <img 
                        className={classes.image}
                        alt='static Mapbox map of the San Francisco bay area' 
                        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${coordinates.lat},${coordinates.long},9.67,0.00,0.00/800x800@2x?access_token=${api.token}`}
                        />
                    }
                    </div>
                </Grid>
            </>
            :
            <LoadingBar />
        }
    </>
}


const dataIncidentBlocks = (incidentData) => {
    const { _id, geographics, incident } = incidentData;

    const blocks = [
        {
            incidentDetails: [
                {
                    title: 'Incident Information',
                    rows: [
                        { type: 'Incident', content: geographics.municipal },
                        { type: 'State', content: geographics.state },
                        { type: 'Region', content: geographics.region },
                        { type: 'ID', content: _id.substr(_id.length - 5) },
                        { type: 'Initial Time', content: `${geographics.time_stamp} ${geographics.time_zone} ` },
                        { type: 'Zipcodes Affected', content: incident.zip_codes.map(zip => `${zip}, `) }
                    ]
                },
                {
                    title: 'Areas Affected',
                    rows: [
                        { type: 'Volume Traffic', content: incident.volume_traffic },
                        { type: 'Api Keywords', content: incident.api_keywords.map(keyword => `${keyword}, `) },
                        { type: 'Property', content: incident.property.map(property => `${property}, `) },
                        { type: 'Wildfire Type', content: incident.wildfire_type },
                        { type: 'Priority', content: incident.priority },
                        { type: 'Additional Notes', content: incident.additional_notes },
                    ]
                },
            ]
        },
    ];
    return blocks;
}

export default SummaryBlocks;


const dataCaseDetails = (casesData) => {
    // console.log(casesData, 'its moe!');
    const mapCases = casesData.map((caseData, i) => {
        return {
            title: `Case Information: Zip Code ${caseData.zip_code}`,
            rows: [
                { type: 'Zip Code', content: caseData.zip_code },
                { type: 'Initial Time', content: caseData.initial_time },
                { type: 'Authorities Present', content: caseData.authorities_present },
                { type: 'Data Volume', content: caseData.volume_traffic },
                { type: 'Images from cases', content: 'Will be attached in PDF / Email'},
                { type: 'Additional Notes', content: caseData.additional_notes },
                { type: 'Hazard Warnings', content: caseData.hazard_warnings },
                { type: 'Valuable Assests', content: caseData.valuable_assets },
            ]
        }
    })
    const blocks = [
        {
            caseDetails: [
                ...mapCases
            ]
        }
    ];
    return blocks;
}