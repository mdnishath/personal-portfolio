import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import GlobalLoader from "../loader/GlobalLoader";
import useAdmin from "../hooks/useAdmin";
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(isAdmin);

  if (isAdminLoading) {
    return <GlobalLoader />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
