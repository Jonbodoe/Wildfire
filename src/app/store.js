import { configureStore } from '@reduxjs/toolkit';
import incidentReducer from './reducers/incidents/incidentSlice'
import loginReducer from './reducers/logins/loginSlice'
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    incidents: incidentReducer,
    login: loginReducer
  }
});
// Possible Reducers: Geolocation