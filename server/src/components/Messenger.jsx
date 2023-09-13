import { React, useContext } from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material'

//components
import LoginDialog from './account/LoginDialog'

import { AccountContext } from '../context/AccountProvider'
import ChatDialog from './Chat/ChatDialog'


const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
`
const Header = styled(AppBar)`
    height: 160px;
    background-color: #00bfa5;
`



function Messenger() {
    const { account } = useContext(AccountContext);
    return (
        <Box>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Box>
    )
}

export default Messenger