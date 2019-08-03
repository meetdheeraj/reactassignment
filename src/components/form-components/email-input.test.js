// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer';
// component
import EmailInput from "./email-input";

configure({ adapter: new Adapter() });

describe("Email Field", () => {
    it('renders correctly', () => {
        const rendered = renderer.create(
            <EmailInput value={"something@something.com"} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });

    xit("should return true for valid email with single @ and single dotshould render FormField with correct formTitle", () => {
        // test cases here
        const emailInput = shallow(<EmailInput value="qaz@g.com" />);

        expect(emailInput.value).toEqual('qaz@g.com');

        emailInput.find('input').simulate('onBlur');

        expect(emailInput.text()).toEqual('On');
    });

});
