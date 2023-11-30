import React, { useState } from 'react'
import axios from 'axios'

function Register() {
  const [formData,setData]=useState({
    usertype:'',
    username:'',
    email:'',
    phoneno:'',
    password:'',
    confirm_password:'',

  });
  const handleChange= (e)=>{
    const {name, value} = e.target;
    setData({...formData, [name]:value})
  }
  const handleSubmit= async (e) =>{
    e.preventDefault();
    
    if(formData.usertype===''){
      alert("not")
   } else if(formData.username.length<4){
    alert("name is too short")
   } else if(formData.email===''){
    alert("email should be filled")
   } else if(formData.phoneno.length<10){
    alert("no should be 10 character")
   } else if(formData.password.length<4){
    alert("pasword is too short")
   } else if(formData.confirm_password!==formData.password){
    alert("password is not matched")
   } else{
    //alert("success")
    console.log('Form Data:', formData); // Log the form data

    const result= await axios.post('http://localhost:5000/api/register',formData);
    console.log(result)
   }
   
       
  }
    return (
    <div className='container-fluid'>
        <center>
        <form className='form form2'onSubmit={handleSubmit}>        
        <h2>Registration Form</h2>
        <table>
        
            <tr>
        <td> <h4>Select your user type:</h4></td>
        <td>
         <select id="select" name='usertype' onChange={e=>{handleChange(e)}} >
          <option selected disabled>select</option>
           <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
        </td>
        </tr> 
            <tr>  
              <td> <label for="username">Username:</label></td> 
              <td> <input type="text" id="username" name="username" required onChange={e=>{handleChange(e)}}/></td> 
            </tr> 
            <tr>    
               <td> <label for="email">Email:</label></td> 
               <td> <input type="text" id="email" name="email" required onChange={e=>{handleChange(e)}}/></td> 
            </tr> 
            <tr> 
                 <td> <label for="phoneno">phoneNo:</label></td> 
                 <td> <input type="text" id="phoneno" name="phoneno" required onChange={e=>{handleChange(e)}}/></td> 
            </tr>
            <tr>    
                 <td> <label for="password">Password:</label></td> 
                 <td> <input type="password" id="password" name="password" required onChange={e=>{handleChange(e)}}/></td> 
            </tr> 
            <tr> 
                  <td> <label for="confirm_password">Confirm Password:</label></td> 
                  <td> <input type="password" id="confirm_password" name="confirm_password" required onChange={e=>{handleChange(e)}}/></td> 
            </tr>  
            <tr>
           <td colSpan={2}> <button type="submit" className='bn'>Register</button></td>
            </tr>             
        </table>
        
        </form>
        
        <a href="/Login">Login</a>
        </center>
        </div>
        
    
  )
}

export default Register
