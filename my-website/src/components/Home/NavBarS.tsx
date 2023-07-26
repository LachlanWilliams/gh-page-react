import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeIcon from '../../assets/images/HomeIcon.png';
import MenuIcon from '../../assets/images/MenuIcon.png';

const NavBarS = () => {
    return (
        <Box >
        <nav className="navbar">
            <a href="#" className="logo">
                <img className="homeIcon" src={HomeIcon} alt="Home Icon" />
            </a>
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler"><i className="ri-menu-line"></i></label>
            <a href="#" className="menu">
                <img className="menuIcon" src={MenuIcon} alt="MenuIcon" />
            </a>
        </nav>
       </Box>
    );
    return (
       <Box >
        <nav className="navbar">
            <a href="#" className="menuIcon">
                <img className="DropMenuIcon" src={MenuIcon} alt="MenuIcon" />
            </a>
            {/* <Button startIcon={<MenuRoundedIcon className='menuIcon' />}/> */}
        </nav>
       </Box>
    );
    }

export default NavBarS