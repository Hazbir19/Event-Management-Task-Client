import React, { useContext } from "react";
import { MainContent } from "../../Context/ContextApi";

const UserProfile = () => {
    const{setProfileOpen,profileOpen} = useContext(MainContent)
    const { user } = useContext(MainContent);
    return (
      <>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <img
            src={user?.photoUrl || "https://i.ibb.co/4ZpHQbz/user.png"}
            alt="User"
            className="w-[3.5rem] h-[3.5rem] rounded-full border"
          />
        </div>
      </>
    );
};

export default UserProfile;
