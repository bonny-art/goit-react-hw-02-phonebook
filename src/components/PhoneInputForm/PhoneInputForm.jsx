import React, { Component } from 'react';

import {
  InputFormContainer,
  FormField,
  FormInput,
  FormButton,
} from './PhoneInputForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class PhoneInputForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, name: this.state.name.trim() });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <InputFormContainer onSubmit={this.handleSubmit}>
        <FormField>
          Name:
          <FormInput
            type="text"
            name="name"
            required
            placeholder="Enter contact's name"
            value={name}
            onChange={this.handleChange}
          />
        </FormField>
        <FormField>
          Number:
          <FormInput
            type="tel"
            name="number"
            required
            placeholder="Enter contact's phone number"
            value={number}
            onChange={this.handleChange}
          />
        </FormField>
        <FormButton type="submit">Add</FormButton>
      </InputFormContainer>
    );
  }
}
