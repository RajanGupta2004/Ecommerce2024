import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 p-4">
        <div>
          <h1>Welcome to E-Commerce shoping page...</h1>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
