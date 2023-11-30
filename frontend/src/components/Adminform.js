import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    vehicleName: '',
    vehicleNumber: '',
    ownerName: '',
    ownerDL: '',
    Price: '',
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // You can access form data in this function, including the selected image in formData.selectedImage.
    // You can submit the form data to your server or process it as needed.
    try {
      await axios.post('http://localhost:5000/api/vehiclesubmit', formData);
      console.log('Form Data:', formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="containeradmin">
      <h1>Vehicle Information Form</h1>
      <form className="formadmin" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <input
            className="inputadmin"
            type="text"
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroupadmin">
          <label htmlFor="vehicleName">Vehicle Name:</label>
          <input
            className="inputadmin"
            type="text"
            id="vehicleName"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleInputChange}
          />
        </div>

        <div className="inputGroupadmin">
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            className="inputadmin"
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="inputGroupadmin">
          <label htmlFor="ownerName">Owner Name:</label>
          <input
            className="inputadmin"
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
          />
        </div>

        <div className="inputGroupadmin">
          <label htmlFor="ownerDL">Owner's Driving License no:</label>
          <input
            className="inputadmin"
            type="text"
            id="ownerDL"
            name="ownerDL"
            value={formData.ownerDL}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroupadmin">
          <label htmlFor="Price">Price/km:</label>
          <input
            className="inputadmin"
            type="text"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleInputChange}
          />
        </div>
       

        <div className="inputGroupadmin">
          <button type="submit" onClick={handleSubmit} >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
