import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <>
        <div>
            Main Layout 
            {/* To do Navber */}
        </div>
              <Link to="/" className='mr-5'>Home</Link>
              <Link to="/events">Events</Link>
        <Outlet></Outlet>
        {/* to do Footer */}
        </>
    );
};

export default MainLayouts;