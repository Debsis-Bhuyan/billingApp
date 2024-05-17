import React, { useState } from "react";

const Invoice = ({ setStyle }) => {
  const [quantity, setQuantity] = useState(10);
  const [pricePerUnit, setPricePerUnit] = useState(100);
  const [invoiceAmount, setInvoiceAmount] = useState(0);
  const [amountInWords, setAmountInWords] = useState("");

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
    // Your logic to convert number to words
    return "One Thousand Rupees only"; // Dummy implementation
  };

  // Handle printing
  const handlePrint = () => {
    setStyle("flex");
    window.print();
    setStyle("");
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
        <button className="bg-purple-600 text-white py-2 px-4 rounded">
          Sample Invoice
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-purple-600 border-2 p-2 rounded">
          <h2 className="font-bold text-purple-600">Bill To</h2>
          <p>Your Customer Name</p>
        </div>
        <div className="border-purple-600 border-2 p-2 rounded">
          <h2 className="font-bold text-purple-600">Invoice Details</h2>
          <p>Invoice No.: #1</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-2 border-purple-600">Item Name</th>
            <th className="py-2 px-4 border-2 border-purple-600">Qty</th>
            <th className="py-2 px-4 border-2 border-purple-600">Price/Unit</th>
            <th className="py-2 px-4 border-2 border-purple-600">Amt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-2 border-purple-600">
              Sample Item
            </td>
            <td className="py-2 px-4 border-2 border-purple-600">{quantity}</td>
            <td className="py-2 px-4 border-2 border-purple-600">
              {formatCurrency(pricePerUnit)}
            </td>
            <td className="py-2 px-4 border-2 border-purple-600">
              {formatCurrency(invoiceAmount)}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-2 border-purple-600">Total</td>
            <td className="py-2 px-4 border-2 border-purple-600" colSpan="2">
              {quantity}
            </td>
            <td className="py-2 px-4 border-2 border-purple-600">
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
          <p>Sub Total: {formatCurrency(invoiceAmount)}</p>
          <p>Total: {formatCurrency(invoiceAmount)}</p>
          <p>Balance Due: {formatCurrency(invoiceAmount)}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
