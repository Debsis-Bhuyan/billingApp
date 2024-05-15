import React, { useState, useEffect } from "react";

import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import DeleteShareEdit from "../components/DeleteShareEdit";
import { states } from "../utils/state";

const CreatePurchaseOrder = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  const [orderDate, setOrderDate] = useState("");
  const [orderNo, setOrderNo] = useState(1);
  const [addRow, setAddRow] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [paymentType, setPaymentType] = useState("Cash");

  // State for form fields

  const [type, setType] = useState("Sale");

  const [totalAmount, setTotalAmount] = useState(0);
  const [toatalquantity, setTotalQuantity] = useState(0);
  const [round, setRound] = useState(false);

  // Save purchase orders to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("purchaseOrders", JSON.stringify(purchaseOrders));
  }, [purchaseOrders]);

  // add Item code
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: "",
    qty: "",
    unit: "",
    pricePerUnit: Number,
    tax: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      amount:
        Number(formData.qty) * formData.pricePerUnit +
        (Number(formData.qty) * formData.pricePerUnit * Number(formData.tax)) /
          100,
    };
    setItems([...items, newItem]);
    localStorage.setItem("items", JSON.stringify([...items, newItem]));
    setFormData({
      item: "",
      qty: "",
      unit: "",
      pricePerUnit: Number,
      tax: "",
    });
  };
  const taxData = [28, 18, 12, 16];
  const unitData = ["m", "cm", "kg", "number"];
  const paymentMode = ["Cash","UPI","Card"]
  useEffect(() => {
    let total = 0;
    let toatalQty = 0;
    items.forEach((item) => {
      total += item.amount;
      toatalQty += Number(item.qty);
    });
    setTotalQuantity(toatalQty);
    setTotalAmount(total);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="w-full p-2">
        <h2 className=" text-3xl pb-3">Purchase Order</h2>
        <hr />
      <div className=" w-full  p-4">
        <div className="flex w-full justify-between items-center py-3">
          <div className=" w-1/2 flex  items-center  justify-between">
            <label htmlFor="type" className=" w-1/3 ">
              Select Party :
            </label>
            <select
              id="type"
              required
              className="w-2/3 mx-4 py-2 border rounded-md"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Sale">Sale</option>
              <option value="Purchase">Purchase</option>
            </select>
          </div>

          <div className="flex w-1/2 flex-col items-center justify-center">
            <div className="mb-2  w-full items-center flex justify-center">
              <label htmlFor="number1" className="1/3 mb-2 mr-3">
                Order No:
              </label>
              <input
                type="number"
                id="number1"
                className="w-2/3 px-4 py-1 border rounded-md mr-0"
                value={orderNo}
                onChange={(e) => setOrderNo(e.target.value)}
              />
            </div>
            <div className="mb-2  w-full flex justify-center">
              <label htmlFor="number" className="inline-block 1/3 mb-2 mr-4">
                Order Date:
              </label>
              <input
                type="Date"
                id="number"
                className="w-2/3 px-4 py-1 border rounded-md"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
              />
            </div>
            <div className="mb-2  w-full flex justify-center">
              <label htmlFor="number" className="inline-block 1/3 mb-2 mr-4">
                Due Date:
              </label>
              <input
                type="Date"
                id="number"
                className="w-2/3 px-4 py-1 border rounded-md"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="flex items-center w-full justify-center p-4">
          <div className="w-full mx-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2">#</th>
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
                {items.map((item, index) => (
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
                      {item.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-200 px-4 py-2 text-right"
                  >
                    Total quantity:
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {toatalquantity}
                  </td>
                  <td
                    colSpan="2"
                    className="border border-gray-200 px-4 py-2 text-right"
                  >
                    Total Amount:
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {totalAmount.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
            {!addRow && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded"
                onClick={(e) => {
                  setAddRow(!addRow);
                }}
                value={addRow}
              >
                Add row
              </button>
            )}

            <div className="flex w-full justify-center items-center py-">
              {addRow && (
                <div className="flex  w-full h-full  justify-between items-center">
                  <div className=" w-full flex">
                    {/* Form fields */}
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="item"
                        value={formData.item || ""}
                        onChange={handleChange}
                        placeholder="Item"
                        className=" border  m-3  px-4 text-black rounded"
                        required
                      />
                      <input
                        type="number"
                        name="qty"
                        value={formData.qty || ""}
                        onChange={handleChange}
                        placeholder="Quantity"
                        className=" border  m-3  px-4 text-black rounded"
                        required
                      />

                      <select
                        id="unit"
                        name="unit"
                        value={formData.unit || ""}
                        onChange={handleChange}
                        className="border  m-3  px-4 text-black rounded"
                        required
                      >
                        <option value=" ">Select Unit</option>
                        {unitData.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>

                      <input
                        type="number"
                        name="pricePerUnit"
                        value={formData.pricePerUnit || ""}
                        onChange={handleChange}
                        placeholder="Price Per Unit without tax"
                        className=" border  m-3  px-4 text-black rounded"
                        required
                      />
                      <select
                        id="unist"
                        name="tax"
                        value={formData.tax || " "}
                        onChange={handleChange}
                        className="border  m-3  px-4 text-black rounded"
                        required
                      >
                        <option value=" ">Select Tax</option>
                        {taxData.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded"
                        type="submit"
                      >
                        Add Item
                      </button>
                      <button
                        className="bg-blue-400 hover:bg-blue-600 text-white font-bold m-3 py-2 px-4 rounded"
                        onClick={(e) => {
                          setAddRow(!addRow);
                        }}
                        value={addRow}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-4 w-full justify-start p-4">
          <label htmlFor="payment" className="inline-block 1/3 mb-2 mr-4">
               Payment Mode:
              </label>
            <select
              id="payment"
              name="paymentType"
              value={paymentType}
              onChange={(e)=>{setPaymentType(e.target.value)}}
              className="border  m-3  px-4 text-black rounded"
              required
            >
             
              {paymentMode.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end gap-4 w-full justify-center p-4">
            <div>
              <input
                type="checkbox"
                id="round"
                onChange={(e) => {
                  setRound(!round);
                }}
              />
              <label htmlFor="round"> Round Off</label>
            </div>
            {!round ? (
              <div className=" flex">
                Total Amount:
                <span className="border mx-4 px-4 ">
                  {totalAmount.toFixed(2)}
                </span>
              </div>
            ) : (
              <div className=" flex ">
                Total Amount:
                <span className="border mx-4 px-4 ">
                  {Math.round(totalAmount)}
                </span>
              </div>
            )}
          </div>
        </div>

        <hr />
        <div className="flex justify-end items-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePurchaseOrder;
