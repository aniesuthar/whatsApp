import { useState, useEffect, useContext, useRef } from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';



const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
    height: 100%;
`;

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;
    
const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;






function Messages() {

  
    const sendText = async (e) => {
        let code = e.keyCode || e.which;
        if(!value) return;

        if(code === 13) { 
            let message = {};
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: receiverId,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                };
            } else {
                message = {
                    senderId: account.sub,
                    conversationId: conversation._id,
                    receiverId: receiverId,
                    type: 'file',
                    text: image
                };
            }
        }
    }



  return (
    <Wrapper>
        Messages
            <Component>
                {/* {
                    messages && messages.map(message => (
                        <Container ref={scrollRef}>
                            <Message message={message} />
                        </Container>
                    ))
                } */}
            </Component>
            <Footer 
             sendText={sendText} 
             value={value} 
             setValue={setValue} 
            />
        </Wrapper>
  )
}

export default Messages;