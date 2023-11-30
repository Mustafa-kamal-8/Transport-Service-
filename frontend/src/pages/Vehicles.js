import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles'); // Assuming you have updated your backend route to /api/vehicles
        
        if (response.status !== 200) {
          throw new Error(`Server returned ${response.status} ${response.statusText}`);
        }

        const data = response.data;
        setVehicles(data);

        // Log the data received from the database
        console.log('Data from the database:', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Vehicles</h2>
      <div className='vtable'>
        <center>
          <table className="Vehicletable">
            <thead>
              <tr>
                <th scope="col">sl no.</th>
                <th scope="col">Vehicle Type</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Owner Name</th>
                <th scope="col">Owner DL no</th>
                <th scope="col">Price/KM</th>
              </tr>
            </thead>
            <tbody>
              
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{vehicle.vehicleType}</td>
                  <td>{vehicle.vehicleName}</td>
                  <td>{vehicle.vehicleNumber}</td>
                  <td>{vehicle.ownerName}</td>
                  <td>{vehicle.ownerDL}</td>
                  <td>{vehicle.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}

export default Vehicles;
