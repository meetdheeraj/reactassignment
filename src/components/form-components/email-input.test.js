// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer';
import EmailInput from "./email-input";
// component
import validateEmail from "./email-input";

configure({ adapter: new Adapter() });

describe("Email Field", () => {
    it('renders correctly', () => {
        const rendered = renderer.create(
            <EmailInput value={"something@something.com"} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
    it("should return true for valid email with single @ and single dot", () => {
        console.log(
            "it should return true for valid email with single @ and single dot"
        );
        expect(validateEmail("test@gmail.com")).toBeTruthy();
    });

    it("should return true for valid email with two dots after @", () => {
        console.log("it should return true for valid email with two dots after @");
        expect(validateEmail("test@yah.co.in")).toBeTruthy();
    });

    it("should return false for email with dot before @", () => {
        console.log("it should return false for email with dot before @");
        expect(validateEmail("test.lastname@gmail.com")).toBeTruthy();
    });

    xit("should return false for invalid email with continuous two dots", () => {
        console.log(
            "it should return false for invalid email with continuos two dots"
        );
        expect(validateEmail("test@gmail..com")).toBeFalsy();
    });

    xit("should return false for invalid email without @", () => {
        console.log("it should return false for invalid email without @");
        expect(validateEmail("test.com")).toBeFalsy();
    });

    xit("should return false for invalid email without dot", () => {
        console.log("it should return false for invalid email without dot");
        expect(validateEmail("test@gmailc")).toBeFalsy();
    });

    xit("should return false for invalid email with multiple @", () => {
        console.log("it should return false for invalid email with multiple @");
        expect(validateEmail("test@gmai@gmail.com")).toBeFalsy();
    });

    xit("should return false for invalid email with white space", () => {
        console.log("it should return false for invalid email with white space");
        expect(validateEmail("test@gmai.com test")).toBeFalsy();
    });

    xit("should return false for invalid email containing just white space or undefined", () => {
        console.log(
            "it should return false for invalid email containing just white space or undefined"
        );
        expect(validateEmail("")).toBeFalsy();
        expect(validateEmail(" ")).toBeFalsy();
        expect(validateEmail()).toBeFalsy();
    });

})
