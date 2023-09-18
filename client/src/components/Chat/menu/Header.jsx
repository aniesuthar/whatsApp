import React, { useContext,  useState  } from 'react';

import { AccountContext } from '../../../context/AccountProvider'
import { Box, IconButton } from '@mui/material';
import styled from '@emotion/styled';

// Icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';



const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 10px;
        color: #888;
    };
`;

function Header() {

    const { account } = useContext(AccountContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} alt="Profile Image" referrerPolicy="no-referrer" onClick={() => toggleDrawer()}  />
                <Wrapper>
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><ChatIcon/></IconButton>
                    <IconButton><HeaderMenu/></IconButton>
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>

    )
}

export default Header