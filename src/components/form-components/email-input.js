// vendor
import React from "react";
import LabelField from "../label";

// TODO: rewrite the same component as a functional component

const EmailInput = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <div className="wrapper">
            <LabelField text={"Email"} />
            <input
                id={props.id || "email"}
                name={props.name || "email"}
                type="email"
                spellCheck="false"
                maxLength="255"
                tabIndex="3"
                value={props.email}
                onBlur={validateEmail}
                onChange={onChange}
            />
        </div>
    )
}

export const validateEmail = (event) => {
    if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(event.target.value))) {
        alert("Enter valid mail ID!!")
        return false;
    } else return true;
}

export default EmailInput;
