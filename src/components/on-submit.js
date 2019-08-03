// vendor
import React from "react";

// TODO: rewrite the same component as a functional component

const OnSubmit = (props) => {
    const data = props.location.state
    return (
        <header>
            <h1>{"Hello There!!!"}</h1>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
            <h3>{data.phoneNo}</h3>
            <h3>{data.message}</h3>
            <h3>{data.sex}</h3>
        </header>
    )
}

export default OnSubmit;
