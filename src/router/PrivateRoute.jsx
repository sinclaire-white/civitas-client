import  { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../providers/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(!user){
       return <Navigate to="/register" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;

