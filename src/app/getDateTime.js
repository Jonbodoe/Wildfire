// import { Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import React from 'react';

// const useStyles = makeStyles((theme) => ({
//     date: {
//         padding: theme.spacing(0, 2)
//     },
// }));


const getDateTime = () => {
    // const classes = useStyles();
    const date = new Date();
    const getMonth = (d) => {
        const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthList[d.getMonth()];
    }
    const getDay = (d) => {
        return d.getDate();
    }
    const getYear = (d) => {
        return d.getFullYear();
    }
    return `${getMonth(date)} ${getDay(date)}, ${getYear(date)}`
}

export default getDateTime;