import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section, PhoneInputForm, ContactList } from 'components';
import initialContacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Section>
        <PhoneInputForm onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
      </Section>
    );
  }
}
