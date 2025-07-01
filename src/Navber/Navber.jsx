import { useContext } from "react";
import Links from "./Components/Links";
import ManuButton from "./Components/ManuButton";
import OpenProfile from "./Components/OpenProfile";
import PrivateLinks from "./Components/PrivateLinks";
import UserProfile from "./Components/UserProfile";
import { Link } from 'react-router-dom';
import { MainContent } from "../Context/ContextApi";
import { CircleUser } from "lucide-react";

const Navber = () => {
  const { user } = useContext(MainContent);
  const { menuOpen, profileOpen } = useContext(MainContent);

  return (
    <div>
      <nav className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <ManuButton></ManuButton>
          <ul
            className={`md:flex gap-6 items-center text-gray-800 text-lg font-medium ${
              menuOpen
                ? "block absolute top-[4.5rem] left-0 w-full bg-background p-4 border-t"
                : "hidden"
            } md:static md:w-auto`}
          >
            <Links></Links>
            {user && <PrivateLinks></PrivateLinks>}
          </ul>

          <div className="relative">
            {user ? (
              <UserProfile></UserProfile>
            ) : (
              <>
                <div className="flex justify-evenly items-center gap-5">
                  <CircleUser size={35} strokeWidth={1} />
                  <Link to="/login" className="text-lg font-medium">
                    Login
                  </Link>
                </div>
              </>
            )}

            {profileOpen && user && <OpenProfile />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
