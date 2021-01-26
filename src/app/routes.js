import React from 'react';
import Dashboard from '../pages/dashboard';
import Incidents from '../pages/incidents';
import Login from '../pages/login';
import Maps from '../pages/maps';
import Profile from '../pages/profile';
import IncidentDetails from '../pages/sub-pages/incident-details';
import MapDetails from '../pages/sub-pages/map-details';
import Summary from '../pages/sub-pages/summary';
import UpdateDetails from '../pages/sub-pages/update-details';
import Weather from '../pages/sub-pages/weather';
// import Weather from '../pages/sub-pages/weather';
import Updates from '../pages/updates';

const routes = [
    {
        path: '/',
        label: 'Login',
        uid: 'LOGIN',
        private_url: false,
        component: <Login/>,
        subPages: false
    },
    {
        path: '/dashboard',
        label: 'Dashboard',
        uid: 'DASHBOARD',
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
        path: '/updates',
        label: 'Updates',
        uid: 'UPDATES',
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
    {
        path: '/incidents',
        label: 'Incidents',
        uid: 'INCIDENTS',
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
        path:'/profile',
        label: 'Profile',
        uid: 'PROFILE',
        private_url: true,
        component: <Profile/>,
        subPages: false
    }
]

export default routes