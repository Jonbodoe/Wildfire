import React from 'react';
import Dashboard from '../pages/Dashboard';
import Incidents from '../pages/Incidents';
import Login from '../pages/Login';
import Maps from '../pages/Maps';
import Profile from '../pages/Profile';
import IncidentDetails from '../pages/sub-pages/IncidentDetails';
import MapDetails from '../pages/sub-pages/MapDetails';
import Summary from '../pages/sub-pages/Summary';
import UpdateDetails from '../pages/sub-pages/UpdateDetails';
import Weather from '../pages/sub-pages/Weather';
import Updates from '../pages/Updates';
import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MapIcon from '@material-ui/icons/Map';
// import AreaCharts from '../pages/Areacharts';
// import AssessmentIcon from '@material-ui/icons/Assessment';

const routes = [
    {
        path: '/',
        label: 'Login',
        uid: 'LOGIN',
        component: <Login fontSize='large'/>,
        menu: 'SECONDARY',
        private_url: false,
        subPages: false
    },
    {
        path:'/profile',
        label: 'Profile',
        uid: 'PROFILE',
        private_url: true,
        component: <Profile fontSize='large'/>,
        menu: 'SECONDARY',
        subPages: false
    },
    {
        path: '/dashboard',
        label: 'Dashboard',
        uid: 'DASHBOARD',
        icon: <HomeIcon fontSize='large'/>,
        menu: 'PRIMARY',
        component: <Dashboard/>,
        private_url: true,
        subPages: [
            {
                path: '/summary',
                label: 'Summary',
                uid: 'SUMMARY',
                private_url: true,
                component: <Summary/>,
            },
            {
                path: '/weather',
                label: 'Weather',
                uid: 'WEATHER',
                private_url: true,
                component: <Weather/>
            }
        ]
    },
    {
        path: '/incidents',
        label: 'Incidents',
        uid: 'INCIDENTS',
        icon: <AssignmentIcon fontSize='large'/>,
        menu: 'PRIMARY',
        private_url: true,
        component: <Incidents/>,
        subPages: [
            {
                path: '/incident-details',
                label: 'Incident Details',
                uid: 'INCIDENT_DETAILS',
                private_url: true,
                component: <IncidentDetails/>,
            }
        ]
    },
    {
        path: '/updates',
        label: 'Updates',
        uid: 'UPDATES',
        icon: <AnnouncementIcon fontSize='large'/>,
        menu: 'PRIMARY',
        private_url: true,
        component: <Updates/>,
        subPages: [
            {
                path: '/update-details',
                label: 'Update Details',
                uid: 'UPDATE_DETAILS',
                private_url: true,
                component: <UpdateDetails/>,
            },
        ]
    },
    {
        path: '/maps',
        label: 'Maps',
        uid: 'MAPS',
        icon: <MapIcon fontSize='large'/>,
        menu: 'PRIMARY',
        private_url: true,
        component: <Maps/>,
        subPages: [
            {
                path: '/map-details',
                label: 'Map Details',
                uid: 'MAP_DETAILS',
                private_url: true,
                component: <MapDetails/>,
            }
        ]
    },
]

export default routes