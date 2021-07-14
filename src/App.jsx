import React, { useState, useMemo } from "react";

const App = () => {
    const [number, setNumber] = useState(1);
    const multiplyByTwo = (num) => {
        for(let i = 0; i < 1000000000; i++){}
        return num * 2;
    }
    
    const multipliedNumber = useMemo(()=> {
     return multiplyByTwo(number)   
    }, [number]);
    
    const [darkTheme, setDarkTheme] = useState(false);

    const theme = {
      backgroundColor: darkTheme ? "black" : "white" ,
      color: darkTheme ? "white" : "black", 
    }


    const toggle = () => {
      setDarkTheme(!darkTheme);
    }
  

    return (
    <>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} autoFocus />
      <br />
      <button onClick={toggle}>Toggle Theme</button>
      <p style={theme}>{multipliedNumber}</p>
    </>
    );
}
export default App;
 