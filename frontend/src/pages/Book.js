import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DistanceCalculator from '../components/DistanceCalculator';
import Conditionalform from '../components/Conditionalform';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Book() {
  const navigate = useNavigate()
  const { pcity, dcity } = useParams()

  const [formData, setFormData] = useState();
  const [finalDistance, setDistance] = useState();

  const handleData = (data) => {
    // setDataFromChild(data);
    setFormData({ ...formData, ...data });
  };


  const handleDistance = (data) => {
       setDistance(data);
  };
  const handleSubmit = () => {
    // Perform Axios operation to the server using formData and finalDistance
    
    axios.post('http://localhost:5000/api/bookingsubmit', { formData, finalDistance })
    .then(res => {
          const oid = '/Orderdetails/' + res.data[0]._id;
          navigate(oid);
      console.log(res.data[0]._id)
    })

    
      
    
    // Move the console.log statements here if you want to log before the axios.post request is completed
    console.log('formData:', formData);
    console.log('finalDistance:', finalDistance);
  };
  
  return (
    <div>
      {/* Render the DistanceCalculator component */}
      <DistanceCalculator pcity={pcity} dcity={dcity} onFinalDistanc={handleDistance}/>
      <Conditionalform cData={handleData}/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
      <button style={{ width: '400px' , padding: '10px', cursor: 'pointer', transition: 'box-shadow 0.3s ease',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

// Ensure that the DOM is fully loaded before rendering the component
document.addEventListener('DOMContentLoaded', function () {
  const mapElement = document.getElementById('map-container');
  if (mapElement) {
    ReactDOM.render(<Book />, mapElement);
  }
});

export default Book;

