import {NavLink  } from 'react-router-dom';
import './Navbar.css';
import Nav from '/Nav.png'



function Navbar() {
  return (
    <div className="navbar">
      
      <div className='nav-img' >
        <img src={Nav} alt="" style={{height:"35px"}} />
       <h2 className="logo">Bistro Bliss</h2>
      </div>
      <nav className="nav-links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/manu">Manu</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/book">Book</NavLink></li>
          <li><NavLink to="/pags">Pags</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <button className='nav-button' >Book A Table</button>

      
    </div>
  );
}

export default Navbar;
