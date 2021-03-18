import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import IncidentItem from './IncidentItem';

const IncidentFilterList = (props) => {
    const filteredList = props.state.filter((incident)=> incident.incident.status.toLowerCase() === props.filterQuery.toLowerCase());
    return <>   
        {
            filteredList ? filteredList.map((incident) => {
                return <IncidentItem key={incident._id} state={incident} query={props.filterQuery}/>
            })
            :
            <></>
        }
    </>
}

export default IncidentFilterList