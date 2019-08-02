// vendor
import React from "react";

// TODO: rewrite the same component as a functional component

class FormField extends React.Component {
  render() {
    return (
      <header>
        <h2>{this.props.formTitle}</h2>
      </header>
    );
  }
}

export default FormField;
