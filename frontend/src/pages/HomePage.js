import React, { useEffect } from 'react';
import {useState} from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const [options, setOptions] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [fromData, setFromData]=useState({
    pcity:'',
    dcity:'',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFromData({...fromData, [name]:value})
    
    //alert(FormData.pcity);
    
  }
  const navigate = useNavigate()

  const handleSubmit=(e) =>{
    e.preventDefault();
    
    navigate('/Book/'+fromData.pcity+'/'+ fromData.dcity)
  }

  useEffect(()=>{
    fetch('./locData/locateMe.json')
    .then((response) => response.json())
    .then((data) => {
      // Extract the values you want to populate the datalist with
      const values = data.map((item) => item.locateMe);
      setOptions(values);
    })
    .catch((error) => console.error('Error loading JSON data:', error));

    fetch('./locData/locateMe.json')
    .then((response) => response.json())
    .then((data) => {
      // Extract the values you want to populate the datalist with
      const values = data.map((item) => item.locateMe);
      setOptions2(values);
    })
    .catch((error) => console.error('Error loading JSON data:', error));
  },[]);


  return (
    <div>
      <Navbar/>
      
    <div className='image'>
      
      
          <div className='form'>
        <form onSubmit={handleSubmit} action="" method="">
        <h1> Book Car </h1>

          <input
            type="text" placeholder='Pick up city location' list="options"
            value={FormData.pcity} id="pcity" name="pcity" onChange={e=>{handleChange(e)}}   
          />
          <datalist id="options">
            {options.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
          <br></br>
           <input
            type="text" placeholder='Drop city location' list="options2"
            value={FormData.dcity} id="dcity" name="dcity"  onChange={e=>{handleChange(e)}}      
          />
          <datalist id="options2">
            {options2.map((option2, index) => (
              <option key={index} value={option2} />
            ))}
          </datalist>
          <br></br>
          <button name="button" type="submit"  onClick={() => handleSubmit}>Check fare</button>
        </form>
      </div>
      </div>
     </div>
      
      
      
         )
}

