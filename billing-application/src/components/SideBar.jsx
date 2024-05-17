import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import profile from "../assets/Logo.png";
import { useState } from "react";
import ConformDialog from "./ConformDialog";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/userSlice";

const SideBar = () => {
  const user =useSelector(state => state.user?.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    console.log("Logging out...");
    setOpen(false); // Close the logout dialog
    dispatch(clearUser());
    navigate("/auth");
  };

  return (
    <div className="w-full flex  ">
      <nav className=" h-full flex flex-col gap-5  mr-2  border-slate-700 ">
        <div className="bg-gray-800 text-gray-100 w-56 h-full flex flex-col">
          <div className="flex items-center justify-center h-12 border-b border-gray-700">
            <span className="text-xl font-semibold">Menu</span>
          </div>
          <nav className="flex-1  p-4 overflow-y-auto">
            <div className="flex gap-2 p-1 px-4 items-center mt-2">
              <Link to="/profile" className="flex  gap-2">
                {/* {! user?.user.image ? ( */}
                <img
                  src={user?.user.profileUrl || profile}
                  // src={profile}
                  alt={user?.user.fullName}
                  className="w-10 h-10 rounded-full"
                />

                <span className="font-medium text-white items-center p-1 pl-1 justify-center dark:text-gray-500">
                  {user?.user.fullName}   
                </span>
              </Link>
            </div>

            <Link
              to="/dashboard"
              className="block p-1 pt-2 px-4  hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link to="/items" className="block  px-4  p-1 hover:bg-gray-700">
              items
            </Link>
            <Link to="/sales" className="block  px-4  p-1 hover:bg-gray-700">
              Sales
            </Link>
            <Link to="/expence" className="block  px-4  p-1 hover:bg-gray-700">
              Expence
            </Link>
            <Link
              to="/purchase"
              className="block p-1  px-4   hover:bg-gray-700"
            >
              Purchase
            </Link>
            <Link
              to="/purchase-order"
              className="block pt-2  px-4    hover:bg-gray-700"
            >
              Purchase Order
            </Link>
            <Link
              to="/estimate"
              className="block p-1 px-4    hover:bg-gray-700"
            >
              Estimate
            </Link>
            <Link to="/utilitis" className="block p-1 px-4  hover:bg-gray-700">
              Utilitis
            </Link>
            <Link to="/feedback" className="block p-1 px-4  hover:bg-gray-700">
              Feedback
            </Link>
            <Link to="/settings" className="block p-1 px-4  hover:bg-gray-700">
              Settings
            </Link>

            <Link
              className="block p-1  px-4  hover:bg-gray-700"
              onClick={() => {
                setOpen(true);
              }}
            >
              Logout
            </Link>
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
