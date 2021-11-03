import React, { useState  } from 'react';
import TextField from "./components/TextField"
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => { setValue(event.target.value) }
    return (
    <div class="content">
      <TextField
        label="Input label text"
        placeholder="This input is quite long"
        // hintText="Informative message holder"
        onChange={handleChange} 
        />
      <p>{value}</p>
    </div>

);
}
export default App;
