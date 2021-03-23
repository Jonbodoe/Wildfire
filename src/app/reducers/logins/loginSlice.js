import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    // initialState: {
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
            isLoggedIn: true,
            userId: '',
        }
    },
    // },
    reducers: {
        login: (state) => {
            state.data.isLoggedIn = true
            // state.data.selectedIncidentId = payload;
            // state.meta.status = 'success';
        },
        logout: (state) => {
            state.data.isLoggedIn = false
        }
    },
// before the react app loads, make sure express app checks if the user login 
// make sure the refreshes aligns with the frontend

    // extraReducers: {
    //     [fetchIncidents.pending]: (state) => {
    //         state.meta.status = 'loading';
    //     },
    //     [fetchIncidents.fulfilled]: (state, action) => {
    //         state.meta.status = 'success';
    //         state.data.userList = action.payload;
    //     },
    //     [fetchIncidents.rejected]: (state, action) => {
    //         state.meta.status = 'failed';
    //         state.meta.error = action.error.message
    //     },
    // },
})

export const { login, logout } = loginSlice.actions;
export const checkLoginStatus = state => state.login.data.isLoggedIn

export default loginSlice.reducer;