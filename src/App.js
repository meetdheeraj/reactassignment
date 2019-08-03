import React from "react";
import { FormComponent } from "./components/FormWrapper";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: "Enquiry Form"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormComponent formTitle={this.state.formTitle} />
        </header>
      </div>
    );
  }
}

export default App;
