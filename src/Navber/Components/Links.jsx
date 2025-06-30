import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link to="/" className="lg:text-xl text-lg block py-2">
        Home
      </Link>
      <Link to="/events" className="lg:text-xl text-lg block py-2">
        Events
      </Link>
    </>
  );
};

export default Links;
