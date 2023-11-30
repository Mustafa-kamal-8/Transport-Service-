import React from 'react'

function Adminnavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Transport Service</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Admindashboard">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Booklistadmin">Bookings</a>
        </li>
       
      </ul>
      <span className="navbar-text">
        <li className='nv'>
        <a className="nav-link" href="/Register">Register</a>
        </li>
      </span>
    </div>
  </div>
</nav>
      
  )
}

export default Adminnavbar
