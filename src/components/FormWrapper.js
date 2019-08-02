// vendor
import React from "react";
// component
import FormField from "./FormField";
// styles
import "./FormWrapper.css";

class FormWrapper extends React.Component {
  render() {
    return (
      <form action="#">
        <FormField formTitle={this.props.formTitle} />
        <div className="wrapper">
          <label className="label" id="title1" htmlFor="Field1">
            Full Name
          </label>
          <input
            id="Field1"
            name="Field1"
            type="text"
            className="field text fn"
            size="8"
            tabIndex="1"
          />
        </div>
        <div className="wrapper">
          <label className="label" id="title2" htmlFor="Field2">
            Email
          </label>
          <input
            id="Field2"
            name="Field2"
            type="email"
            spellCheck="false"
            maxLength="255"
            tabIndex="3"
          />
        </div>
        <div className="wrapper">
          <label className="label" id="title3" htmlFor="Field3">
            Phone no
          </label>
          <input
            id="Field3"
            name="Field3"
            type="number"
            spellCheck="false"
            maxLength="255"
            tabIndex=""
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
          />
        </div>
        <div className="wrapper">
          <label className="label" id="title5" htmlFor="Field5">
            Country
          </label>
          <select name="states">
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
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
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
}

export default FormWrapper;
