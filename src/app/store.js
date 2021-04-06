import { configureStore } from '@reduxjs/toolkit';
import incidentReducer from './reducers/incidents/incidentSlice'
// import thunkMiddleware from 'redux-thunk'
import loginReducer from './reducers/logins/loginSlice'
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    incidents: incidentReducer,
    login: loginReducer
  }
});
// Next Reducers: Map, Updates