import React from 'react';
import { Box, useMediaQuery } from "@mui/material";
import HomeIcon from '../../assets/images/HomeIcon.png';
import NavBarS from './NavBarS';

const NavBar = () => {
    const smallScreen = useMediaQuery(
        "(min-width: 300px) and (max-width: 600px)"
    );
    
    if(smallScreen){
        return(<NavBarS />)
    }
    return (
       <Box >
        <nav className="navbar">
            <a href="#" className="logo">
                <img className="homeIcon" src={HomeIcon} alt="Home Icon" />
            </a>
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler"><i className="ri-menu-line"></i></label>
            <div className="menu">
                <ul className="list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
       </Box>
    );
    }

export default NavBar