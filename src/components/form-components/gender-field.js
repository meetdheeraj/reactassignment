// vendor
import React from "react";

const GenderField = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="wrapper">
            <label className="label" id="title6" htmlFor="Field6">
                Gender
          </label>
            <input type="radio" name="gender" value="male" onChange={onChange} /> Male
          <input type="radio" name="gender" value="female" onChange={onChange} /> Female
        </div>
    )
}

export default GenderField;
