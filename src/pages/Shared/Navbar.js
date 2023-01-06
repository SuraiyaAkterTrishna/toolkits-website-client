import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  const myItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {myItems}
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost normal-case text-xl"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0111/9115/6794/files/logo_0a450d47-4f31-46a7-8827-8ded29b537d4_medium.png?v=1528879324"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{myItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2">
            {user && <p className="text-primary font-bold">{user?.displayName} </p>}
          </div>
          <div>
            {user ? (
              <Link to="/" onClick={logOut} className="btn text-white">
                sign out
              </Link>
            ) : (
              <Link to="/login" className="btn">
                login
              </Link>
            )}
          </div>
          <div>
          <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
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
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
