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


function Messages({person, conversation}) {

    const { account} = useContext(AccountContext);

    const [value, setValue] = useState();
    const [messages, setMessages] = useState();
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image, setImage] = useState();

    const sendText = async (e) =>{
        console.log(e);
        const code = e.keyCode || e.which;
        if(code === 13){
            let message ={
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }
            await newMessage(message);
            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    }

    useEffect(()=>{
        const getMessageDetails = async () =>{
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag]);

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
            <Footer sendText={sendText} setValue={setValue} value={value} setFile={setFile} file={file} setImage={setImage}/>
    </Wrapper>
  )
}

export default Messages;