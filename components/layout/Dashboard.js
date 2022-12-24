import React from "react";
import DashboardHeader from "../Header/DashboardHeader";
import Logo from "../Header/Logo";
import Menu from "../sidebar/Menu";

const Dashboard = ({ children }) => {
  return (
    <div className="drawer-mobile drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* <label
        htmlFor="my-drawer-2"
        className="btn-primary drawer-button btn lg:hidden"
      >
        Open drawer
      </label> */}
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <DashboardHeader />
        <div className="container mx-auto min-h-screen bg-slate-100 p-4">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="border-r p-4">
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
