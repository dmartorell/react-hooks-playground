import React, {useState}from 'react'

const InputNumberForm = () => {

    const [number, setNumber] = useState('');
    
    const handleSubmit = (event) => {
    event.preventDefault();
    setNumber('');
  }

    const handleChange = (event)=> {
    setNumber(event.target.value);
  }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter number:
          <input value={number} onChange={handleChange}type="text" name="number" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default InputNumberForm
