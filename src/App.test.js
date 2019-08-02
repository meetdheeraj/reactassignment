// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import App from "./App";

configure({ adapter: new Adapter() });

describe("App component", () => {
  it("should contain FormWrapper component", () => {
    const output = shallow(<App />);
    expect(output.find("FormWrapper").exists()).toBeTruthy();
  });
  it("should set formTitle correctly", () => {
    const output = shallow(<App />);
    expect(output.find("FormWrapper").prop("formTitle")).toBe("Enquiry Form");
  });
});
