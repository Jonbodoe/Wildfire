import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: '100%',
        minHeight: 150,
      },
}));

const CaseImageList = (props) => {
    const { images } = props;
    const classes = useStyles();
    return <div className={classes.root}>
    <GridList cellHeight={160} className={classes.gridList} cols={3}>
      {images.map((img, i) => (
        <GridListTile key={i} cols={1}>
          <img src={require(`./../../images/${img.img_src}`).default} alt={img.caption} />
        </GridListTile>
      ))}
    </GridList>
  </div>
}

export default CaseImageList;