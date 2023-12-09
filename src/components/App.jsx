import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section, PhoneInputForm, ContactList, Filter } from 'components';
import initialContacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log('normalizedFilter :>> ', normalizedFilter);
    return (
      <Section>
        <PhoneInputForm onSubmit={this.addContact} />
        <Filter onChange={this.changeFilter} value={filter} />
        <ContactList contacts={visibleContacts} />
      </Section>
    );
  }
}
