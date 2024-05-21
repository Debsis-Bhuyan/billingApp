import React, { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import DeleteShareEdit from "../components/DeleteShareEdit";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "../store/transactionSlice";

const AddPurchaseOrder = () => {
  const transctionData = useSelector((state) => state.transaction).transaction;
  const dispatch = useDispatch();
  
  const [numberData, setNumberData] = useState(Number(transctionData[transctionData.length-1].number) + 1)
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [purchaseOrders, setPurchaseOrders] = useState(transctionData);
  const [searchQuery, setSearchQuery] = useState("");

  const [isOpen, setOpen] = useState(false);

  // State for form fields
  const [party, setParty] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [type, setType] = useState("Sale");
  const [status, setStatus] = useState("Pending");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const formData = {
      party,
      number:numberData ,
      date,
      dueDate,
      totalAmount,
      balance,
      type,
      status,
    };

    dispatch(addTransaction(formData));

    setPurchaseOrders([...purchaseOrders, formData]);
    // Reset form fields
    setParty("");
    setNumber("");
    setDate("");
    setDueDate("");
    setTotalAmount("");
    setBalance("");
    setType("Sale");
    setStatus("Pending");
    setNumberData(numberData + 1)

    setPopupOpen(false);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filteredOrders = transctionData.filter(order =>
      order.party.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPurchaseOrders(filteredOrders);
  }, [searchQuery, transctionData]);

  // Load purchase orders from local storage on component mount
  useEffect(() => {
    const savedPurchaseOrders = localStorage.getItem("purchaseOrders");
    if (savedPurchaseOrders) {
      setPurchaseOrders(JSON.parse(savedPurchaseOrders));
    }
  }, []);

  // Save purchase orders to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("purchaseOrders", JSON.stringify(purchaseOrders));
  }, [purchaseOrders]);

  return (
    <div className=" w-full  p-4">
      <div className="flex w-full justify-between items-center py-3">
        <div className="flex items-center">
          <p className="mr-2 text-2xl">All Transactions</p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 border rounded-md mr-2 focus:outline-none"
          />
          <FaSearch className="text-gray-700" />{" "}
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => setPopupOpen(true)}
          >
            <FaPlus className="mr-2" />
            Add Transaction
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center items-center py-3">
        {isPopupOpen && (
          <div className="flex  w-full h-full bg-gray-800 bg-opacity-50  justify-between items-center">
            <div className="bg-white w-full">
              {/* Form fields */}
              <form
                onSubmit={handleSubmit}
                className="flex w-full justify-between gap-2 mt-8"
              >
                <div className="mb-4 ">
                  <label htmlFor="party" className="block mb-2">
                    Party:
                  </label>
                  <input
                    type="text"
                    id="party"
                    className="w-full px-4 py-2 border rounded-md"
                    value={party}
                    onChange={(e) => setParty(e.target.value)}
                  />
                </div>
                {/* <div className="mb-4 ">
                  <label htmlFor="number" className="block mb-2">
                    Number:
                  </label>
                  <input
                    type="text"
                    id="number"
                    className="w-full px-4 py-2 border rounded-md"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div> */}
                <div className="mb-4">
                  <label htmlFor="date" className="block mb-2">
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border rounded-md"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-4 ">
                  <label htmlFor="dueDate" className="block mb-2">
                    Due Date:
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    className="w-full px-4 py-2 border rounded-md"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <div className="mb-4 ">
                  <label htmlFor="totalAmount" className="block mb-2">
                    Total Amount:
                  </label>
                  <input
                    type="number"
                    id="totalAmount"
                    className="w-full px-4 py-2 border rounded-md"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                  />
                </div>
                <div className="mb-4 ">
                  <label htmlFor="balance" className="block mb-2">
                    Balance:
                  </label>
                  <input
                    type="number"
                    id="balance"
                    className="w-full px-4 py-2 border rounded-md"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="type" className="block mb-2">
                    Type:
                  </label>
                  <select
                    id="type"
                    className="w-full mx-4 py-2 border rounded-md"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Sale">Sale</option>
                    <option value="Purchase">Purchase</option>
                  </select>
                </div>
                <div className="mb-4 ">
                  <label htmlFor="status" className="block mb-2">
                    Status:
                  </label>
                  <select
                    id="status"
                    className="w-full mx-4 py-2 border rounded-md"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
                {/* <div className="mb-4 mx-4">
                  <label htmlFor="action" className="block mb-2">
                    Action:
                  </label>
                  <input
                    type="text"
                    id="action"
                    className="w-full px-4 py-2 border rounded-md"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                  />
                </div> */}

                <div className="mx-4">
                  <div className="my-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 block items-center  rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                  <button
                    className="bg-gray-300 text-gray-700 block items-center mb-2  px-4 rounded-md"
                    onClick={() => setPopupOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <hr />
      <div className="flex items-center w-full justify-center p-4">
        {/* Table to display purchase orders */}
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Party</th>
              <th className="border px-4 py-2">Number</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Due Date</th>
              <th className="border px-4 py-2">Total Amount</th>
              <th className="border px-4 py-2">Balance</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {purchaseOrders.map((order, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>

                <td className="border px-4 py-2">{order.party}</td>
                <td className="border px-4 py-2">{order.number}</td>
                <td className="border px-4 py-2">{order.date}</td>
                <td className="border px-4 py-2">{order.dueDate}</td>
                <td className="border px-4 py-2">{Number(order.totalAmount).toFixed()}</td>
                <td className="border px-4 py-2">{Number(order.balance).toFixed()}</td>
                <td className="border px-4 py-2">{order.type}</td>
                <td className="border px-4 py-2">{order.status}</td>

                <td
                  className="border px-4 py-2"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <FaEllipsisV />
                  {isOpen && (
                    <DeleteShareEdit setOpen={setOpen} orderData={order} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <FaEllipsisV />
        </button>
      </div> */}
    </div>
  );
};

export default AddPurchaseOrder;
