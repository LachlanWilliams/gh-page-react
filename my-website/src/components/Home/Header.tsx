import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Typography } from '@mui/material';

const Header = () => {
    return (
       <Box>
            <div style={{width: 1512, height: 135, position: 'relative'}}>
                <div style={{width: 1512, height: 135, left: 0, top: 0, position: 'absolute', background: '#252525'}} />
                <div style={{width: 60, height: 60, left: 45, top: 37, position: 'absolute'}}>
                    <div style={{width: 46, height: 41.64, left: 7.01, top: 8.36, position: 'absolute', background: '#1DBEE6', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}></div>
                </div>
                <div style={{width: 397, height: 32, left: 1001, top: 51, position: 'absolute'}}>
                    <div style={{width: 93, height: 32, left: 304, top: 0, position: 'absolute', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>About</div>
                    <div style={{width: 93, height: 32, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Home</div>
                    <div style={{width: 119, height: 32, left: 139, top: 0, position: 'absolute', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Contact</div>
                </div>
            </div>
       </Box>
    );
    }

export default Header