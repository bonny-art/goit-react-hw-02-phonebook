import React from 'react';

import { Contact, Name, Number } from './ContactsListItem.styled';

export const ContactsListItem = ({ name, number }) => {
  return (
    <Contact>
      <Name>{name}</Name>
      <Number>{number}</Number>
    </Contact>
  );
};
