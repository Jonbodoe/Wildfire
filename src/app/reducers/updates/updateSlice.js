import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDateTime from '../../getDateTime';

export const fetchUpdates = createAsyncThunk('updates/fetchUpdates', async () => {
    const response = fetch(`${'https://wildfireics-app.herokuapp.com' || 'http://localhost:8080'}/updates/get-updates-db`)
    // downloaded a fetch polyfill 
    .then(function(response) {
        if (!response.ok) {
            return response.statusText
        }
        return response.json();
    })
    return response
});

export const updatesSlice = createSlice({
    name: 'update',
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
            selectedUpdateId: '',
            updatesList: [],
        }
    },
    reducers: {
        selectUpdate: (state, {payload}) => {
            state.data.selectedUpdateId = payload;
            state.meta.status = 'success';
        },
    },
    extraReducers: {
        [fetchUpdates.pending]: (state) => {
            state.meta.status = 'loading';
        },
        [fetchUpdates.fulfilled]: (state, action) => {
            state.meta.status = 'success';
            state.data.updatesList = action.payload;
        },
        [fetchUpdates.rejected]: (state, action) => {
            state.meta.status = 'failed';
            state.meta.error = action.error.message
        },
    },
})
export const { selectUpdate } = updatesSlice.actions;

export const getUpdateId = state => state.update.data.selectedUpdateId;
export const listUpdates = state => state.update.data.updatesList;
export const getSelectedUpdate = state => state.update.data.updatesList.find((update) => !update._id.indexOf(state.update.data.selectedUpdateId))

export const getUpdatesDetailBlocks = (state) => {
    const selectedId = getUpdateId(state);
    const updatesList = listUpdates(state);
    const selectedUpdate = updatesList.find((update) => !update._id.indexOf(selectedId));
    // console.log(selectedUpdate);
    if (!selectedUpdate) { return {}; }
    const {_id,general, updates} = selectedUpdate;
    // console.log(updates.incidentUpdate, 'array')
    const blocks = [
        {
            updateDetails: [
                {
                    title: 'Update Information',
                    rows: [
                        { type: 'Update', content: general.timestamp},
                        { type: 'Update Id', content: _id},
                        { type: 'Timestamp', content: general.time},
                        { type: 'Date', content: getDateTime()}
                    ]
                },
                {
                    title: 'Update Incident Details',
                    rows: [
                        { type: 'Incident Update', content: updates.incidentUpdate.map(update => `${update}` || 'N/A')},
                    ]
                }
            ]
        }
    ];
    return blocks || [];
}

export default updatesSlice.reducer;
