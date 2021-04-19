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
    },
    ItemHover: {
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.lighter,
        },
    }
}));  

const DetailsBlock = (props) => {
    const { children, title, detailRows, hover } = props;
    const classes = useStyles();
    return <Grid item className={`${classes.ItemContainer} ${hover? classes.ItemHover : ``}`}>
        { title ? <DetailsTitle title={title}/> : <></>}
        {/* If the detailRows prop is populated, map over an array of objects. 
        Otherwise, pass children as-is. */}
        {detailRows ? detailRows.map((row, i) => <DetailsContent key={i} type={row.type} content={row.content} />) : <></>}
        {children? children : <></>}
    </Grid>
}

export default DetailsBlock
