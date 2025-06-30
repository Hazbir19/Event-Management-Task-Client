import React, { createContext, useState } from "react";
export const MainContent = createContext();
const ContextApi = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const data = {
    menuOpen,
    setMenuOpen,
    profileOpen,
    setProfileOpen,
  };
  return (
    <>
      <MainContent.Provider value={data}>{children}</MainContent.Provider>
    </>
  );
};

export default ContextApi;
