import React, { useState  } from 'react';
import TextField from "./components/TextField"
import './App.css';

function App() {
  const [state, setValue] = useState({
    value:"",
    value1:"",
  });
  const handleChange = (event) => { setValue({value:event.target.value}) }
    return (
    <div className="main">
      <div className="content">
        <TextField
          label="Input label text"
          placeholder="This input is quite long"
          // hintText="Informative message holder"
          onChange={handleChange} 
          />
        <p>{state.value}</p>
      </div>

      <div className="content">
        <TextField
          label="Input label text"
          placeholder="This input is quite long"
          hintText="Informative message holder"
          onChange={(event) => { setValue({value1:event.target.value}) } }
          />
        <p>{state.value1}</p>
      </div>
    </div>
    

);
}
export default App;
