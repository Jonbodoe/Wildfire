import { Divider } from '@material-ui/core';
import React from 'react';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';

const DashboardIncidents = () => {
    return <>
        <DetailsContainer>
            <DetailsHeader header={`Incidents`}/>
            <DetailsCaption caption={`Information regarding on-going incidents based on the current and or designated location`}/>
            <Divider/>
            <DetailsBlock>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default DashboardIncidents;