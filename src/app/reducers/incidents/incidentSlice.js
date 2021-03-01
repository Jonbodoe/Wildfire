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