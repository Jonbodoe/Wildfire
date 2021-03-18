import React from 'react';
import MainContainer from '../components/MainContainer';
import { Grid } from '@material-ui/core';
import DetailsContainer from '../components/DetailsContainer';
import DetailsHeader from '../components/DetailsHeader';

const Summary = () => {
        return <MainContainer>
        <Grid item md={6}>
            <DetailsContainer>
                
                <DetailsHeader header={`incident`} />
                
            </DetailsContainer>
        </Grid>
        <Grid item md={6}>

        </Grid>
    </MainContainer>
}


// const blocks =  [
//     {
//         title: 'Incident Information',
//         rows:  [
//             { type: 'Incident', content: geographics.municipal },
//             { type: 'State', content: geographics.state }, 
//             { type: 'Region', content: geographics.region }, 
//             { type: 'ID', content: selectedIncident._id.substr(selectedId.length - 5) }, 
//             { type: 'Initial Time', content: `${geographics.time_stamp} ${geographics.time_zone} `}, 
//             { type: 'Zipcodes Affected', content: incident.zip_codes.map(zip => `${zip}, `) }
//         ] 
//     },
//     {
//         title: 'Areas Affected',
//         rows:  [
//             { type: 'Volume Traffic', content: incident.volume_traffic },
//             { type: 'Property', content: incident.property.map(property => `${property}, `) },
//             { type: 'Wildfire Type', content: incident.wildfire_type },
//         ] 
//     },
//     {
//         title: 'Additional Notes',
//         rows:  [
//             { content: 'Lorem ipsum dolor sit amet' },
//         ] 
//     }
// ];

export default Summary