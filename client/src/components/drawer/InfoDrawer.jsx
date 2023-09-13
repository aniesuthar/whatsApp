import styled from '@emotion/styled';
import { IconButton, Drawer, Box, Typography } from '@mui/material';
import React from 'react'
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';



const Header = styled(Box)`
  background: #008069;
  height: 110px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
    color: white;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
    font-size: 18px;
`

const drawerStyle = {
    left: 20,
    top: 23,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}


function InfoDrawer({ open, setOpen, profile }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                {/* <IconButton> */}
                    <ArrowBack onClick={handleClose}/>
                {/* </IconButton> */}
                <Text>Profile</Text>
            </Header>
            <Component>
            {profile && <Profile />}
            </Component>

        </Drawer>
    )
}

export default InfoDrawer