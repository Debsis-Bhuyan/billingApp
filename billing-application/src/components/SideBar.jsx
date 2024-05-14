import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import profile from "../assets/Logo.png";
import { useState } from "react";
import ConformDialog from "./ConformDialog";
import useStore from "../store";

const SideBar = () => {
  const { signOut,user } = useStore();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    console.log("Logging out...");
    setOpen(false); // Close the logout dialog
    navigate("/auth");

    // localStorage.removeItem("user");
    signOut();
  };

  return (
    <div className="w-full flex  ">
      <nav className=" h-full flex flex-col gap-5  mr-2  border-slate-700 ">
        <div className="bg-gray-800 text-gray-100 w-56 h-full flex flex-col">
          <div className="flex items-center justify-center h-12 border-b border-gray-700">
            <span className="text-xl font-semibold">Menu</span>
          </div>
          <nav className="flex-1  p-4 overflow-y-auto">
            <div className="flex gap-2 items-center mt-2">
              <Link to="/profile" className="flex gap-2">
                {/* {! user?.user.image ? ( */}
                <img
                  src={user?.user.profileUrl}

                  // src={profile}
                  alt={user?.user.fullName}
                  className="w-8 h-8 rounded-full"
                />

                <span className="font-medium text-white items-center pl-1 justify-center dark:text-gray-500">
                  {/* {user?.user.name}   */} userName
                </span>
              </Link>
            </div>

            <Link to="/dashboard" className="block pt-2  hover:bg-gray-700">
              Dashboard
            </Link>
            <Link to="/items" className="block pt-2 hover:bg-gray-700">
              items
            </Link>
            <Link to="/sales" className="block pt-2 hover:bg-gray-700">
              Sales
            </Link>
            <Link to="/expence" className="block pt-2 hover:bg-gray-700">
              Expence
            </Link>
            <Link to="/purchase" className="block pt-2   hover:bg-gray-700">
              Purchase
            </Link>
            <Link to="/utilitis" className="block pt-2 hover:bg-gray-700">
              Utilitis
            </Link>
            <Link to="/feedback" className="block pt-2 hover:bg-gray-700">
              Feedback
            </Link>
            <Link to="/settings" className="block pt-2 hover:bg-gray-700">
              Settings
            </Link>

            <button
              className="block pt-2 hover:bg-gray-700"
              onClick={() => {
                setOpen(true);
              }}
            >
              Logout
            </button>
          </nav>
        </div>
      </nav>
      <div className="flex items-center justify-center max-w-96">
        <ConformDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default SideBar;
