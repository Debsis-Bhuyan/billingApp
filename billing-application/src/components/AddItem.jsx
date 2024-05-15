// AddItem.js

import React, { useState } from "react";

const AddItem = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      price: itemPrice,
      qty: quantity,
    };
    const updatedItems = [...items, newItem];
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setItems(updatedItems);
    setItemName("");
    setItemPrice("");
    setQuantity("")
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
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
            htmlFor="itemPrice"
          >
            Quantity
          </label>
          <input
            type="number"
            id="itemPrice"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter item price"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Item
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-lg font-bold">Items</h2>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2">{item?.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddItem;
