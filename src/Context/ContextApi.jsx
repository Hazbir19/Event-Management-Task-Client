import React, { createContext, useEffect, useState } from "react";
export const MainContent = createContext();
import { ToastContainer } from "react-toastify";
const ContextApi = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    // Simulate user fetch (from localStorage or API)
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to load user", error);
      } finally {
        setLoading(false); // ✅ done loading
      }
    };

    fetchUser();
  }, []);
  // Login function

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };
  const data = {
    menuOpen,
    setMenuOpen,
    profileOpen,
    setProfileOpen,
    user,
    setUser,
    logout,
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
