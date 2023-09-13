import { Box, Dialog, Menu } from '@mui/material'
import React from 'react'

import MenuBar from './menu/Menu'
import EmptyChat from './rightSide/EmptyChat'
import styled from '@emotion/styled'

const Component = styled(Box)`
    display: flex;
`;
const LeftComponent = styled(Box)`
    min-width: 450px;
    height: 100%;
`;
    
const RightComponent = styled(Box)`
    width: 73%;
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
                        <EmptyChat/>
                    </RightComponent>

                </Component>

            </Dialog>
        </Box>
    )
}

export default ChatDialog