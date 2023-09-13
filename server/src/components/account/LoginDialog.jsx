import { React, useContext, useState } from 'react'
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';

import { addUser } from '../../service/api';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 56px;
`;

const Container = styled(Box)`
    // padding: 56px 0 56px 56px;
`;

const QRCode = styled('img')({
    // margin: '50px 0 0 50px',
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: inherit;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    overflow: 'hidden'
}

function LoginDialog() {

    const {setAccount} = useContext(AccountContext)

    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    };

    const onLoginFailure = (res) => {
      
    };



    return (
        <div>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop
            >
                <Component>
                    <Container>
                        <Title>To use WhatsApp on your computer:</Title>
                        <StyledList>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                        </StyledList>
                    </Container>
                    <Box style={{position:'relative'}}>
                        <QRCode src={qrCodeImage} alt="QR Code" />
                        <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                        <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                        </Box>
                    </Box>
                </Component>
            </Dialog>
        </div>
    )
}

export default LoginDialog