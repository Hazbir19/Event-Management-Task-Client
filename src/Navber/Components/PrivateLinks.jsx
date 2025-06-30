import React from "react";
import { Link } from "react-router-dom";

const PrivateLinks = () => {
  return (
    <>
      <Link to="/myEvents" className="lg:text-xl text-lg block py-2">
        My Events
      </Link>
      <Link to="/addEvents" className="lg:text-xl text-lg block py-2">
        Add Events
      </Link>
    </>
  );
};

export default PrivateLinks;
