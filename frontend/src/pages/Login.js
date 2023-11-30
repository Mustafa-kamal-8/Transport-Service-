import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  useUser  from '../pages/Usercontext';




function Login() {
  const {userData , setUserData} = useContext(useUser);
  const [formData, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === '' || formData.password === '') {
      alert("Please fill in both email and password fields.");
      return;
    }

    try {
      const result = await axios.post('http://localhost:5000/api/login', formData);
       console.log(result.data);
      if (result.data.usertype === 'user') {
        // Redirect to the user page
        setUserData({
          ...userData,
          userType: result.data.usertype,
          auth: true,
        });
        navigate('/HomePage');
        console.log(result.data)
        alert(result.data.message);
      } else if (result.data.usertype === 'admin') {
        // Redirect to the admin page
        setUserData({
          ...userData,
          userType: result.data.usertype,
          auth: true,
        });
        navigate('/Admindashboard');
        console.log(result.data)
        alert(result.data.message);
      }else{
        alert("wrong password")
      }

      
    } catch (error) {
      console.error(error);
    }
  }
  return (
     <div className='container-fluid'>
        <center>
        <form className='form form2'onSubmit={handleSubmit}>        
        <h2>Login Form</h2>
        <table>
            <tr>    
               <td> <label for="email">Email:</label></td> 
               <td> <input type="text" id="email" name="email" required onChange={e=>{handleChange(e)}}/></td> 
            </tr> 
           
            <tr>    
                 <td> <label for="password">Password:</label></td> 
                 <td> <input type="password" id="password" name="password" required onChange={e=>{handleChange(e)}}/></td> 
            </tr> 
           
            <tr id='bn'>
            <td colSpan={2}> <button type="submit" className='bnn'>Login</button></td>
            </tr>             
        </table>
        
        </form>
        
        <a href="/Register">Register</a>
        </center>
        </div>
        
    
  )
}

export default Login
