import React from "react";
import { Outlet } from "react-router-dom";
import ShopingHeader from "./Header";

const ShopingLayout = () => {
  return (
    <div>
      <ShopingHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShopingLayout;
