import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ">
        <div className=" hidden md:flex w-1/2 bg-slate-700 text-white min-h-screen  items-center justify-center">
          <h1 className="text-3xl font-semibold">
            Welcome to E-Commerce shoping page...
          </h1>
        </div>
        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
