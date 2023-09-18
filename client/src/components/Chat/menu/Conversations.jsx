import { useState, useEffect, useContext } from 'react';

import { Box, styled, Divider } from '@mui/material';

import Conversation from './Conversation';
import { getUsers } from '../../../service/api';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;


function Conversations() {

    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);


    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            // let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(data);
        }
        fetchData();
    }, []);


    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        {
                                users.length !== (index + 1)  && <StyledDivider />
                            }
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;