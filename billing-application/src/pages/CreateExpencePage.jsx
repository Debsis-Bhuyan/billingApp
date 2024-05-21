import React, { useState } from "react";
import CreateExpenceWithGst from "../components/AddExpence";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import CreateExpenseWithOutGst from "../components/CreateExpenseWithOutGst";

const CreateExpencePage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
 
        <div className="flex justify-center items-center">
          <h2 className="text-2xl px-4 mx-4">Expence</h2>
         <p className="text-2xl px-4 mx-4">GST</p>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{
              width: "100px",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="focus:outline-none"
          >
            {toggle ? (
              <FaToggleOn style={{ fontSize: "50px", color: "blue" }} />
            ) : (
              <FaToggleOff style={{ fontSize: "50px", color: "gray" }} />
            )}
          </button>
        </div>
        <div>
          <p className="text-xl mx-4 px-4">calculator</p>
        </div>
      </div>

      <div>{toggle ? <CreateExpenceWithGst /> : <CreateExpenseWithOutGst/> }</div>
    </div>
  );
};

export default CreateExpencePage;
