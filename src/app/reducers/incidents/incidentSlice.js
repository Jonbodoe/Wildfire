import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import CaseDetails from '../../../features/incidents/CaseDetails';

export const fetchIncidents = createAsyncThunk('incidents/fetchIncidents', async () => {
    const response = fetch(`${'http://localhost:8080' || 'https://wildfireics-app.herokuapp.com'}/incidents/get-incidents-db`)
    // 'https://wildfireics-app.herokuapp.com' || 'http://localhost:8080'
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
            selectedIncidentId: '',
            incidentList: [],
            selectedCaseId: '',
        }
    },
    reducers:{
        select: (state, {payload}) => {
            state.data.selectedIncidentId = payload;
        },
        selectCase: (state, {payload}) => {
            state.data.selectedCaseId = payload;
        },
        updateList: (state, {payload}) => {
            state.data.incidentList = payload;
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

export const { select, selectCase, updateList } = incidentSlice.actions;

export const errorCheck = state => state.incidents.meta.status;
export const selectIncident = state => state.incidents.data.selectedIncidentId;
export const selectCaseId = state => state.incidents.data.selectedCaseId;
export const listIncidents = state => state.incidents.data.incidentList;
export const errorLog = state => state.incidents.meta.errorLog;
export const refreshState = state => state.incidents.meta.refresh;
// For getting the value of the current state throughout the app;

// Formatter Function for preparing selectedIncident Data for DetailsBlock
// This moves the responsibility out of the component, and into the reducer.
// Transformation and formatting of data makes more sense in reducer middleware than the React component. (seg: Smart vs Dumb components)

// export const selectedIncident = incidents.find((incident) => !incident._id.indexOf(selectedId));
export const getSelectedIncident = (state) => state.incidents.data.incidentList.find((incident) => !incident._id.indexOf(selectIncident(state)));
export const getSelectedCase = (state) => {
    const selectedIncident = getSelectedIncident(state);
    if (!selectedIncident) { return {}; }
    const caseList = selectedIncident.incident.cases
    const caseId = selectCaseId(state);
    const selectedCase = caseList.find((cases)=> !cases.zip_code.indexOf(caseId));
    return selectedCase;
}

export const getIncidentDetailBlocks = (state) => {
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
            incidentDetails: [
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
                        { type: 'Api Keywords', content: incident.api_keywords.map(keyword => `${keyword}, `)},
                        { type: 'Property', content: incident.property.map(property => `${property}, `) },
                        { type: 'Wildfire Type', content: incident.wildfire_type },
                        { type: 'Priority', content: incident.priority },
                    ] 
                },
            ]
        },
    ];

    return blocks || [];
};

export const getCaseDetailBlocks = (state) => {
    const cases = getSelectedCase(state);
    console.log(cases);
    const selectedId = selectIncident(state); // Reusing selectors above
    const selectedIncident = getSelectedIncident(state) // Reusing selectors above

    if (!selectedIncident && !cases) { return {}; }

    const { geographics, incident } = selectedIncident;

    const blocks =  [
        {
            caseDetails: [
                {
                    title: 'Case Information',
                    rows:  [
                        { type: 'Incident', content: geographics.municipal },
                        { type: 'State', content: geographics.state }, 
                        { type: 'Region', content: geographics.region }, 
                        { type: 'Zip Code', content: cases.zip_code},
                        { type: 'ID', content: selectedIncident._id.substr(selectedId.length - 5) }, 
                        { type: 'Initial Time', content: `${cases.initial_time} ${geographics.time_zone} `}, 
                        { type: 'Api Keywords', content: incident.api_keywords.map(keyword => `${keyword} ,`)},
                        { type: 'Authorities Present', content: cases.authorities_present}
                    ]
                },
                {
                    title: 'Images',
                    rows: cases.images
                },
            ]
        }
    ];
    return blocks || [];
}
export default incidentSlice.reducer;

