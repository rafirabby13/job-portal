/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext.jsx";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init.js";
import job from '../assets/job.png';
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      alert('success')
    })
    .catch(err=>{
      console.log(err.message);
    })
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/"><img src={job} alt="" /></a>
        <p>Job Portal</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleSignOut} className="btn" to="/login">
            Logout
          </Link>
        ) : (
          <div>
            <Link className="btn" to="/register">Register</Link>
            <Link className="btn" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
