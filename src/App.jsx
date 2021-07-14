import React, { useState } from "react";
import { useFetch } from "./customHooks";

const App = () => {
  const [number, setNumber] = useState('');
  const [fetchNumber, setFetchNumber] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isNaN(+number)){
      setNumber('');
      return;
    } 
    setFetchNumber(JSON.parse(number));
  }

  const handleChange = (event)=> {
    setNumber(event.target.value);
  }

  const data = useFetch(`http://numbersapi.com/${fetchNumber}/trivia`);
  
  return (
    <>
      <h1>USE FETCH EXAMPLE</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Enter number:
          <input value={number} onChange={handleChange}type="text" name="number" autoFocus autoComplete="off" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h3>{data && data}</h3>
    </>
  );
}
export default App;
 