import { Box, styled} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader';
import Messages from './Messages';

import { AccountContext } from '../../../context/AccountProvider';
// import { UserContext } from '../../../context/UserProvider';
import { getConversation } from '../../../service/api';

const ChatWrapper = styled(Box)`
    width: 100%;
    height: 100%;
`;


function ChatBox() {

    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(() =>{

      const getConversationDetails = async () => {
        let data = await getConversation({ senderId: account.sub, receiverId: person.sub});
        setConversation(data);
      }
      getConversationDetails();
    }, [person.sub]);

  return (
    <ChatWrapper>
         <ChatHeader  person={person}/>
         <Messages person={person} conversation={conversation}/>
    </ChatWrapper>
  )
}

export default ChatBox;