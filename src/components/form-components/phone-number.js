// vendor
import React from "react";
import InputField from "../input";

const PhoneNumber = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    const validatePhoneNumber = (event) => {
        const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (event.target.value.match(phoneno)) {
            return true;
        } else {
            props.onChange("");
            alert("Enter valid phone number")
        }
    }

    return (
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
                value={props.name}
                onChange={onChange}
                onBlur={validatePhoneNumber}
            />
        </div>
    )
}

export default PhoneNumber;
