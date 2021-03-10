import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import DetailsTitle from './DetailsTitle';
import DetailsContent from './DetailsContent';

const useStyles = makeStyles((theme) => ({
    ItemContainer: {
        backgroundColor: theme.palette.secondary.light,
        padding: theme.spacing(2,2.5),
        margin: theme.spacing(1.25,0)
    }
}));  

const DetailsBlock = (props) => {
    const { children, title, detailRows } = props;
    // console.log(props.content);
    // const content = props.content;
    // const type = props.type;
    // const title = props.title;

    // const dataFormatCheck = (propsParam) => {
    //     return propsParam && Array.isArray(propsParam)?  true : false
    // }

    // console.log(dataFormatCheck(content))

    // console.log(props)
    const classes = useStyles();
    return <Grid item className={classes.ItemContainer}>
        {/* {
            dataFormatCheck(content)? content.map()
        } */}
        <DetailsTitle title={title} />
        {/* If the detailRows prop is populated, map over an array of objects. 
        Otherwise, pass children as-is. */}
        {detailRows ? detailRows.map(row => <DetailsContent type={row.type} content={row.content} />) : children}
    </Grid>
}

export default DetailsBlock
