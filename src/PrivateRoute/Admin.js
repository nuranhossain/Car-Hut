import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../AdminRoute/AdmnRoute";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../Loader/Loader";

const Admin = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();

  if (loading || isAdminLoading) {
    <Loader></Loader>;
  }

  if (user || isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Admin;
