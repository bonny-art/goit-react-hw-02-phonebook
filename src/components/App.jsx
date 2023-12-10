import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

    this.setState(prevState =>
      prevState.contacts.find(({ name }) => name === contact.name.trim())
        ? Notify.failure(`${contact.name} is already in contacts.`)
        : {
            contacts: [contact, ...prevState.contacts],
          }
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => contactId !== id),
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

    return (
      <Section>
        <Header>Phonebook</Header>
        <PhoneInputForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter onChange={this.changeFilter} value={filter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
