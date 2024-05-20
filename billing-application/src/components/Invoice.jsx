import React, { useState } from "react";
import { numberToWords } from "../utils";

const Invoice = ({ setStyle, itemData,billDetails }) => {
  const [quantity, setQuantity] = useState(10);
  const [pricePerUnit, setPricePerUnit] = useState(100);
  const [invoiceAmount, setInvoiceAmount] = useState(0);
  const [amountInWords, setAmountInWords] = useState(
    numberToWords(invoiceAmount)
  );

  console.log(billDetails)

  // Calculate invoice amount
  const calculateInvoiceAmount = () => {
    const amount = quantity * pricePerUnit;
    setInvoiceAmount(amount);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  // Convert number to words
  const convertNumberToWords = (number) => {
    return numberToWords(number);
  };

  // Handle printing
  const handlePrint = () => {
    setStyle("hidden");
    setTimeout(() => {
      window.print();
      setStyle("");
    }, 1);
  };

  return (
    <div className="p-4 w-full h-screen rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-purple-600">
          1Cr SphereCode have created invoices on Billing ⭐
        </div>
        <button
          className="bg-purple-600 text-white py-2 px-4 rounded"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-purple-600 border p-2 rounded">
          <h2 className="font-bold text-purple-600">Bill To</h2>
          <p>{billDetails?.customerName || "Enter Customer Name"}</p>
        </div>
        <div className="border-purple-600 border p-2 rounded">
          <h2 className="font-bold text-purple-600">Invoice Details</h2>
          <p>Invoice No.:{billDetails?.invoiceNo || "#1" }</p>
          <p>Date: {  new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-purple-600">Item Name</th>
            <th className="py-2 px-4 border border-purple-600">Qty</th>
            <th className="py-2 px-4 border border-purple-600">Price/Unit</th>
            <th className="py-2 px-4 border border-purple-600">Amt</th>
          </tr>
        </thead>
        <tbody>
          {itemData.map((data,index) => (
            <tr key={index}>
              <td className="py-2 px-4 border border-purple-600">
                {data?.itemName}
              </td>
              <td className="py-2 px-4 border border-purple-600">  {data?.itemQty}</td>
              <td className="py-2 px-4 border border-purple-600">
                {formatCurrency( data?.itemPrice)} Rs
              </td>
              <td className="py-2 px-4 border border-purple-600">
                {formatCurrency( data?.totalPrice)} Rs
              </td>
            </tr>
          ))}

          <tr>
            <td className="py-2 px-4 border border-purple-600">Total</td>
            <td className="py-2 px-4 border border-purple-600" colSpan="2">
              {quantity}
            </td>
            <td className="py-2 px-4 border border-purple-600">
              {formatCurrency(invoiceAmount)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p>Amount In Words: {amountInWords}</p>
        </div>
        <div>
          <p>Sub Total: {formatCurrency(billDetails?.invoiceAmount || 0.00)}</p>
          <p>Total: {formatCurrency(invoiceAmount)}</p>
          <p>Balance Due: {formatCurrency(billDetails?.receiveAmount || 0.00)}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
