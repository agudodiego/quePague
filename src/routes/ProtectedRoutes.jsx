import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from "../application/context";

const ProtectedRoutes = () => {

    const {loggedUser} = useAppContext();

    if (!loggedUser){
        return <Navigate to={'/'} />
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ProtectedRoutes;
