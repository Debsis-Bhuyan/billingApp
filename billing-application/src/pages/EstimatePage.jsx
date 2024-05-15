import React, { useState, useEffect } from "react";

import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import DeleteShareEdit from "../components/DeleteShareEdit";
import AddFirstPurchase from "../components/AddFirstPurchase";

const EstimatePage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isShareOpen, setShareOpen] = useState(false);
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
      number,
      date,
      dueDate,
      totalAmount,
      balance,
      type,
      status,
    };
    setPurchaseOrders([...purchaseOrders, formData]);
    // Reset form fields
    setParty("");
    setNumber("");
    setDate("");
    setDueDate("");
    setTotalAmount("");
    setBalance("");
    setType("");
    setStatus("");

    setPopupOpen(false);
  };

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
    <div className="w-full p-4">

      <AddFirstPurchase/>
    </div>
  );
};

export default EstimatePage;
