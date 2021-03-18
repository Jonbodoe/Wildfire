import React from 'react';
// import { pick } from 'lodash.pick';
// import { useSelector } from 'react-redux';
import IncidentFilterList from './IncidentFilterList';
import IncidentListCategories from './IncidentListCategories';

const IncidentList = (props) => {
    const incidentsListStatuses = ["Open", "Reviewing", "Must Resolve", "Resolved"];
    // console.log(props.state,'from list')
    return <>
        {
            incidentsListStatuses.map(status => {
                return <IncidentListCategories
                    key={status}
                    header={status}
                    state={props.state}
                    error={props.error}
                >
                    <IncidentFilterList
                        filterQuery={status}
                        state={props.state}
                        error={props.error}
                    />
                </IncidentListCategories>
            })
        }
        
    </>
}

export default IncidentList