import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  PathRouteProps,
  RouteProps,
} from "react-router-dom";

import App from "../components/appbar";
import Dashboard from "./dashboard";
import Login from "./login";
import Singup from "./singup";

export default function Routers() {
  type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
  };

  const RequireAuth = ({
    isAuthenticated,
    authenticationPath,
    outlet,
  }: ProtectedRouteProps) =>
    isAuthenticated ? (
      outlet
    ) : (
      <Navigate to={{ pathname: authenticationPath }} />
    );

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: true,
    authenticationPath: "/login",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route
          path="/"
          element={
            <RequireAuth {...defaultProtectedRouteProps} outlet={<App />} />
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
