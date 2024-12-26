import React from "react";
import { Outlet } from "react-router";
import Dashboard from "../Dashboard/Dashboard";

const Layout = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};

export default Layout;
