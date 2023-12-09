import React from 'react';

import { ContactsListItem } from 'components';

import { ContactsListContainer } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <ContactsListContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          name={name}
          number={number}
        ></ContactsListItem>
      ))}
    </ContactsListContainer>
  );
};
