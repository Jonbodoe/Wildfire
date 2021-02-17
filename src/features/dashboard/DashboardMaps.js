import { Divider } from '@material-ui/core';
import React from 'react';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';

const DashboardMaps = () => {
    return <>
        <DetailsContainer>
            <DetailsHeader header={`Maps`}/>
            <DetailsCaption caption={`View real time cases and incidents occuring based on current and or designated location`}/>
            <Divider/>
            <DetailsBlock>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default DashboardMaps;