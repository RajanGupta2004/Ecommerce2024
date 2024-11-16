import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <div className="flex ">
        <div>
          <h1>sidebar</h1>
        </div>
        <div>
          <h1>Admin Navbar</h1>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
