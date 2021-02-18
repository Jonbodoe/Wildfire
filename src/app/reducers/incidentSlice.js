import { createSlice } from '@reduxjs/toolkit';

export const incidentSlice = createSlice({
    name: 'incident',
    initialState: {
        // incidents: {
        //     meta: {
        //         loaded: true
        //     },
        //     data: {
        //         selectedIncident: 0,
        //         incidentlist: [
                    
        //         ]
        //     }
        // }
        selected: 'N/A',
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.selected += 1;
        },
        select: (state, action) => {
            state.selected = action.payload
        },
        get: (state, action)=> {
            state.selected += action.payload
        },
    },
});

export const { increment,select,get } = incidentSlice.actions;

export const selected = state => state.incidents.selected;

export default incidentSlice.reducer;

// const setSelected = (id) => {
//     return {
//         type: 'incidents/selected',
//         payload: id
//     }
// }

// // store.dispatch(
// //     setSelected(1)
// // )

// function selectedReducer(state = initialState, action) {
//     // Check to see if the reducer cares about this action
//     if (action.type === 'incidents/selected') {
//         // If so, make a copy of `state`
//         console.log(action.payload);
//         return {
//             ...state,
//             // and update the copy with the new value
//             value: state.value + 1
//         }
//     }
//     // otherwise return the existing state unchanged
//     return state
// }
// const initialState = { value: 0 }
// // console.log(store.getState(), 'from store')

// module.exports = selectedReducer