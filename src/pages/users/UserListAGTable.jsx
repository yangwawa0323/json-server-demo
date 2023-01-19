import React, { useState, useMemo, memo, useRef } from 'react';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import useUsers, { useUserMutation } from './hook/useUsers';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
import { Avatar, Container, IconButton } from '@mui/material';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const AgCellAvatar = (props) => {
    // console.log('[DEBUG]: props.value', props.value);
    return <Avatar src={props.value}></Avatar>;
};

const OperatorCell = (props) => {
    return (
        <Container>
            <IconButton>
                <EyeOutlined />
            </IconButton>
            <IconButton>
                <EditOutlined />
            </IconButton>
            <IconButton color="error">
                <DeleteOutlined />
            </IconButton>
        </Container>
    );
};

const UserListAGTable = () => {
    const { data, isLoading, error } = useUsers();
    const agGridRef = useRef();
    const columnDefs = useMemo(
        () => [
            { field: 'operation', headerName: '操作', cellRenderer: memo(OperatorCell) },
            { field: 'username', headerName: '用户名' },
            { field: 'avatar', headerName: '头像', cellRenderer: memo(AgCellAvatar) },
            { field: 'qq', headerName: 'QQ号码' },
            { field: 'age', headerName: '年龄' },
            { field: 'birth', headerName: '出生年月' },
            { field: 'contact_phone', headerName: '联系人电话' },
            { field: 'favoritor', headerName: '关注总数' },
            { field: 'gender', headerName: '性别' },
            { field: 'posts', headerName: '投稿数' },
            { field: 'address.home', headerName: '家庭住址' },
            { field: 'address.office', headerName: '办公地址' }
        ],
        []
    );

    const defaultColDefs = useMemo(
        () => ({
            editable: true,
            sortable: true,
            filter: true
        }),
        []
    );
    const mutation = useUserMutation();

    const patchData = (event) => {
        console.log('[DEBUG]: onRowEditingStopped', event.data);
        mutation.mutate(event.data);
    };

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
    return (
        <div className="ag-theme-material" style={{ height: 400 }}>
            <AgGridReact
                ref={agGridRef}
                rowData={data}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                // editType="fullRow"
                onCellValueChanged={patchData}
            />
        </div>
    );
};

export default UserListAGTable;
