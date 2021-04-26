import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMapKey = createAsyncThunk('maps/fetchMapKey', async () => {
    const response = fetch(`${'http://localhost:8080' || 'https://wildfireics-app.herokuapp.com'}/api/mapbox`)
    // downloaded a fetch polyfill 
    .then(function(response) {
        if (!response.ok) {
            console.log('ok mounted!')
            return response.statusText
        }
        return response.json();
    })
    return response
});

export const mapsSlice = createSlice({
    name: 'map',
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
            apiKey:{},
        }
    },
    reducers: {

    },
    extraReducers: {
        [fetchMapKey.pending]: (state) => {
            state.meta.status = 'loading';
        },
        [fetchMapKey.fulfilled]: (state, action) => {
            state.meta.status = 'success';
            state.data.apiKey = action.payload;
            // Need to figure out how to go about refreshing data 
        },
        [fetchMapKey.rejected]: (state, action) => {
            state.meta.status = 'failed';
            state.meta.error = action.error.message;
            // state.data.incidentList = payload;
        },
    },
})

// export const { selectProfile } = profilesSlice.actions;
export const getMapKey = state => state.map
// export const selectProfileId = state => state.profile.data.selectedProfileId;


export default mapsSlice.reducer;
