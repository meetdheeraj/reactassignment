import React from "react";
import FormWrapper from "./components/FormWrapper";
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
          <FormWrapper formTitle={this.state.formTitle} />
        </header>
      </div>
    );
  }
}

export default App;
