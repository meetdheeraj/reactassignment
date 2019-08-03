// vendor
import React from "react";

const CountryField = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="wrapper">
            <label className="label" id="title5" htmlFor="Field5">
                Country
          </label>
            <select name="states" onChange={onChange}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="China">China</option>
            </select>
        </div>
    )
}

export default CountryField;
