import React from 'react';

import {
  DotButton,
  DotColumnHeader,
  DotTable,
} from '@digital-ai/dot-components';

export const UserTable = () => {
  const UsersTable = () => {
    const columns: DotColumnHeader[] = [
      { id: 'given_name', label: 'Given Name' },
      { id: 'family_name', label: 'Family Name' },
      { id: 'username', label: 'Username' },
      { id: 'email', label: 'Email' },
      { id: 'roles', label: 'Roles' },
      { id: 'actions', label: 'Actions', sortable: false },
    ];
    const handleEditClick = () => {
      alert('Edit button clicked!!!');
    };
    const handleDeleteClick = () => {
      alert('Delete button clicked!!!');
    };
    const actionItemArray = [
      {
        children: (
          <DotButton type="text" onClick={() => handleEditClick()}>
            Edit
          </DotButton>
        ),
        key: 'edit',
        onclick: () => handleEditClick(),
      },
      {
        children: (
          <DotButton type="text" onClick={() => handleDeleteClick()}>
            Delete
          </DotButton>
        ),
        key: 'delete',
        onclick: () => handleDeleteClick(),
      },
      {
        children: (
          <DotButton type="text" onClick={() => handleDeleteClick()}>
            Delete
          </DotButton>
        ),
        key: 'delete',
        onclick: () => handleDeleteClick(),
      },
    ];
    const accounts = [
      {
        given_name: 'John',
        family_name: 'Patel',
        username: 'johnpatel',
        email: 'john@gmail.com',
        roles: 'Account 1',
        actions: actionItemArray,
      },
      {
        given_name: 'Jeff',
        family_name: 'Shah',
        username: 'jeffshah',
        email: 'jeff@gmail.com',
        roles: 'Account 2',
        actions: actionItemArray,
      },
    ];
    const data = accounts.map((account) => ({
      rowData: {
        given_name: account.given_name,
        family_name: account.family_name,
        username: account.username,
        email: account.email,
        roles: account.roles,
        actions: account.actions,
      },
    }));

    return (
      <div style={{ margin: 20 }}>
        <DotTable ariaLabel="users table" columns={columns} data={data} />
      </div>
    );
  };

  return <UsersTable />;
};
