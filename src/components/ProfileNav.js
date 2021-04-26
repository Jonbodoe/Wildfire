import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, MenuItem } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const ITEM_HEIGHT = 40;
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '0px 10px'
    },
}));

const ProfileNav = () => {
    const profileImg = require('../images/janedoe.jpg');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const classes = useStyles();

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
            <Link
                component={RouterLink}
                // Passing the react router link component into material UI's Link component
                // exact={false}
                to={'/'}
            >
                <MenuItem>
                    Log Out
                </MenuItem>
            </Link>
            <Link
                component={RouterLink}
                to={'/profile'}
            >
                <MenuItem>
                    Profile
                </MenuItem>
            </Link>
        </Menu>
    </>
}

export default ProfileNav;