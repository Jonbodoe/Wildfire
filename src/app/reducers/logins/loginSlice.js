import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
            // userId: '',
        }
    },
    reducers: {
        login: (state) => {
            state.data.isLoggedIn = true;
            // state.data.selectedIncidentId = payload;
            state.meta.status = 'success';
        },
        logout: (state) => {
            state.data.isLoggedIn = false;
            state.meta.status = 'success';
        }
    },
})

export const { login, logout } = loginSlice.actions;

export const checkLoginStatus = state => state.login.data.isLoggedIn

export default loginSlice.reducer;