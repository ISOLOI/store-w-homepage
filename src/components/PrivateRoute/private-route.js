import "../../styles.css";
import { Route, Navigate } from "react-router-dom";
import LoginFalse from "../PrivateRoute/private-route.js";
import { useAuthContext } from "../../contexts/auth-context.js";

export default function PrivateRoute({...props}) {
const { isUserLoggedIn } = useAuthContext();


  return isUserLoggedIn ? <Route {...props}/> : <Navigate replace to="/login"/>
}

