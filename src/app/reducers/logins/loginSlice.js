import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogins = createAsyncThunk('logins/fetchLogins', async () => {
    const response = fetch(`${process.env.PORT || 'http://localhost:8080'}/logins/get-logins-db`)
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

export const loginSlice = createSlice({
    name: 'login',
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
            isLoggedIn: false,
            userId: '',
            loginList: [],
        }
    },
    reducers: {
        login: (state) => {
            state.data.isLoggedIn = true;
            // https://www.youtube.com/watch?v=5zmaUSkyE1I
            // for createntityadapter
            // state.data.selectedIncidentId = payload;
            state.meta.status = 'success';
        },
        logout: (state) => {
            state.data.isLoggedIn = false;
            state.meta.status = 'success';
        },
    },
    extraReducers: {
        [fetchLogins.pending]: (state) => {
            state.meta.status = 'loading';
        },
        [fetchLogins.fulfilled]: (state, action) => {
            state.meta.status = 'success';
            state.data.loginList = action.payload;
        },
        [fetchLogins.rejected]: (state, action) => {
            state.meta.status = 'failed';
            state.meta.error = action.error.message
        },
    },
})

export const { login, logout, verifyLogin } = loginSlice.actions;
// export const loginInfo = state => state;
export const listLogins = state => state.login.data.loginList;
export const checkLoginStatus = state => state.login.data.isLoggedIn;
export const testpayload = (state, payload) => payload;

export default loginSlice.reducer;
