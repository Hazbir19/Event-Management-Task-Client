import React, { useContext } from "react";
import { MainContent } from "../../Context/ContextApi";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const ManuButton = () => {
  const { menuOpen, setMenuOpen } = useContext(MainContent);

  return (
    <>
      <div className="flex items-center gap-4">
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link to="/" className="text-xl font-bold">
          <img
            src="https://i.ibb.co/bRK7908C/Event-Logo-removebg-preview.png"
            alt="Logo"
            className="w-[7rem] h-[7rem] rounded-full"
          />
        </Link>
      </div>
    </>
  );
};

export default ManuButton;
