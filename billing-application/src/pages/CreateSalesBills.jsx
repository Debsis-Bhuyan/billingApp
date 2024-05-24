import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { numberToWords } from "../utils";
import { MdDelete } from "react-icons/md";

const CreateSalesBills = () => {
  const user = useSelector((state) => state.user).user.user;

  console.log(user);
  const location = useLocation();
  const data = location.state;
  console.log(data)
  const [purchaseDetails, setPurchaseDetails] = useState(data.purchaseOrders);
  const [partyData, setPartyData] = useState(data.partyData);
  console.log(purchaseDetails)
  console.log(partyData)
const [amount, setAmount] = useState(numberToWords(partyData?.totalAmount))
  const handlePrint = () => {
    window.print();
  };
  // const obj = {
  //   party: partyName,
  //   number: orderNo,
  //   date: orderDate,
  //   dueDate,
  //   totalAmount: totalAmount,
  //   balance: totalAmount,
  //   type: paymentType,
  //   status: paymentStatus,
  // };
  return (
    <div className="px-8 py-2 bg-white shadow-lg rounded-lg  mx-auto">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {user?.businessName}
          </h2>
          <p className="text-gray-700">Phone Number: {user?.phoneNo}</p>
        </div>
        <div>
          <img
            src={user?.profileUrl}
            alt="Business Logo"
            className=" w-20 rounded-full"
          />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-purple-600 text-center mb-4">
        Sale Order
      </h3>
      <div className="flex justify-between border-b border-gray-300 pb-4 mb-6">
        <div className="text-gray-700">
          <p className="font-semibold">From: {user?.businessName}</p>
          <p className="font-semibold">To: {partyData?.party}</p>
          <p>Order Number: {partyData?.number}</p>
        </div>
        <div className="text-gray-700">
          <p className="font-semibold">Order Details</p>
          <p>Date: {partyData?.date}</p>
          <p>Due Date: {partyData?.dueDate}</p>
        </div>
      </div>
      <div className="py-2 px-2 w-full">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Sl No</th>
              <th className="border border-gray-200 px-4 py-2">Item</th>
              <th className="border border-gray-200 px-4 py-2">Qty</th>
              <th className="border border-gray-200 px-4 py-2">Unit</th>
              <th className="border border-gray-200 px-4 py-2">
                Price/Unit (without tax)
              </th>
              <th className="border border-gray-200 px-4 py-2">Tax</th>
              <th className="border border-gray-200 px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {purchaseDetails.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {item.item}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {item.qty}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {item.unit}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {item.pricePerUnit}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {item.tax}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {Number(item.amount).toFixed(2)}
                    </td>
                    
                  </tr>
                ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="2"
                className="border border-gray-200 px-4 py-2 text-right"
              >
                Total quantity:
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {partyData?.toatalquantity}
              </td>
              <td
                colSpan="3"
                className="border border-gray-200 px-4 py-2 text-right"
              >
                Total Amount:
              </td>
              <td className="border border-gray-200 px-4 py-2">
              {partyData?.totalAmount}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex py-2 px-2">
        <div className="w-1/2 pr-4 text-gray-700">
          <p className="font-semibold">Order Amount In Words</p>
          <p>{amount}</p>
          <p className="mt-4 font-semibold">Terms and Conditions</p>
          <p>Thanks for doing business with us!</p>
          <p>Please visit Again</p>
        </div>
        <div className="w-1/2 text-gray-700">
          <div className="flex justify-between bg-purple-100 p-1">
            <p className="font-semibold">Total</p>
            <p>{partyData?.totalAmount}</p>
          </div>
          <div className="flex justify-between p-1  ">
            <p>Paid</p>
            <p>{partyData?.totalAmount}</p>
          </div>
          <div className="flex justify-between p-1">
            <p>Balance</p>
            <p>{partyData?.totalAmount}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end items-center">
        <div className="  p-4 w-1/2 text-center border">
          <p className="mt-6 font-semibold">Authorized Signatory</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handlePrint}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default CreateSalesBills;
