import { Navigate } from "react-router-dom";
import {  useContext } from "react";
import { AuthContext } from '../context/AuthContext/AuthContext';
const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    console.log(isLoggedIn)
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute