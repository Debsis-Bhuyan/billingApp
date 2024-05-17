import React, { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import image from "../assets/invoice.jpg";
import { FaFileInvoice } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { BiCommentAdd } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import Invoice from "../components/Invoice";

const Dashboard = () => {
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [invoiceNo, setInvoiceNo] = useState(1000001);
  const [invoiceDate, setInvoiceDate] = useState(new Date());
  const [customerName, setCustomerName] = useState("");

  const handleInvoiceAmountChange = (e) => {
    setInvoiceAmount(e.target.value);
  };
  const handleReceivedAmountChange = (e) => {
    setReceiveAmount(e.target.value);

  };
  const [st,setSt] =useState({
   dispay:"flex"
  })
  const[ da,setDa ]= useState("")
  return (
    <div className="w-full">
      <div className="w-full md:w-2/3 flex flex-col ">
        <span className="py-2 px-2 text-2xl font-medium text-slate-700">
          Dashboard
        </span>
      </div>
      <div className="flex gap-6 flex-col  md:flex-row py-2">
        <div className="flex  w-full  gap-6">
          {/* Left side: Form */}
          <div className={`flex-1      bg-gray-100 h-screen w-full p-3 ${da}`} style={st} >
            <div className="mb-6">
              <h2 className="text-xl font-bold">
                Enter details to make your First Purchase Sale
                <IoIosRocket className="inline mb-1" />
              </h2>
              <p className="text-sm">
                First sale is made in less than a minute on Our App
              </p>
            </div>
            <hr className="my-6 flex-col" />
            <div className="flex justify-between mb-6">
              <div className="mr-2">
                <h3 className="text-lg font-bold">
                  <FaFileInvoice className="inline mb-1 mr-2" /> Invoice
                  Details:
                </h3>
                <div className="mb-2 flex items-center justify-center">
                  <p className="text-sm">Invoice Number:</p>

                  <span className="border rounded-sm px-4 mx-4 py-1 ">
                    {invoiceNo}
                  </span>
                </div>
                <div className="block items-center justify-center">
                  <p className="text-sm">
                    Invoice Date:{" "}
                    <span>{invoiceDate.toLocaleDateString()}</span>
                  </p>
                </div>
              </div>
              <div className="block">
                <h3 className="text-lg font-bold">
                  <IoPersonAddSharp className="inline mb-1 mr-2" /> Bill To:
                </h3>
                <div className="mb-2  flex  items-center justify-between">
                  <span htmlFor="customerName" className="mr-2 inline-block">
                    Customer Name :
                  </span>
                  <input
                    type="text"
                    className="border block  border-black p-1 w-full"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="p-2 mb-2">
              <h3 className="text-lg font-bold flex items-center">
                <button className=" py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  <BiCommentAdd className="inline mb-1 mr-2 " />
                  Add sample item
                </button>
              </h3>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold">
                <FaRupeeSign className="inline mb-1 mr-2" />
                Invoice Calculation:
              </h3>
              <div className="flex justify-between">
                <div className="mr-10">
                  <p className="text-sm pb-2">Invoice Amount*</p>
                  <div className="flex items-center">
                    <input
                      type="number"
                      name="invoiceAmount"
                      className="border rounded-sm border-black p-1 w-full"
                      value={invoiceAmount}
                      onChange={(e) => {
                        setInvoiceAmount(e.target.value);
                      }}
                    />
                    <MdOutlineCurrencyRupee className="inline text-2xl mb-1 mr-2" />
                  </div>
                </div>
                <div>
                  <p className="text-sm pb-2">Received Amount*</p>
                  <div className="flex items-center">
                    <input
                      type="number"
                      name="receiveAmount"
                      className="border rounded-sm border-black p-1 w-full"
                      value={receiveAmount}
                      onChange={(e) => {
                        setReceiveAmount(e.target.value);
                      }}
                    />
                    <MdOutlineCurrencyRupee className="inline text-2xl mb-1 mr-2" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="p-4 mb-6">
              <p className="text-lg font-bold flex items-center">
                Balance <MdOutlineCurrencyRupee className="inline mb-1 mr-2" />{" "}
                {invoiceAmount - receiveAmount}
              </p>
            </div>

            {/* <div className="border border-blue-500 rounded-lg p-4">
              <h3 className="text-lg font-bold flex items-center">
                <MdOutlineCreateNewFolder className="inline mb-1 mr-2" /> Create
                your First Invoice
              </h3>
            </div> */}
          </div>

          {/* Right side: Image */}
          <div className="flex-1 w-full flex h-screen  " >
            {/* <img
              src={image}
              alt="Invoice Example"
              className="w-auto flex  h-full object-cover"
            /> */}
            <Invoice setStyle={setDa}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// const [st,setSt] = useState({
//   display:"none"
// });
// const handleSub =()=>{
//   setSt({
//     display:"none"
//   })
// }
