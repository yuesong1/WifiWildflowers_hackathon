import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Login } from "../components/misc";

import { ULRs } from "../enums/RouteURLs";


export const AppRoutes = (): JSX.Element => {
    const isAuthorised = !!localStorage.getItem("accessToken");

    const commonRoutes = [
        { path: "/login", element: <Login /> },
  
        { path: "*", element: <Navigate to={ULRs.Login} /> }
    ];

    const protectedRoutes = [
        { path: "*", element: <Navigate to={ULRs.Login} /> }
    ];

    const routes = isAuthorised ? protectedRoutes : commonRoutes;

    const element = useRoutes(routes);

    return <>{element}</>;
};