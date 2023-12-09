import React, { Component } from 'react';

import {
  InputFormContainer,
  FormField,
  FormInput,
  FormButton,
} from './PhoneInputForm.styled';

export class PhoneInputForm extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <InputFormContainer onSubmit={this.handleSubmit}>
        <FormField>
          Name:
          <FormInput
            type="text"
            name="name"
            required
            placeholder="Enter contact's name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormField>
        <FormButton type="submit">Add</FormButton>
      </InputFormContainer>
    );
  }
}
