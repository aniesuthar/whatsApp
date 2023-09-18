import { Box } from '@mui/material'
import React, { useContext } from 'react'
import ChatHeader from './ChatHeader';
import Messages from './Messages';

import { AccountContext } from '../../../context/AccountProvider';

function ChatBox() {

    const { person } = useContext(AccountContext);

  return (
    <Box>
         <ChatHeader  person={person}/>
         <Messages/>
    </Box>
  )
}

export default ChatBox;