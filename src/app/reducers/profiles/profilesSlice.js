import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () => {
    const response = fetch(`${process.env.PORT || 'https://wildfireics-app.herokuapp.com'}/profiles/get-profiles-db`)
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

export const profilesSlice = createSlice({
    name: 'profile',
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
            selectedProfileId: '',
            profilesList: [],
        }
    },
    reducers: {
    },
    extraReducers: {
        [fetchProfiles.pending]: (state) => {
            state.meta.status = 'loading';
        },
        [fetchProfiles.fulfilled]: (state, action) => {
            state.meta.status = 'success';
            state.data.profilesList = action.payload;
            // Need to figure out how to go about refreshing data 
        },
        [fetchProfiles.rejected]: (state, action) => {
            state.meta.status = 'failed';
            state.meta.error = action.error.message
            // state.data.incidentList = payload;
        },
    },
})
export const listProfiles = state => state.profile.data.profilesList;
export default profilesSlice.reducer;
