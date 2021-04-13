import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUpdates = createAsyncThunk('updates/fetchUpdates', async () => {
    const response = fetch(`${process.env.PORT || 'http://localhost:8080'}/updates/get-updates-db`)
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
// export const { login, logout, verifyLogin } = updatesSlice.actions;
export const listUpdates = state => state.update.data.updatesList;
export default updatesSlice.reducer;
