import React from 'react';

import {
  ContactListContainer,
  Contact,
  Name,
  Number,
} from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactListContainer>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
        </Contact>
      ))}
    </ContactListContainer>
  );
};
