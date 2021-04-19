

// NOT REAL MIDDLEWARE, PLACEMENT FOR NOW UNTIL FINDING A MIDDLEWARE SOLUTION


const updateIncident = (incidentList, values, id) => {
    const filterIncidents = incidentList.map(item => {
        const {_id, geographics, incident} = item;
        if ( item._id !== id) {
            return item;
        }
        const updateValues = (incident, values) => {
            const { status, priority, additional_notes } = values;
            return {
                ...incident,
                status: status,
                priority: priority,
                additional_notes: additional_notes
            }
        }
        return {
            _id,
            geographics,
            incident: updateValues(incident, values)
        }
    })
    return filterIncidents || {};
}

export default updateIncident;