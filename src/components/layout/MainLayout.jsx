import React from "react";
import SideBar from "../common/SideBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
