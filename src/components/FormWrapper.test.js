// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import FormWrapper from "./FormWrapper";

configure({ adapter: new Adapter() });

describe("FormWrapper component", () => {
  it("should render FormField with correct formTitle", () => {
    // test cases here
  });
  it("should call change handler on change event of Full Name input control", () => {
    // test cases here
  });
  it("should call change handler on change event of Email input control", () => {
    // test cases here
  });
  it("should call change handler on change event of Phone number input control", () => {
    // test cases here
  });
  it("should call change handler on change event of Message input control", () => {
    // test cases here
  });
  it("should select correct value on Country dropdown control option selection", () => {
    // test cases here
  });
  it("should select correct value on Gender radio button control selection", () => {
    // test cases here
  });
  it("should call onSubmit handler on click of Submit button", () => {
    const output = shallow(<FormWrapper />);
    output
      .find(".submit-btn")
      .find("input")
      .simulate("click", {});
    // test cases here
  });
});
