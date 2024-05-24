import React from "react";

import { useLocation } from "react-router-dom";


const CreatePurchaseBills = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return <div>CreatePurchaseBills</div>;
};

export default CreatePurchaseBills;
