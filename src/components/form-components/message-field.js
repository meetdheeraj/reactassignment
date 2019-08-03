// vendor
import React from "react";

const MessageField = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="wrapper">
            <label className="label" id="title4" htmlFor="Field4">
                Message
          </label>
            <textarea
                id="Field4"
                name="Field4"
                spellCheck="true"
                rows="10"
                cols="50"
                tabIndex="4"
                onChange={onChange}
            />
        </div>
    )
}

export default MessageField;
