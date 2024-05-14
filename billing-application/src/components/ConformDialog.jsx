// import React from "react";

// const ConformDialog = ({ message, setOPEN }) => {
//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log("Log out successfully completed.");
//   };
//   return (
//     <div className="flex w-64 h-64 items-center border rounded-sm justify-center  p-20">
//       <p className="text-base">{message}</p>

//       <div className="w-full flex gap-6 justify-end mt-8">
//         <button
//           className="bg-red-600 text-red-600 bg-opacity-25 text-sm font-medium"
//           onClick={handleClick}
//         >
//           OK
//         </button>

//         <button
//           className="border border-slate-300 text-slate-600 text-sm"
//           onClick={()=>{ setOPEN(false)}}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConformDialog;
import { useState } from 'react';

const LogoutDialog = ({ isOpen, onClose, onLogout }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    // Perform logout logic, like API call, etc.
    // After logout is successful, setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
      onLogout(); // Call the callback function passed from parent component
    }, 1000); // Just for demonstration, replace with actual logout logic
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-sm mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="relative flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-lg items-center justify-center flex font-semibold">Logout</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="text-black opacity-5">×</span>
                </button>
              </div>
              <div className="relative flex-auto p-6">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  Are you sure you want to logout?
                </p>
              </div>
              <div className="flex items-center justify-end px-6 py-4 bg-gray-50 border-t border-solid rounded-b border-blueGray-200">
                <button
                  className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className={`bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none ${
                    isLoading ? 'cursor-not-allowed' : 'hover:bg-red-600'
                  }`}
                  type="button"
                  disabled={isLoading}
                  onClick={handleLogout}
                >
                  {isLoading ? 'Logging out...' : 'Logout'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutDialog;

