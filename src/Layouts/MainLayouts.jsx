import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from "../Navber/Navber";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <>
      <div className="bg-background min-h-screen flex flex-col">
        {/* To do Navber */}
        <Navber></Navber>
        <main className="flex-1">
          <Outlet></Outlet> {/* to do Footer */}
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayouts;