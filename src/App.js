import TextField from "./components/TextField"
import { useState } from "react";
import './App.css';
// var element = "babcbbc";
function App() {
  // var element = document.getElementById("i1");
  const [value, setValue] = useState("");
  const handleChange = (event) => { setValue(event.target.value) }
    return (
    <div>
      <TextField
        label="Input label text"
        placeholder="This input is quite long"
        // hintText="Informative message holder"
        onChange={handleChange} 
        />
    </div>

  );
}

export default App;
