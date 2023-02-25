import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { useIsLoggedIn } from "../firebase/Hooks";

const Layout = () => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) return <Loading />;
  else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />;

  return <Outlet />;
};

export default Layout;
