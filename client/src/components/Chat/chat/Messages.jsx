import { useState,  useContext, useEffect} from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';

import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessage } from '../../../service/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
    height: calc(100% - 44px);
    
`;
    
const Component = styled(Box)`
    overflow-y: scroll;
    height: calc(100% - 56px);
`;

const Container = styled(Box)`
    padding: 1px 40px;
`;






function Messages() {
  return (
    <Wrapper>
            <Component>
                {
                    messages && messages.map(message => (
                        <Container >
                            <Message message={message}/>
                        </Container>
                    ))
                }
            </Component>
            <Footer />
        </Wrapper>
  )
}

export default Messages;