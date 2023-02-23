import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log("logOut", err));
  };

  const menu = (
    <>
      <Link className="mr-3 font-semibold btn btn-outline btn-warning" to="/">
        Home
      </Link>
      <Link
        to="/allcars"
        className="mr-3 font-semibold btn btn-outline btn-warning"
      >
        All Car
      </Link>
      <Link
        to="/blog"
        className="mr-3 font-semibold btn btn-outline btn-warning"
      >
        Blog
      </Link>

      {user?.email ? (
        <>
          <Link
            to="/dashboard"
            className="mr-3 font-semibold btn btn-outline btn-warning"
          >
            Dashboard
          </Link>
          <Link
            className="mr-3 font-semibold btn btn-outline btn-warning"
            onClick={handleLogout}
          >
            Logout
          </Link>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-warning mt-2 mb-2 text-white drawer-button lg:hidden"
          >
            Dashboard
          </label>

          <Link className="mr-3 text-lg  py-2 btn">{user?.displayName}</Link>
        </>
      ) : (
        <>
          <Link
            className="mr-3 font-semibold btn btn-outline btn-warning"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="mr-3  font-semibold btn btn-outline btn-warning"
            to="/register"
          >
            Signup
          </Link>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 lg:px-[80px] px-[20px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Car-Hut</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
