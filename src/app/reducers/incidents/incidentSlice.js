import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIncidents = createAsyncThunk('incidents/fetchIncidents', async () => {
    const response = fetch(`${process.env.PORT || 'http://localhost:8080'}/incidents/get-incidents-db`)
    // downloaded a fetch polyfill 
    .then(function(response) {
        if (!response.ok) {
            return response.statusText
        }
        return response.json();
    })
    return response
});

export const incidentSlice = createSlice({
    name: 'incident',
    initialState: {
        meta: {
            status: 'idle',
            fetch: true,
            errorLog: {
                error: false,
                message: '',
                errorCode: '',
            }
        },
        data: {
            selectedIncidentId: '603c75eef0c670878ff38a76',
            incidentList: []
        }
    },
    reducers:{
        select: (state, {payload}) => {
            state.data.selectedIncidentId = payload;
            state.meta.status = 'success';
        },
    },
    extraReducers: {
        [fetchIncidents.pending]: (state) => {
            state.meta.status = 'loading';
        },
        [fetchIncidents.fulfilled]: (state, action) => {
            state.meta.status = 'success';
            state.data.incidentList = action.payload;
            // Need to figure out how to go about refreshing data 
        },
        [fetchIncidents.rejected]: (state, action) => {
            state.meta.status = 'failed';
            state.meta.error = action.error.message
            // state.data.incidentList = payload;
        },
    },
});



export const { select, get } = incidentSlice.actions;

export const selectIncident = state => state.incidents.data.selectedIncidentId;
export const listIncidents = state => state.incidents.data.incidentList;
export const errorLog = state => state.incidents.meta.errorLog;
export const refreshState = state => state.incidents.meta.refresh;
// For getting the value of the current state throughout the app;


// Formatter Function for preparing selectedIncident Data for DetailsBlock
// This moves the responsibility out of the component, and into the reducer.
// Transformation and formatting of data makes more sense in reducer middleware than the React component. (eg: Smart vs Dumb components)
export const getDetailBlocks = (state) => {
    const selectedId = selectIncident(state); // Reusing selectors above
    const incidentList = listIncidents(state); // Reusing selectors above
    const selectedIncident = incidentList.find((incident) => !incident._id.indexOf(selectedId));

    if (!selectedIncident) { return {}; }

    const { geographics, incident } = selectedIncident;

    // Set up the data representation of our detail blocks.
    // This keeps the data formatting responsibility separate from presentational components.
    // We can break this down further if we wanted to with each "block" having its own formatter function outputting the correct object structure, then adding it to the array.
    const blocks =  [
        {
            title: 'Incident Information',
            rows:  [
                { type: 'Incident', content: geographics.municipal },
                { type: 'State', content: geographics.state }, 
                { type: 'Region', content: geographics.region }, 
                { type: 'ID', content: selectedIncident._id.substr(selectedId.length - 5) }, 
                { type: 'Initial Time', content: `${geographics.time_stamp} ${geographics.time_zone} `}, 
                { type: 'Zipcodes Affected', content: incident.zip_codes.map(zip => `${zip}, `) }
            ] 
        },
        {
            title: 'Areas Affected',
            rows:  [
                { type: 'Volume Traffic', content: incident.volume_traffic },
                { type: 'Property', content: incident.property.map(property => `${property}, `) },
                { type: 'Wildfire Type', content: incident.wildfire_type },
            ] 
        },
        {
            title: 'Additional Notes',
            rows:  [
                { content: 'Lorem ipsum dolor sit amet' },
            ] 
        }
    ];

    return blocks || [];
};



export default incidentSlice.reducer;

// const setSelected = (id) => {
//     return {
//         type: 'incidents/selected',
//         payload: id
//     }
// }

// // store.dispatch(
// //     setSelected(1)
// // )

// function selectedReducer(state = initialState, action) {
//     // Check to see if the reducer cares about this action
//     if (action.type === 'incidents/selected') {
//         // If so, make a copy of `state`
//         console.log(action.payload);
//         return {
//             ...state,
//             // and update the copy with the new value
//             value: state.value + 1
//         }
//     }
//     // otherwise return the existing state unchanged
//     return state
// }
// const initialState = { value: 0 }
// // console.log(store.getState(), 'from store')

// module.exports = selectedReducer
