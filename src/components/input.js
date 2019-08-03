// vendor
import React from "react";

// TODO: rewrite the same component as a functional component

const InputField = (props) => (
    <input
            id={props.id}
            name={props.name}
            type="text"
            {...props}
          />
)

export default InputField;
