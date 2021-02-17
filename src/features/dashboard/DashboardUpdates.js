import { Divider } from '@material-ui/core';
import React from 'react';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsCaption from '../../components/DetailsCaption';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsHeader from '../../components/DetailsHeader';
// import DetailsTitle from '../../components/DetailsTitle';

const DashboardUpdates = () => {
    return <>
        <DetailsContainer>
            <DetailsHeader header={`Updates`}/>
            <DetailsCaption caption={`Get the latest updates from personnel reviewing and updating incidents and or cases`}/>
            <Divider/>
            <DetailsBlock>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default DashboardUpdates