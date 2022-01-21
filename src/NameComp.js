import React, {  useReducer, useState } from "react";
import DetailComp from './DetailComp'
import './nameComp.css'

const NameComp = (props) => {
  
  let initialState = {
    name: "",
    age: "",
    location: "",
    hrs: "",
    weather: "Clear",
  };

  const [inputValue, setInputValue] = useReducer(
    (a, b) => ({ ...a, ...b }), initialState
  );

  const [valueSubmit, setValueSubmit] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    if (name === 'age') {
     let daysInAYear = 365 * value;
     let hoursInADay = 24;
     let ageInHrs = (daysInAYear * hoursInADay)/7.63;
      setInputValue({ ...inputValue, [name]: value, 'hrs': ageInHrs })}
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValueSubmit({...inputValue});
    setInputValue(initialState)
  }

  const handleClear = () => {
    setInputValue({initialState, 'weather': ''})
  }
 
    return (
        <div className="header"  >
          <h1>React Challenge</h1>
          <form onSubmit={onSubmit}>
            <div className="header">
              <input type="text" name="name" value={inputValue.name} onChange={handleInputChange} />
            </div>
            <div className="header">
              <input type="number" name="age" value={inputValue.age} onChange={handleInputChange} />
            </div> 
            <div className="header">
              <input type="text" name="location" value={inputValue.location} onChange={handleInputChange} />
            </div>
            <div className="header">
              <button>Submit</button>
              <button onClick={handleClear}>Clear</button>
            </div>
          </form>
            {valueSubmit ? <DetailComp {...valueSubmit} /> : ''}
        </div>
    );

}
export default NameComp;

