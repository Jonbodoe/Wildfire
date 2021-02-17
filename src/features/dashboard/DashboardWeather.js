import { Divider } from '@material-ui/core';
import React from 'react';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';

const DashboardWeather = () => {
    return <>
        <DetailsContainer>
            <DetailsHeader header={`Weather`}/>
            <DetailsCaption caption={`Get real-time information based on the current location`}/>
            <Divider/>
            <DetailsBlock>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default DashboardWeather;