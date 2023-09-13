import styled from '@emotion/styled';
import {Menu, MenuItem } from '@mui/material';
import { googleLogout } from '@react-oauth/google';
import React, {useState} from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoDrawer from '../../drawer/InfoDrawer';


const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const Logout = styled(googleLogout)`
    border: none;
    box-shadow: none;
`;



function HeaderMenu() {


    const [openDrawer, setOpenDrawer] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(null);
    };
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }


    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose(); toggleDrawer() }}>Profile</MenuOption>
                <MenuOption onClick={() => { handleClose(); }}>
                    Logout
                    {/* { showlogoutButton ?
                    <Logout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </Logout> : null
                } */}
                </MenuOption>
            </Menu>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default HeaderMenu