import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Orderdetails() {
  const [orderDetails, setOrderDetails] = useState(null); // Initialize state with null

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/bookdetails', { id });

        if (response.status !== 200) {
          throw new Error(`Server returned ${response.status} ${response.statusText}`);
        }

        // Log the data received from the database
        console.log('Data from the database:', response.data);

        // Set the state with the data from the response
        setOrderDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [id]); // Add 'id' as a dependency to re-run the effect when 'id' changes

  // If orderDetails is still null, you can display a loading message or spinner
  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='orderdt'>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="field1">Total Distance</label>
            </td>
            <td>
              <span type="text" id="field1" name="field1">{orderDetails.finalDistance}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="field2">Phone no</label>
            </td>
            <td>
              <span type="text" id="field2" name="field2">{orderDetails.phoneNo}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="field3">Date</label>
            </td>
            <td>
              <span type="text" id="field3" name="field3">{orderDetails.selectDate}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="field4">Good Type</label>
            </td>
            <td>
              <span type="text" id="field4" name="field4">{orderDetails.selectGoodType}</span>
            </td>
          </tr>
         
          <tr>
            <td>
              <label htmlFor="field6">Vehicle Type</label>
            </td>
            <td>
              <span type="text" id="field6" name="field6">{orderDetails.vehicleType}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="field7">Weight</label>
            </td>
            <td>
              <span type="text" id="field7" name="field7">{orderDetails.weight}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="field5" id="field5">Total Price</label>
            </td>
            <td>
              <span type="text" id="field5" name="field5">{orderDetails.totalPrice}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orderdetails;
