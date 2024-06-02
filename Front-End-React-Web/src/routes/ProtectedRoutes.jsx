import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, isAuth}) => {
    const token = localStorage.getItem("_token");
  
    if(token && isAuth){
        return (
            <>
                <Navigate to="/" replace={true}></Navigate>
            </>
        )
    }else if((token && isAuth) || !isAuth) {
        return <>{children}</>
    }else{
        return (
            <>
                <Navigate to="/login" replace={true}/>
            </>
        )
    }
};