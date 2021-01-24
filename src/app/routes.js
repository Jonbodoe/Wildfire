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
import Weather from '../pages/sub-pages/weather';
import Updates from '../pages/updates';

const routes = [
    {
        path: '/',
        uid: 'LOGIN',
        component: <Login/>,
        subPages: false
    },
    {
        path: '/dashboard',
        uid: 'DASHBOARD',
        component: <Dashboard/>,
        subPages: [
            {
                path: '/summary',
                uid: 'SUMMARY',
                component: <Summary/>,
            },
            {
                path: '/weather',
                uid: 'WEATHER',
                component: <Weather/>
            }
        ]
    },
    {
        path: '/updates',
        uid: 'UPDATES',
        component: <Updates/>,
        subPages: [
            {
                path: '/update-details',
                uid: 'UPDATE_DETAILS',
                component: <UpdateDetails/>,
            },
        ]
    },
    {
        path: '/maps',
        uid: 'MAPS',
        component: <Maps/>,
        subPages: [
            {
                path: '/map-details',
                uid: 'MAP_DETAILS',
                component: <MapDetails/>,
            }
        ]
    },
    {
        path: '/incidents',
        uid: 'INCIDENTS',
        component: <Incidents/>,
        subPages: [
            {
                path: '/incident-details',
                uid: 'INCIDENT_DETAILS',
                component: <IncidentDetails/>,
            }
        ]
    },
    {
        path:'/profile',
        uid: 'PROFILE',
        component: <Profile/>,
        subPages: false
    }
]

export default routes