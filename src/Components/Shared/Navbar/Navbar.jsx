import React from 'react';
import logo from '../../../../public/image/logo.png'
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">

        
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={"/"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>Home</NavLink></li>
        <li>
          <NavLink to={"/timeline"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>Timeline</NavLink>
        </li>
        <li><NavLink to={"/states"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>States</NavLink></li>
      </ul>
    </div>
  
     <img className='ml-15' src={logo} alt="logo" />
 
  </div>
  {/* main list */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>Home</NavLink></li>
      <li>
        <NavLink to={"/timeline"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>Timeline</NavLink>
      </li>
      <li><NavLink to={"/states"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>States</NavLink></li>
    </ul>
  </div>
 
</div>
        
    );
};

export default Navbar;