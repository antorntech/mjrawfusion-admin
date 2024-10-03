import React, { useEffect, useState } from "react"; // Import the Pagination component
import { DeleteConfirmModal } from "../../components/DeleteConfirmModal";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import EditCustomer from "./EditCustomer";
import AddCustomer from "./AddCustomer";
import ClientSkeleton from "../../skeleton/ClientSkeleton";

const Customers = () => {
  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customersData")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [open, setOpen] = useState(false); // State for delete confirmation modal
  const [selectedCustomerId, setSelectedCustomerId] = useState(null); // ID of the Customer to be deleted

  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  const handleEditCustomer = (updatedCustomer) => {
    const updatedCustomers = customers.map((Customer) =>
      Customer.id === updatedCustomer.id ? updatedCustomer : Customer
    );
    setCustomers(updatedCustomers);
    setIsEditing(false);
  };

  const handleDeleteCustomer = (id) => {
    const filteredCustomers = customers.filter(
      (Customer) => Customer.id !== id
    );
    setCustomers(filteredCustomers);
    localStorage.setItem("customersData", JSON.stringify(filteredCustomers));
  };

  const handleEditClick = (Customer) => {
    setSelectedCustomer(Customer);
    setIsEditing(true);
  };

  const handleOpen = () => setOpen(!open); // Toggle modal open/close

  // Confirm deletion of the selected Customer
  const confirmDeleteCustomer = () => {
    handleDeleteCustomer(selectedCustomerId);
    handleOpen(); // Close the modal after deletion
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Column 1: Table */}
      <div className="Customers-table col-span-1">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Customer</h1>
          <p className="text-sm text-gray-500">
            Customers are {customers.length > 0 ? "" : "not"} available here.
          </p>
        </div>
        <div>
          {customers.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              {customers.map((customer) => (
                <Card className="mt-6 w-full">
                  <CardHeader className="relative grid mt-4 h-40 rounded-md place-items-center">
                    <img
                      src={customer.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography as="div" variant="h5">
                      {customer.name}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(customer)}
                      className="bg-orange-500 hover:bg-orange-700 lex items-center justify-center text-white px-4 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCustomerId(customer.id);
                        handleOpen(); // Open delete confirmation modal
                      }}
                      className="bg-red-500 hover:bg-red-700 flex items-center justify-center text-white px-4 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <ClientSkeleton />
          )}
        </div>
      </div>

      {/* Column 2: Conditional Form */}
      <div className="Customer-form col-span-1">
        {isEditing ? (
          <EditCustomer
            selectedCustomer={selectedCustomer}
            handleEditCustomer={handleEditCustomer}
          />
        ) : (
          <AddCustomer handleAddCustomer={handleAddCustomer} />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        open={open}
        handleOpen={handleOpen}
        itemId={selectedCustomerId}
        onDelete={confirmDeleteCustomer} // Confirm deletion function
        itemName="Customer" // Change to "Customer" for better context
      />
    </div>
  );
};

export default Customers;
