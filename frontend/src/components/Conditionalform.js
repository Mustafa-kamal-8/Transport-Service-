import React, { useState } from 'react';

function ConditionalForm({cData}) {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputpno, setinputpno] = useState('');
  const [inputFieldStyle, setInputFieldStyle] = useState({});
  const maxTruckWeight = 4000;
  const maxVanWeight = 2000;

  const handleOption1Change = (event) => {
    setOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setOption2(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleInputValueChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handlepnoValueChange = (event) => {
    const value = event.target.value;
    setinputpno(value);

    if (value.length !== 10) {
      setInputFieldStyle({ border: '1px solid red' });
    } else {
      setInputFieldStyle({});
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   

    // Check if a vehicle is selected
    if (!option1) {
      alert('Select a vehicle');
      return;
    }

    // Check if a goods type is selected
    if (!option2) {
      alert('Select a goods type');
      return;
    }

    // Check if a date is selected
    if (!selectedDate) {
      alert('Select a date');
      return;
    }

    // Check if the phone number is filled and has 10 digits
    if (!inputpno || inputpno.length !== 10) {
      alert('Phone number must be filled and should be 10 digits');
      return;
    }

    let maxWeight;
    if (option1 === 'Truck') {
      maxWeight = maxTruckWeight;
    } else if (option1 === 'Van') {
      maxWeight = maxVanWeight;
    }

    if (maxWeight && parseInt(inputValue, 10) > maxWeight) {
      alert(`Weight cannot exceed ${maxWeight} KG for the selected option.`);
    } else {
      // Process the form submission here
      // You can add additional logic or API calls if needed
      
      const formData = {
        vehicleType : option1,
        selectDate : selectedDate,
        selectGoodType : option2,
        weight : inputValue,
        phoneNo : inputpno
      }

      cData(formData);
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid #ccc',
  };

  const inputStyle = {
    width: '100%',
    margin: '10px 0',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <form style={formStyle}>
      <label for=" bookdetails">
        Option 1:
        <select
          value={option1}
          onChange={handleOption1Change}
          style={{ ...inputStyle, ...{ className: 'selectField' }, ...inputFieldStyle }}
        >
          <option value="">Select a Vehicle</option>
          <option value="Truck">Truck-50rs/KM, Capacity-4000KG(4Ton)</option>
          <option value="Van">Van-30rs/KM, Capacity-2000KG(2Ton)</option>
        </select>
      </label>

      <label for=" bookdetails">
        Option 2:
        <select
          value={option2}
          onChange={handleOption2Change}
          style={{ ...inputStyle, ...{ className: 'selectField' }, ...inputFieldStyle }}
        >
          <option value="">Select Goods type</option>
          <option value="Industrial Machinery">Industrial Machinery</option>
          <option value="Household Goods">Household Goods</option>
          <option value="Others">Others</option>
        </select>
      </label>

      <label for="date">
        Select Date:
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={{ ...inputStyle, ...{ className: 'dateField' }, ...inputFieldStyle }}
        />
      </label>

      <label  for="weight" >
        Total Weight:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
          style={{ ...inputStyle, ...{ className: 'weightField' }, ...inputFieldStyle }}
        />
      </label>

      <label  for="phnumber">
        Enter Your phone Number:
        <input
          type="text"
          value={inputpno}
          onChange={handlepnoValueChange}
          style={{ ...inputStyle, ...{ className: 'phoneField' }, ...inputFieldStyle }}
        />
      </label>

      {/* <button type="submit" style={buttonStyle}>
        Submit
      </button> */}
      <input type='checkbox' onChange={handleSubmit}/> confirm
    </form>
  );
}

export default ConditionalForm;
