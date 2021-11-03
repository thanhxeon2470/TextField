import React, { Component } from 'react';
import TextField from "./components/TextField"
import './App.css';
// var element = "babcbbc";
class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          value: '',
      };
  }
  handleChange = (event) => {
    this.setState ({value: event.target.value} )
  }
  render() {
    return (
      <div>
        <TextField className="layout"
          label="Input label text"
          placeholder="This input is quite long"
          hintText="Informative message holder"
          onChange={this.handleChange} 
          />
        <p>{this.state.value}</p>
      </div>

    );
  }
}

export default App;
