import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

const ITEM_HEIGHT = 40;
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '0px 10px'
    },
}));

const ProfileNav = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const profileImg = require('../images/profile.jpg');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return <><IconButton
        className={classes.margin}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
    >
        <Avatar src={profileImg.default} />
    </IconButton>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
        </Menu>
    </>
}

export default ProfileNav;