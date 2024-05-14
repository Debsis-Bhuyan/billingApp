import React from 'react';
import { BsCart4 } from "react-icons/bs"; // Importing the shopping cart icon from React Icons

const AddFirstPurchase = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white-100">
      <BsCart4 size={100} className="text-blue-900 mb-4" /> 
      <p className="text-center mb-8">
        Make Purchase invoice & print or share with your customers directly via WhatsApp or Email
      </p>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none">
        Add your first purchase Invoice
      </button>
    </div>
  );
};

export default AddFirstPurchase;
