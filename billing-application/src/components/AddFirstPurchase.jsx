import React from 'react';
import { BsCart4 } from "react-icons/bs"; // Importing the shopping cart icon from React Icons
import { Link } from 'react-router-dom';

const AddFirstPurchase = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white-100">
      <BsCart4 size={100} className="text-blue-900 mb-4" /> 
      <p className="text-center mb-8">
        Make Estimate/ Quotation/ Proforma Invoice and share with your parties by Printed copies you can convert them to sale Invoice later by just click of a button.
      </p>
      <Link to="/create-estimate" className =" bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none"> Add your first Estimate</Link>
      
    </div>
  );
};

export default AddFirstPurchase;
