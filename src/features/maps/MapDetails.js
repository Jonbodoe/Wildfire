import React from 'react';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsTitle from '../../components/DetailsTitle';
import DetailsContent from '../../components/DetailsContent';
import DetailsHeader from '../../components/DetailsHeader';

const MapDetails = () => {
    return <>
        <DetailsContainer>
            <DetailsHeader header={`Map View`}/>
            <DetailsBlock>
                <DetailsTitle title={`Data Key`}/>
            </DetailsBlock>
            {/* refactoring the details block section to call the detailsTitle / detailsContent inside */}
            <DetailsBlock>
                <DetailsTitle title={`Incident Cases`}/>
                <DetailsContent type={`Title`} content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Photos`}/>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default MapDetails;