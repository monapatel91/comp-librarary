import React, { ChangeEvent } from 'react';
import { useState, FormEvent } from 'react';
import {
  CheckboxProps,
  DotButton,
  DotCheckboxGroup,
  DotForm,
  DotInputSelect,
  DotInputText,
  DotRadioGroup,
  DotSwitch,
  useDotSnackbarContext,
  DotActionToolbar,
  DotBreadcrumbs,
  DotColumnHeader,
  TableRowProps,
  DotTable,
} from '@digital-ai/dot-components';

interface FormState {
  firstName: string;
  lastName: string;
  devType: '' | 'React Dev' | 'Angular Dev' | 'Other Dev';
  superHero: string;
  favTrait: Array<CheckboxProps>;
  childhoodHero: boolean;
  cartoonComments: string;
  commentField: string;
}

interface ErrorState {
  [key: string]: string;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  devType: '',
  superHero: '',
  favTrait: [],
  childhoodHero: false,
  cartoonComments: '',
  commentField: '',
};

export const UserTable = () => {
  const UsersTable = () => {
    const columns: DotColumnHeader[] = [
      { id: 'given_name', label: 'Given Name' },
      { id: 'family_name', label: 'Family Name' },
      { id: 'username', label: 'Username' },
      { id: 'email', label: 'Email' },
      { id: 'roles', label: 'Roles' },
      { id: 'actions', label: 'Actions', sortable: false, align: 'right' },
    ];
    const handleEditClick = () => {
      alert('Edit button clicked!!!');
    };
    const handleDeleteClick = () => {
      alert('Delete button clicked!!!');
    };
    const actionItemArray = [
      {
        iconActions: [
          {
            children: 'Edit',
            key: 'edit',
            onclick: () => handleEditClick(),
          },
          {
            children: 'Delete',
            key: 'delete',
            onclick: () => handleDeleteClick(),
          },
        ],
      },
    ];
    const accounts = [
      {
        given_name: 'Mona',
        family_name: 'Patel',
        username: 'monapatel91',
        email: 'mona@gmail.com',
        roles: 'Account 1',
        actions: actionItemArray,
      },
      {
        given_name: 'Palash',
        family_name: 'Shah',
        username: 'palashshah003',
        email: 'palash@gmail.com',
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

    return <DotTable ariaLabel="users table" columns={columns} data={data} />;
  };

  return <UsersTable />;
};
