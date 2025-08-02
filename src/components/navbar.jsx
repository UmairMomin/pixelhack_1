'use client';

import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {styled} from 'styled-components';

export default function NavbarPage() {
  const [open, setOpen] = useState(false);

  const navItems = ['ABOUT US', 'WORKS', 'SERVICES'];

  const MenuButton = styled(Button)({
    backgroundColor: "black",
    color: "#fff",
    outline: "1px solid black",
    padding:"5px",
    borderRadius: 10,
    padding: "0.5rem 1.5rem",
    textTransform: "none",
    fontWeight: 600,
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 0px 0px 0 #000000",
    '&:hover': {
      backgroundColor: "white",
      color:"#000",
      transform: "translateY(-4px)",
      boxShadow: "0px 4px 0px 0 #000000"
    },
  });

  const handleToggle = () => setOpen(!open);
  

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2, backdropFilter: 'blur(10px)', }}>
      <MenuButton onClick={handleToggle}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span>Menu</span>
          <MenuIcon fontSize='10px'/>
        </Box>
      </MenuButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleToggle}
        PaperProps={{
          sx: {
            position:"absolute",
            right:"10px",
            width: '50rem',
            height: '100vh',
            borderRadius: 5,
            backgroundColor: 'white',
            boxShadow: 6,
            overflow: 'hidden',
            margin: "1rem",
          },
        }}
      >
        {/* Close button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end',mt: 2, mr: 2, }}>
        <MenuButton onClick={handleToggle}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>Close</span>
              <CloseIcon fontSize='10px'/>
            </Box>
        </MenuButton>
        </Box>

        {/* Intro text */}
        <Typography variant="body1" 
        sx={{
            p:2,
            my: 2, 
            fontWeight: 500
            }}>
          We make digital products for complex <br/>challenges: from mobile apps<br/> to enterprise systems.
        </Typography>

        {/* Navigation list */}
        {navItems.map((item, index) => (
          <Box
            key={item}
            sx={{
              width:"100%",
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            //   backgroundColor: '',
              p: 2,
              borderTop: '1px solid #ccc',
              borderBottom: '1px solid #ccc',
              transition: 'background 0.3s',
              '&:hover': {
                backgroundColor: '#ffd8c4',
              },
            }}
            // ffe9df ffd8c4
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {item}
            </Typography>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        ))}
      </Drawer>
    </Box>
  );
}
