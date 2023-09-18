import React, {useContext } from 'react'
import { styled, Box, Typography } from "@mui/material";
import { emptyProfilePicture } from '../../../constants/data';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/api';




const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;



function Conversation({ user }) {

    const url = user.picture || emptyProfilePicture;
    const {setPerson, account} = useContext(AccountContext);

    const getUser = async () =>{
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub})
    }


    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={url} alt="display picture" />
            </Box>
            <Box style={{ width: '100%' }}>
                <Container>
                    <Typography>{user.name}</Typography>
                </Container>
            </Box>
        </Component>
    )

}

export default Conversation;