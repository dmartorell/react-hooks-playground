import React, { useState, useEffect, useRef } from "react";
import { useFetch } from "./customHooks";

const App2 = () => {
  const [number, setNumber] = useState('');
  const [fetchNumber, setFetchNumber] = useState(null);
  const inputRef = useRef();
  const renderCount = useRef(0);
  const prevNumber = useRef(null);

  useEffect(() => {
    renderCount.current++;
    console.log(renderCount.current);
  })

  useEffect(()=> {
    prevNumber.current = number;
  }, [number])

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
          <input ref={inputRef} value={number} onChange={handleChange}type="text" name="number" autoFocus autoComplete="off" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h3>{data && data}</h3>
      <br />
      <br />
      <p>I have been rendered {renderCount.current} times</p>
      <br />
      <p>Current number is {number} but it used to be {prevNumber.current}</p>

    </>
  );
}
export default App2;
 