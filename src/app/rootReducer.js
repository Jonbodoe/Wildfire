import { combineReducers } from "redux";
import incidentReducer from './reducers/incidents/incidentSlice'
import loginReducer from './reducers/logins/loginSlice'
import updateReducer from './reducers/updates/updateSlice'
import profileReducer from './reducers/profiles/profilesSlice'
import mapReducer from './reducers/maps/mapsSlice'

const rootReducer = combineReducers({
    incidents: incidentReducer,
    login: loginReducer,
    update: updateReducer,
    profile: profileReducer,
    map: mapReducer
})

export default rootReducer