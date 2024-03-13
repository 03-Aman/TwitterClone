import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const userJSON = localStorage.getItem('jwtToken');
  const user = userJSON ? JSON.parse(userJSON) : null;
  
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    // setIsLogin(false);
    window.location.reload();
  };

  return (
    <div className="navbar bg-black-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/"><a>Home</a></Link></li>
            <li><Link to="/posts"><a>Posts</a></Link></li>
            <li><Link to="/about"><a>About</a></Link></li>
            <li><Link to="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
        <Link to="/"><a className="btn btn-ghost text-xl bg-white-400 ">Twitter</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/"><a>Home</a></Link></li>
          <li><Link to="/posts"><a>Posts</a></Link></li>
          <li><Link to="/about"><a>About</a></Link></li>
          <li><Link to="/contact"><a>Contact</a></Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <button onClick={handleLogout} className="btn bg-gray-300 border-none min-h-4 h-10">Logout</button>
        ) : (
          <>
            <Link to="/login"><a className="btn bg-white-400 border-none min-h-4 h-10">Login</a></Link>
            <Link to="/register"><a className="btn bg-white-400 border-none min-h-4 h-10">Register</a></Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;