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
  const [invoiceAmount, setInvoiceAmount] = useState(Number);
  const [receiveAmount, setReceiveAmount] = useState("");
  const [invoiceNo, setInvoiceNo] = useState(1000001);
  const [invoiceDate, setInvoiceDate] = useState(new Date());
  const [customerName, setCustomerName] = useState("");
  const [open, setOpen] = useState(false);

  const [item, setItem]= useState([]);
  const [itemName, setItemName]= useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQty, setItemQty] = useState("");

  const [da, setDa] = useState("");


  const handleInvoiceAmountChange = (e) => {
    setInvoiceAmount(e.target.value);
  };
  const handleReceivedAmountChange = (e) => {
    setReceiveAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(itemPrice) * Number(itemQty);
    console.log(amount)
        const data = {
      itemName,
      itemPrice,
      itemQty,
      totalPrice:amount,

    }

    const Item = [...item,data]
    setItem(Item)
    setItemName("")
    setItemPrice("")
    setItemQty("")
   
  };

  return (
    <div className="w-full">
      <div className={`w-full md:w-2/3  flex-col ${da} `}>
        <span className="py-2 px-2 text-2xl font-medium text-slate-700 ">
          Dashboard
        </span>
      </div>
      <div className="flex gap-6 flex-col  md:flex-row py-2">
        <div className="flex  w-full  gap-6">
          {/* Left side: Form */}
          <div className={`flex-1      bg-gray-100 h-screen w-full p-3 ${da}`}>
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
                <button
                  className=" py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={(e) => setOpen(!open)}
                >
                  <BiCommentAdd className="inline mb-1 mr-2 " />
                  Add sample item
                </button>
              </h3>
            </div>
            <div>
              {open && (
                <div>
                  
                  <form className="w-full  " onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="itemName"
                        >
                          Item Name
                        </label>
                        <input
                          type="text"
                          id="itemName"
                          value={itemName}
                          onChange={(e) => {
                            setItemName(e.target.value);
                          }}
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter item name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="itemPrice"
                        >
                          Item Price
                        </label>
                        <input
                          type="number"
                          id="itemPrice"
                          value={itemPrice}
                          onChange={(e) => {
                            setItemPrice(e.target.value);
                          }}
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter item price"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="quantity"
                        >
                          Quantity
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          value={itemQty}
                          onChange={(e) => {
                            setItemQty(e.target.value);
                          }}
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter item quantity"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Add Item
                    </button>
                  </form>
                </div>
              )}
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
                      // onChange={(e) => {
                      //   setInvoiceAmount(e.target.value);
                      // }}
                      readOnly
                    />
                    <MdOutlineCurrencyRupee className="inline text-2xl mb-1 mr-2" />
                  </div>
                </div>
                <div>
                  <p className="text-sm pb-2">
                    Received Amount*
                  </p>
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
                Balance <MdOutlineCurrencyRupee className="inline mb-1 mr-2" />
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
          <div className="flex-1 w-full flex h-screen  ">
            <Invoice setStyle={setDa} itemData={item}  />
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
