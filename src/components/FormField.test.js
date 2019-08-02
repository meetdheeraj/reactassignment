// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import FormField from "./FormField";

configure({ adapter: new Adapter() });

describe("FormField component", () => {
  it("should set h2 correctly when valid formTitle received in props", () => {
    const output = shallow(<FormField formTitle="test formTitle" />);
    expect(output.find("h2").text()).toBe("test formTitle");
  });
  it("should set h2 as empty string when invalid formTitle received in props", () => {
    const output = shallow(<FormField />);
    expect(output.find("h2").text()).toBe("");
  });
});
