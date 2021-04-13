import React, {useEffect} from 'react';
import DetailsContainer from '../../components/DetailsContainer';
import DetailsBlock from '../../components/DetailsBlock';
import DetailsTitle from '../../components/DetailsTitle';
import DetailsContent from '../../components/DetailsContent';
import DetailsHeader from '../../components/DetailsHeader';
import DetailsUser from '../../components/DetailsUser';
import { Divider} from '@material-ui/core';
import { useParams } from 'react-router';
import { getUpdateId, selectUpdate } from '../../app/reducers/updates/updateSlice';
import { useDispatch, useSelector } from 'react-redux';

const UpdateDetails = () => {
    const { updateId } = useParams();
    const selectedId = useSelector(getUpdateId);
    const dispatch = useDispatch();
    // console.log(updateId, 'iddd')

    useEffect(() => {
        // setloading(!isLoaded ? true : false);
        if (!selectedId) {
            dispatch(selectUpdate(updateId));
        }
        // If hard refresh, dispatch a select incident id based on the URL params to keep in sync
        // Self: If want to keep the tabs in sync use local storage to store data alternative to useEffect.
    }, [selectedId]);

    return <>
        <DetailsContainer>
            <DetailsHeader header={`Update Information`}/>
            <DetailsUser/>
            <Divider/>
            <DetailsBlock>
                <DetailsTitle title={`Incident Information`}/>
                <DetailsContent type='Incident' content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type='ID' content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type='Initial Date' content={'Lorem ipsum dolor sit amet'}/>
                <DetailsContent type='Zipcodes Affected' content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            {/* refactoring the details block section to call the detailsTitle / detailsContent inside */}
            <DetailsBlock>
                <DetailsTitle title={`Incident Cases`}/>
                <DetailsContent type={`Title`} content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Additional Notes`}/>
                <DetailsContent type={`Title`} content={'Lorem ipsum dolor sit amet'}/>
            </DetailsBlock>
            <DetailsBlock>
                <DetailsTitle title={`Incident Progress`}/>
            </DetailsBlock>
        </DetailsContainer>
    </>
}

export default UpdateDetails;