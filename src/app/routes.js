import React from 'react';
import Dashboard from '../pages/dashboard';
import Incidents from '../pages/incidents';
import Login from '../pages/login';
import Maps from '../pages/maps';
import Profile from '../pages/profile';
import Summary from '../pages/summary';
import Updates from '../pages/updates';
import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MapIcon from '@material-ui/icons/Map';

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
        path: '/',
        label: 'Logout',
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
        path:'/summary',
        label: 'Summary',
        uid: 'SUMMARY',
        private_url: true,
        component: <Summary/>,
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
    },
    {
        path: '/incidents',
        label: 'Incidents',
        uid: 'INCIDENTS',
        icon: <AssignmentIcon fontSize='large'/>,
        menu: 'PRIMARY',
        private_url: true,
        component: <Incidents/>,
    },
    {
        path: '/updates',
        label: 'Updates',
        uid: 'UPDATES',
        icon: <AnnouncementIcon fontSize='large'/>,
        menu: 'PRIMARY',
        private_url: true,
        component: <Updates/>,
    },
    {
        path: '/maps',
        label: 'Maps',
        uid: 'MAPS',
        icon: <MapIcon fontSize='large'/>,
        menu: 'PRIMARY',
        private_url: true,
        component: <Maps/>,
    },
]

export default routes
