// vendor
import React from "react";
import {
  withRouter
} from 'react-router-dom'
// component
import FormField from "./FormField";
import MessageField from "./form-components/message-field";
import EmailInput from "./form-components/email-input";
import FullName from "./form-components/full-name";
import PhoneNumber from "./form-components/phone-number";
import CountryField from "./form-components/country-field";
import GenderField from "./form-components/gender-field";
// styles
import "./FormWrapper.css";

export class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNo: "",
      message: "",
      country: "",
      sex: ""
    };
  }
  render() {
    //TO-DO: This isn't completely working as yet
    const disabled = (!this.state.name && !this.state.phoneNo
      && !this.state.sex && !this.state.message
      && !this.state.email && !this.state.country) ? true : false;

    return (
      <form action="#" onSubmit={this.onSubmit}>
        <FormField formTitle={this.props.formTitle} />
        <FullName value={this.state.name} onChange={this.handleNameChange} />
        <EmailInput value={this.state.email} onChange={this.handleEmailChange} />
        <PhoneNumber value={this.state.phoneNo} onChange={this.handlePhoneChange} />
        <MessageField value={this.state.message} onChange={this.handleMessageChange} />
        <CountryField onChange={this.handleCountryChange} />
        <GenderField onChange={this.handleGenderSelect} />
        <div className="wrapper submit-btn">
          <input
            id="Field7"
            name="Field7"
            type="submit"
            value="Submit"
            tabIndex="5"
            disabled={disabled}
          />
        </div>
      </form>
    );
  }

  handleNameChange = (value) => {
    this.setState({ name: value.replace(/[0-9]/g, '') })
  }

  handleEmailChange = (value) => {
    this.setState({ email: value })
  }

  handlePhoneChange = (value) => {
    this.setState({ phoneNo: value })
  }

  handleMessageChange = (value) => {
    this.setState({ message: value })
  }

  handleCountryChange = (value) => {
    this.setState({ country: value })
  }

  handleGenderSelect = (value) => {
    this.setState({ sex: value })
  }

  onSubmit = () => {
    this.props.history.push('/submit', { ...this.state });
  }

}

export const FormComponent = withRouter(FormWrapper);
