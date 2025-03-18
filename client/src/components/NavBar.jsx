import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-sticky navbar-light sticky-top" data-navbar-darken-on-scroll="900">
    <div className="container pt-2"><a className="navbar-brand" href="index.php"> <img src="img/logo_2.png" style={{height: "60px", width: "60px", objectFit: "fill"}} alt="logo" /></a>
    <div className="navbar-nav ms-auto">
        <Link style={{ marginRight: "-35px"}} to="/register" className="btn btn-warning">Register</Link>
        </div>
        <div className="navbar-nav ms-auto">
            <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
    </div>
</nav>
  )
}

export default NavBar
