import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, MenuItem } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import routes from '../app/routes';
import { checkLoginStatus } from './../app/reducers/logins/loginSlice'

const ITEM_HEIGHT = 40;
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '0px 10px'
    },
}));

const ProfileNav = () => {
    const profileImg = require('../images/profilePic.jpg');
    const SecondaryLinks = routes.filter((route) => route.menu === 'SECONDARY');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const isLoggedIn = useSelector(checkLoginStatus)
    // const dispatch = useDispatch()

    const classes = useStyles();
    const [login, logout, profile] = SecondaryLinks

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
                to={isLoggedIn? logout.path : login.path}
            >
                <MenuItem>
                    {isLoggedIn? logout.label : login.label}
                </MenuItem>
            </Link>
            <Link
                component={RouterLink}
                to={profile.path}
            >
                <MenuItem>
                    {profile.label}
                </MenuItem>
            </Link>
        </Menu>
    </>
}


// const MenuLinks = (props) => {
//     // const MyLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
//     return <Link
//         // component={RouterLink}
//         // Passing the react router link component into material UI's Link component
//         // exact={false}
//         // to={props.path}
//     >
//         <MenuItem>
//             {/* {props.label} */}
//         </MenuItem>
//     </Link>
// }

export default ProfileNav;