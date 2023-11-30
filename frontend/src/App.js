import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Book from './pages/Book';
import Register from './pages/Register';
import Login from './pages/Login';
import Admindashboard from './pages/Admindashboard';
import  useUser  from './pages/Usercontext'; // Corrected import path
import Vehicles from './pages/Vehicles';
import Orderdetails from './pages/Orderdetails';
import Booklistadmin from './pages/Booklistadmin'
import React, { useState } from 'react';



function App() {
  const [userData, setUserData] = useState({
    
  } );
  console.log(userData);
  function AdminElement({children}){
    if(userData.userType === 'admin'){
      return(
        <>
        {children}
        </>
      );
    }else{
      return(
        <>
          {userData.userType}
        </>
      );
    }
  }
  return (
    <div>
      <useUser.Provider value={{userData , setUserData}}>

{
userData.auth?
(
<Routes>
          <Route path='/HomePage' exact element={<HomePage />} />
          <Route path='/Book' element={<Book />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Admindashboard' element={<AdminElement><Admindashboard/></AdminElement>} />
          <Route path='/Vehicles' element={<Vehicles />} />
          <Route path='/Booklistadmin' element={<Booklistadmin />} />

        </Routes>
)
:(
<Routes>
          <Route path='/HomePage' exact element={<HomePage />} />
          <Route path='/Vehicles' element={<Vehicles />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Book/:pcity/:dcity" element={<Book />} />
          <Route path="/Orderdetails/:id" element={<Orderdetails/>} />
          <Route path='/Booklistadmin' element={<Booklistadmin />} />
          

      
        </Routes>
)
}

        
      </useUser.Provider>
    </div>
  );
}

export default App;