import { LogOut, Shield, User } from 'lucide-react';

import { Link } from 'react-router-dom';

const OpenProfile = () => {
    const user =false;
    return (
       <>
          <div className="absolute right-0 mt-2 bg-background shadow-lg border rounded-xl w-48 p-4 space-y-2">
                <div className="text-center">
                  <p className="font-semibold text-gray-700">
                    {user?.displayName}
                  </p>
                </div>
                <hr />
                <Link
                  to="#"
                  className="flex items-center gap-2 text-gray-700 hover:bg-primary px-2 py-1 rounded"
                >
                  <User size={18} /> Profile
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-gray-700 hover:bg-primary px-2 py-1 rounded"
                >
                  <Shield size={18} /> Privacy Settings
                </Link>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-gray-700 hover:bg-primary px-2 py-1 rounded"
                >
                  <LogOut size={28} strokeWidth={1} />
                  <button className="flex items-center gap-2">sign Out</button>
                </Link>
              </div>
       
       </>
    );
};

export default OpenProfile;