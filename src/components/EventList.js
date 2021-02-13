import React from 'react';
import { Typography } from '@material-ui/core';
import EventItem from './EventItem';
import EventListContainer from './EventListContainer';

const Results = (props) => {
    if (props.state && !props.error.message) {
        return props.state.map(item => <EventItem key={item._id} state={item} />);
    } else if (!props.state && props.error.message) {
        return <Typography>{props.error.message.message}</Typography>;
    } else {
        return <Typography>Loading...</Typography>;
    }
}

export const EventList = (props) => {
    const incidentList = props.state;
    const errorMessage = props.error;
    return <EventListContainer>
        <Results state={incidentList} error={errorMessage} />
    </EventListContainer>
}