import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from "../application/context";


const PublicRoutes = () => {    

    const {loggedUser} = useAppContext();

    if (loggedUser){
        return <Navigate to={'/dashboard'} />
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default PublicRoutes;
