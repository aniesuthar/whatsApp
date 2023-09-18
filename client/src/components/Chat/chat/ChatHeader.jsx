import { useContext } from 'react';

import { IconButton, Box, Typography, styled } from '@mui/material';
import {   Search, MoreVert } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';
import { defaultProfilePicture } from '../../../constants/data';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
    
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatHeader = ({person}) => {  

    const url = person.picture || defaultProfilePicture;
    
    const { activeUsers } = useContext(AccountContext);

    return (
        <Header>
            <Image src={url} alt="display picture" alt="dp"/>     
            <Box>
                <Name>{person.name}</Name>
                <Status>Online</Status> 
            </Box>   
            <RightContainer>
                <IconButton><Search /></IconButton> 
                <IconButton><MoreVert /></IconButton> 
                
            </RightContainer> 
        </Header>
    )
}

export default ChatHeader;