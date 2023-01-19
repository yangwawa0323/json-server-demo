import { Container } from '@mui/system';
import React from 'react';

import useUsers from './hook/useUsers';
import UserListAGTable from './UserListAGTable';

const UserList = () => {
    return (
        <Container>
            <div>用户列表</div>
            <UserListAGTable />
        </Container>
    );
};

export default UserList;
