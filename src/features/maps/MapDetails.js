import React, { useState, useEffect } from 'react';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsTitle from '../../components/DetailsTitle';
// import DetailsContent from '../../components/DetailsContent';
import DetailsHeader from '../../components/DetailsHeader';
import MapKey from './MapKey';
import { useSelector } from 'react-redux';
import { listIncidents } from '../../app/reducers/incidents/incidentSlice';
import { isEmpty } from 'lodash-es';
import DetailsTable from '../../components/DetailsTable';
import LoadingBar from '../../components/LoadingBar';
import CaseImageList from '../incidents/CaseImageList';

const ImageList = [
    {
        img_src: 'fireExample4.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample5.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample6.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample7.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample8.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample9.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample1.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample2.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
    {
        img_src: 'fireExample3.jpg',
        caption: 'Wildfire occuring from the horizon of San Bernadino'
    },
]


const MapDetails = () => {
    const [isLoading, setLoading] = useState(true)
    const incidentsList = useSelector(listIncidents);

    useEffect(() => {
        setLoading(isEmpty(incidentsList));
    }, [incidentsList])

    if (isEmpty(incidentsList)) return null;

    const getIncidentsList = incidentsList.filter(
        (incident) => incident.incident.status !== "Resolved"
    );
    const formattedIncidents = getIncidentsList.map((data) => {
        const { _id } = data;
        return { _id, ...data.incident, ...data.geographics };
    });


    return <>
        <DetailsContainer>
            <DetailsHeader header={`Map View`} />
            <DetailsBlock>
                {/* <DetailsTitle title={`Data Key`}/> */}
                <MapKey colSize1={1} colSize2={11} />
            </DetailsBlock>
            {/* refactoring the details block section to call the detailsTitle / detailsContent inside */}
            <DetailsBlock>
                <DetailsTitle title={`Incidents Shown`} />
                {
                    !isLoading ?
                        <DetailsTable
                            data={formattedIncidents}
                            linkAccessors={"_id"}
                            path={"/incidents"}
                            allowedKeys={[
                                "municipal",
                                "priority",
                                "status",
                                "volume_traffic",
                                "_id",
                            ]}
                            tableHeader={["Municipal", "Priority", "Status", "Volume", "Id"]}
                        />
                    :
                        <LoadingBar />
                }
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Photos`} />
                <CaseImageList images={ImageList}/>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default MapDetails;