import React, { useState } from "react";
import image from "../assets/Logo.png";
import { states , state} from "../utils/state";
import { FaEdit } from "react-icons/fa";

const ProfilePage = ({ initialValues, onSubmit }) => {
  const [formValues, setFormValues] = useState(initialValues || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };
   // List of states
 
// console.log(state.st)
// state.forEach(sta=>{
//   console.log(sta.districts)
// })
  return (
    <div className="w-full justify-between shadow-md p-4 rounded-lg bg-white">
      <h1 className="text-4xl font-bold mb-2 relative">
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #FFA500, #FF6347)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         Profile Page
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 pr-4">
          <img src={image} alt="Sample Image" className="w-full h-auto" />
          <section className="text-center font-bold mt-4">
            
          </section>
        </div>
        <div className="w-1/2 pl-4">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor="businessName"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  Business Name*
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formValues.businessName || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor="gstin"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  GSTIN *
                </label>
                <input
                  type="text"
                  id="gstin"
                  name="gstin"
                  value={formValues.gstin || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor="phoneNo"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  Phone No*
                </label>
                <input
                  type="text"
                  id="phoneNo"
                  name="phoneNo"
                  value={formValues.phoneNo || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="+91"                
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  Email*
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formValues.email || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="xyz@gmail.com"                
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                {/* Other input fields */}
                <label
                  htmlFor="state"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  State*
                </label>
                <select
                  id="state"
                  name="state"
                  value={formValues.state || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor="businessAddress"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  Business Address*
                </label>
                <input
                  type="text"
                  id="businessAddress"
                  name="businessAddress"
                  value={formValues.businessAddress || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor="pincode"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formValues.pincode || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor="businessDetails"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                >
                  Business Details*
                </label>
                <textarea
                  id="businessDetails"
                  name="businessDetails"
                  value={formValues.businessDetails || ""}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-4 font-bold">
        &copy; 2024 SphereCode Private Limited
      </div>
      </div>
      
    </div>
  );
};

export default ProfilePage;
