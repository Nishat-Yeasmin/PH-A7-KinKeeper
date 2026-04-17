import React from 'react';
import logo from '../../../../public/image/logo.png'
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
     
      
    </div>
     <img className='ml-15' src={logo} alt="logo" />
  </div>
  
  <div className=" navbar-end flex gap-3 mr-8 ">
   <ul className="flex gap-3 list-none m-0 p-0">
    <li>
        <NavLink to={"/"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>Home</NavLink>
        </li>

    <li><NavLink to={"/timeline"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>Timeline</NavLink></li>

    <li ><NavLink to={"/states"} className={({isActive})=> `font-semibold ${isActive ? 'text-white bg-green-950 btn' : ''}`}>States</NavLink></li>

   </ul>

   
  </div>
</div>
    );
};

export default Navbar;