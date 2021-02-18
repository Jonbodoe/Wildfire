import React from 'react';
import { Typography } from '@material-ui/core';
import IncidentItem from './IncidentItem';
import IncidentListContainer from './IncidentListContainer';
import IncidentListLabels from './IncidentListLabels';

const Results = (props) => {
    if (props.state && !props.error.message) {
        console.log('hello')
        return props.state.map(item => <IncidentItem key={item._id} state={item} />);
    } else if (!props.state && props.error.message) {
        return <Typography>{props.error.message.message}</Typography>;
    } else {
        return <Typography>Loading...</Typography>;
    }
}

export const IncidentList = (props) => {
    const incidentList = props.state;
    const errorMessage = props.error;
    return <IncidentListContainer
        header="Open Incidents"
    >
        <IncidentListLabels 
            labelOne="Location" 
            labelTwo="State" 
            labelThree="Volume" 
            labelFour="Status"
        />
        {/* 
            Make more scalable 
            Possibly make an array
            output based on the key of the json data/ mongodb
            Object.keys({dataReduxStore})
            loDash function find object keys
        */}
        <Results state={incidentList} error={errorMessage} />
    </IncidentListContainer>
}