import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [color, setColor] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNumberInput(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>React Form</h1>
   
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Agree to terms
      </label>

      <label>
        <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={() => handleRadioChange('option1')} />
        Yes
      </label>

      <label>
        <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={() => handleRadioChange('option2')} />
        No
      </label>
      <br />
      <label>
        Dropdown:
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </label>

      <label>
        Date Picker:
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </label>

      <label>
        Number Input:
        <input type="number" value={numberInput} onChange={handleNumberInputChange} />
      </label>

      <label>
        Color Picker:
        <input type="color" value={color} onChange={handleColorChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
