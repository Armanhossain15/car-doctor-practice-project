import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveatRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(authContext)
    if(loading){
       return <div className="text-center py-5">
        <progress className="progress w-56"></progress>
       </div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PriveatRoute;