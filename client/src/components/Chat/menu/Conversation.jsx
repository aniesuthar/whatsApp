import React from 'react'
import { styled, Box, Typography } from "@mui/material";
import { emptyProfilePicture } from '../../../constants/data';


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

    return (
        <Component>
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