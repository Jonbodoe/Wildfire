import { configureStore } from '@reduxjs/toolkit';
import incidentReducer from './../app/reducers/incidentSlice'
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    incidents: incidentReducer,
  }
});


// {
//   incidents: {
//     meta: {
//       loaded: true 
//     },
//     data: {
//       currentIndicent: 0,
//       incidentlist: [
//         {id:0, status: "reported"}
//       ]
//     }
//   }
// }