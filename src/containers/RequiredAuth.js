import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
import { selectUser } from "../reducer/AuthSlice";

const RequiredAuth = () => {
  const location = useLocation();
  const token = !!JSON.parse(localStorage.getItem("theArkarupaSecureAuth"));

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
