import React, { createContext, useState } from "react";
export const MainContent = createContext();
import { ToastContainer } from "react-toastify";
const ContextApi = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  const data = {
    menuOpen,
    setMenuOpen,
    profileOpen,
    setProfileOpen,
    user,
    setUser,
  };
  return (
    <>
      <MainContent.Provider value={data}>
        {children}
        <ToastContainer />
      </MainContent.Provider>
    </>
  );
};

export default ContextApi;
