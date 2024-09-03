import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [sticky,setSticky]=useState(false)

  useEffect(() => {
    const handleEvent = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleEvent);
    return () => window.removeEventListener("scroll", handleEvent);
  }, []);
  const NavItems = (
    <>
      <li className='hover:bg-slate-300 rounded p-2 '><Link to={"/"}>Home</Link></li>
      <li className='hover:bg-slate-300 rounded p-2'><Link to={"/About"} >About Me</Link></li>
      <li className='hover:bg-slate-300 rounded p-2'><Link to={"/Education"}>Education</Link></li>
      <li className='hover:bg-slate-300 rounded p-2'><Link to={"/Skills"}>Skills</Link></li>
      <li className='hover:bg-slate-300 rounded p-2'><Link to={"/Projects"}>Projects</Link></li>
    </>
  );

  return (
    <div className={`max-w-screen container mx-auto md:p-5 px-4 z-50 fixed top-0 left-0 right-0 ${sticky? 'sticky-navbar bg-white shadow-lg' : ""}`}>
      <div className="navbar  flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {NavItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-6xl pl-12 text-purple-800">My Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex space-x-8 pr-10 text-xl">
            {NavItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



