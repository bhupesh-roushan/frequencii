import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    if (newAddress.trim()) {
      setAddress(newAddress); // Set the new address
    }
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Enter New Address"
        className="border w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end mt-5 gap-5">
        <Button
          variant="outline"
          className="shadow-sm shadow-blue-200 mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="outline"
          className="shadow-sm shadow-blue-200 mr-2"
          onClick={onClose}
        >
          Save Address
        </Button>
      </div>
    </div>
  );
};

export default ChangeAddress;
