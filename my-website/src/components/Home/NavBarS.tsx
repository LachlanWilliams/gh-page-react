import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeIcon from '../../assets/images/HomeIcon.png';

const NavBarS = () => {
    return (
       <Box >
        <nav className="navbar">
            <a href="#" className="logo">
                <img className="homeIcon" src={HomeIcon} alt="Home Icon" />
            </a>
            <Button startIcon={<MenuRoundedIcon className='menuIcon' />}/>
        </nav>
       </Box>
    );
    }

export default NavBarS