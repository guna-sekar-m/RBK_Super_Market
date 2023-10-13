import { Navigate } from "react-router-dom";
import { getuserdetails } from "../Token/token";
import { useAuth } from "../LoginContext/LoginContext";
const AuthGuard = ({children,allowedRoles}) => {
  const { isLoggedIn } = useAuth();
  const userRole=getuserdetails()?getuserdetails().role:false;
  if (!isLoggedIn) {
    return <Navigate to="/home" replace />;
  }
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default AuthGuard;
