import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/itemSlice";
import { FaTrashAlt } from "react-icons/fa";

const AddItem = () => {
  const item = useSelector((state) => state.item).item;
  console.log(item);
  const dispatch = useDispatch();

  const [items, setItems] = useState(item || []);
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
    setItems(updatedItems);
    console.log("ihkk",item)
    dispatch(addItem(newItem));

    setItemName("");
    setItemPrice("");
    setQuantity("");
  };

  const handleDelete = (index) => {
    console.log("delete")
    dispatch(removeItem(index));
  };
  useEffect(() => {
    console.log(item)
    setItems(item);
  }, [handleDelete]);

  return (
    <div className=" mx-auto mt-2  h-[90vh]  p-4">
      <h1
        style={{ color: "orange", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        className="text-3xl mb-6"
      >
        Inventory items
      </h1>
      <form onSubmit={handleSubmit} className="w-full  ">
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
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
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
      <div className="mt-4">
        <h2 className="text-2xl flex items-center justify-center font-bold">
          Items
        </h2>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Sl No.</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2">{item.qty}</td>
                <td className="border px-4 py-2" onClick={()=>handleDelete(index)}>
                  <FaTrashAlt />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddItem;
