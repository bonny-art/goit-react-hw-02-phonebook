import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section, PhoneInputForm, ContactList } from 'components';
import initialContacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
      number: '111-11-11',
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
