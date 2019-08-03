// vendor
import React from "react";
import LabelField from "../label";
import InputField from "../input";

const FullName = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="wrapper">
            <LabelField text={"Full Name"} />
            <InputField
                id="Field1"
                name="Field1"
                type="text"
                className="field text fn"
                size="8"
                tabIndex="1"
                value={props.name}
                onChange={onChange}
            />
        </div>
    )
}

export default FullName;
