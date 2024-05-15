import React, { useState, useEffect } from "react";

import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import DeleteShareEdit from "../components/DeleteShareEdit";

const CreateEstimate = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  const [date1, setDate1] = useState("");
  const [ref, setRef] = useState(1);
  const [addRow, setAddRow] = useState(false);

  // State for form fields

  const [type, setType] = useState("Sale");

  const [totalAmount, setTotalAmount] = useState(0);
  const [roundOffData, setRoundOffData] = useState(totalAmount);

  // Save purchase orders to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("purchaseOrders", JSON.stringify(purchaseOrders));
  }, [purchaseOrders]);

  // add Item code
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: "",
    qty: Number,
    unit: "",
    pricePerUnit: Number,
    tax: Number,
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
        formData.qty * formData.pricePerUnit +
        (formData.qty * formData.pricePerUnit * formData.tax) / 100,
    };
    setItems([...items, newItem]);
    localStorage.setItem("items", JSON.stringify([...items, newItem]));
    setFormData({
      item: "",
      qty: Number,
      unit: "",
      pricePerUnit: Number,
      tax: Number,
    });
  };
  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.amount;
    });
    setTotalAmount(total);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="w-full p-4">
      <div className=" w-full  p-4">
        <h2 className=" text-2xl">Estimate/Quatation</h2>
        <div className="flex w-full justify-between items-center py-3">
          <div className=" w-1/2 flex items-center justify-between">
            <label htmlFor="type" className=" w-1/3 mb-2">
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
                Reference No:
              </label>
              <input
                type="number"
                id="number1"
                className="w-2/3 px-4 py-2 border rounded-md mr-0"
                value={ref}
                onChange={(e) => setRef(e.target.value)}
              />
            </div>
            <div className="mb-4  w-full flex justify-center">
              <label htmlFor="number" className="inline-block 1/3 mb-2 mr-4">
                Invoice Date:
              </label>
              <input
                type="Date"
                id="number"
                className="w-2/3 px-4 py-2 border rounded-md"
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
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
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="6"
                    className="border border-gray-200 px-4 py-2 text-right"
                  >
                    Total Amount:
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {totalAmount}
                  </td>
                </tr>
              </tfoot>
            </table>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded"
              onClick={(e) => {
                setAddRow(!addRow);
              }}
              value={addRow}
            >
              Add row
            </button>
            <div className="flex w-full justify-center items-center py-">
              {addRow && (
                <div className="flex  w-full h-full  justify-between items-center">
                  <div className=" w-full flex">
                    {/* Form fields */}
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="item"
                        value={formData.item}
                        onChange={handleChange}
                        placeholder="Item"
                        className=" border  m-3  px-4 text-black rounded"
                      />
                      <input
                        type="number"
                        name="qty"
                        value={formData.qty}
                        onChange={handleChange}
                        placeholder="Qty"
                        className=" border  m-3  px-4 text-black rounded"
                      />
                      <input
                        type="text"
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                        placeholder="Unit"
                        className=" border  m-3  px-4 text-black rounded"
                      />
                      <input
                        type="number"
                        name="pricePerUnit"
                        value={formData.pricePerUnit}
                        onChange={handleChange}
                        placeholder="Price Per Unit without tax"
                        className=" border  m-3  px-4 text-black rounded"
                      />
                      <input
                        type="number"
                        name="tax"
                        value={formData.tax}
                        onChange={handleChange}
                        placeholder="Tax"
                        className=" border  m-3  px-4 text-black rounded"
                      />
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded"
                        type="submit"
                      >
                        Add Item
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-end gap-4 w-full justify-center p-4">
          {/* <div>
      
            <input type="checkbox" name="roundoff" id="round" value={roundOffData}/>
            <label for="round"  onChange={(e)=>{setRoundOffData(Math.round(totalAmount))}}> Round Off</label>
          </div> */}
          <div>
            Total Amount: <span className="border ">{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEstimate;
