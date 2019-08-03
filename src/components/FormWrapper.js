// vendor
import React from "react";
import {
  withRouter
} from 'react-router-dom'
// component
import FormField from "./FormField";
import LabelField from "./label";
import InputField from "./input";
import EmailInput from "./email-input";
// styles
import "./FormWrapper.css";

class FormWrapper extends React.Component {
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
    return (
      <form action="#" onSubmit={this.onSubmit}>
        <FormField formTitle={this.props.formTitle} />
        <div className="wrapper">
          <LabelField text={"Full Name"} />
          <InputField
            id="Field1"
            name="Field1"
            type="text"
            className="field text fn"
            size="8"
            tabIndex="1"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="wrapper">
          <LabelField text={"Email"} />
          <EmailInput
            id="Field2"
            name="Field2"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="wrapper">
          <label className="label" id="title3" htmlFor="Field3">
            Phone no
          </label>
          <InputField
            id="Field3"
            name="Field3"
            type="number"
            spellCheck="false"
            maxLength="255"
            tabIndex=""
            value={this.state.phoneNo}
            onChange={this.handlePhoneChange}
            onBlur={this.validatePhoneNumber}
          />
        </div>
        <div className="wrapper">
          <label className="label" id="title4" htmlFor="Field4">
            Message
          </label>
          <textarea
            id="Field4"
            name="Field4"
            spellCheck="true"
            rows="10"
            cols="50"
            tabIndex="4"
            onChange={this.handleMessageChange}
          />
        </div>
        <div className="wrapper">
          <label className="label" id="title5" htmlFor="Field5">
            Country
          </label>
          <select name="states" onChange={this.handleCountryChange}>
            <option value="volvo">India</option>
            <option value="saab">USA</option>
            <option value="opel">UK</option>
            <option value="audi">China</option>
          </select>
        </div>
        <div className="wrapper">
          <label className="label" id="title6" htmlFor="Field6">
            Gender
          </label>
          <input type="radio" name="gender" value="male" onChange={this.handleGenderSelect} /> Male
          <input type="radio" name="gender" value="female" onChange={this.handleGenderSelect} /> Female
        </div>
        <div className="wrapper submit-btn">
          <input
            id="Field7"
            name="Field7"
            type="submit"
            value="Submit"
            tabIndex="5"
          />
        </div>
      </form>
    );
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value.replace(/[0-9]/g, '') })
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handlePhoneChange = (event) => {
    this.setState({ phoneNo: event.target.value })
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value })
  }

  handleCountryChange = (event) => {
    this.setState({ country: event.target.value })
  }

  handleCountryChange = (event) => {
    this.setState({ country: event.target.value })
  }

  validatePhoneNumber = () => {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (this.state.phoneNo.match(phoneno)) {
      return true;
    } else {
      this.setState({
        phoneNo: ""
      })
      alert("Enter valid phone number")
    }
  }

  onSubmit = () => {
    console.log("Submit")
    this.props.history.push('/submit', { ...this.state });
  }

}

export default withRouter(FormWrapper);
