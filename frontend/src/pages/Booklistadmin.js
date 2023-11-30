import axios from 'axios';
import Adminnavbar from '../components/Adminnavbar';
import React, { useState, useEffect } from 'react';

function Booklistadmin() {
    
        const [Booklist, setBooklist] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/Booklist'); // Assuming you have updated your backend route to /api/vehicles
              
              if (response.status !== 200) {
                throw new Error(`Server returned ${response.status} ${response.statusText}`);
              }
      
              const data = response.data;
              setBooklist(data);
      
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
          <Adminnavbar/>
      <h2>Booklist</h2>
      <div className='Btable'>
        <center>
          <table className="Booktable">
            <thead>
              <tr>
                <th scope="col">sl no.</th>
                <th scope="col">Vehicle Type</th>
                <th scope="col">Date</th>
                <th scope="col">Good Type</th>
                <th scope="col">Weight</th>
                <th scope="col">phone no</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              
              {Booklist.map((Booking, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{Booking.vehicleType}</td>
                  <td>{Booking.selectDate}</td>
                  <td>{Booking.selectGoodType}</td>
                  <td>{Booking. weight}</td>
                  <td>{Booking.phoneNo}</td>
                  <td>{Booking.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>

    </div>
  )
}

export default Booklistadmin
