import React from 'react';

import { ContactListContainer, Contact, Name } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactListContainer>
      {contacts.map(({ id, name }) => (
        <Contact key={id}>
          <Name>{name}</Name>
        </Contact>
      ))}
    </ContactListContainer>
  );
};
