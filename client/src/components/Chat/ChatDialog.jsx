import { Box, Dialog, Menu } from '@mui/material'
import React, { useContext } from 'react'

import MenuBar from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import styled from '@emotion/styled'
import ChatBox from './chat/ChatBox'
import AccountProvider, { AccountContext } from '../../context/AccountProvider'

const Component = styled(Box)`
    display: flex;
`;
const LeftComponent = styled(Box)`
    min-width: 450px;
    height: 100%;
`;
    
const RightComponent = styled(Box)`
    width: 100%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
    height: '95%',
    width: '95%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    overflow: 'hidden'
}



function ChatDialog() {

    const { person } = useContext(AccountContext);

    return (
        <Box>
            <Dialog open={true}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop
            >
                <Component>

                    <LeftComponent>
                        <MenuBar/>
                    </LeftComponent>
                    <RightComponent>
                        { Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
                    </RightComponent>

                </Component>

            </Dialog>
        </Box>
    )
}

export default ChatDialog