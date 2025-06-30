import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from "../Navber/Navber";

const MainLayouts = () => {
  return (
    <>
      <div className="bg-background h-screen">
        {/* To do Navber */}
        <Navber></Navber>
        <Outlet></Outlet> {/* to do Footer */}
      </div>
    </>
  );
};

export default MainLayouts;