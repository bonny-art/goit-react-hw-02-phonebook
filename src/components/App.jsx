import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { PhoneInputForm, ContactsList, Filter } from 'components';
import { Section, Header, Title } from './Section/Section.styled';
import initialContacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
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
        <Header>Phonebook</Header>
        <PhoneInputForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter onChange={this.changeFilter} value={filter} />
        <ContactsList contacts={visibleContacts} />
      </Section>
    );
  }
}
