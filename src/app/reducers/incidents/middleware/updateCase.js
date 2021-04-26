
// NOT REAL MIDDLEWARE, PLACEMENT FOR NOW UNTIL FINDING A MIDDLEWARE SOLUTION


const updateCase = (incidentList, values, incidentId, caseId) => {
    const filterIncidents = incidentList.map(item => {
        const { _id } = item;
        if (_id !== incidentId) {
            return item;
        }
    })
    return filterIncidents;
}

export default updateCase;


// const updateCase = (incidentList, values, incidentId, caseId) => {
//     const filterCases = incidentList.map(item => {
//         const {_id, geographics, incident} = item;
//         const {cases} = incident;
//         if (item._id !== incidentId) {
//             return item;
//         }
//         const filterCase = cases.find((info) => caseId === info.zip_code)
//         // find((update) => !update._id.indexOf(state.update.data.selectedUpdateId))
//         const updateValues = (incident, values) => {
//             const { additional_notes, reviewed, hazard_warning, valuable_assets } = values;
//             return {
//                 ...incident,
//                 cases: [
//                     ...cases,
//                     {
//                         ...filterCase,
//                         reviewed: reviewed,
//                         hazard_warning: hazard_warning,
//                         valuable_assets: valuable_assets,
//                         additional_notes: additional_notes
//                     }
//                 ]
//             }
//         }
//         return {
//             _id,
//             geographics,
//             incident: updateValues(incident, values, cases, filterCase)
//         }
//     })
//     return filterCases || {};
// }

// export default updateCase;