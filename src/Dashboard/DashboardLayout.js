import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../AdminRoute/AdmnRoute";
import { AuthContext } from "../Context/AuthProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          {<Outlet></Outlet>}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="font-bold" to="/dashboard">
                My Items List
              </Link>
            </li>
            {isAdmin && (
              <li>
                <Link className="font-bold" to="/dashboard/allusers">
                  All User
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
