import {  useContext } from "react";
import { AuthContext } from "../../authProvider/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = useContext(AuthContext)
    if (loading) {
        return<span className="loading loading-spinner text-error"></span>
    }
    if (user?.email) {
        return children
    }
   return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;