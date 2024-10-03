import React, { useEffect, useState } from "react"; // Import the Pagination component
import { DeleteConfirmModal } from "../../components/DeleteConfirmModal";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import EditClient from "./EditClient";
import AddClient from "./AddClient";
import ClientSkeleton from "../../skeleton/ClientSkeleton";

const Clients = () => {
  const [clients, setClients] = useState(
    JSON.parse(localStorage.getItem("clientsData")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [open, setOpen] = useState(false); // State for delete confirmation modal
  const [selectedClientId, setSelectedClientId] = useState(null); // ID of the Client to be deleted

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  const handleEditClient = (updatedClient) => {
    const updatedClients = clients.map((Client) =>
      Client.id === updatedClient.id ? updatedClient : Client
    );
    setClients(updatedClients);
    setIsEditing(false);
  };

  const handleDeleteClient = (id) => {
    const filteredClients = clients.filter((Client) => Client.id !== id);
    setClients(filteredClients);
    localStorage.setItem("clientsData", JSON.stringify(filteredClients));
  };

  const handleEditClick = (Client) => {
    setSelectedClient(Client);
    setIsEditing(true);
  };

  const handleOpen = () => setOpen(!open); // Toggle modal open/close

  // Confirm deletion of the selected Client
  const confirmDeleteClient = () => {
    handleDeleteClient(selectedClientId);
    handleOpen(); // Close the modal after deletion
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Column 1: Table */}
      <div className="Clients-table col-span-1">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Client</h1>
          <p className="text-sm text-gray-500">
            Clients are {clients.length > 0 ? "" : "not"} available here.
          </p>
        </div>
        <div>
          {clients.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              {clients.map((client) => (
                <Card className="mt-6 w-full">
                  <CardHeader className="relative grid mt-4 h-40 rounded-md place-items-center">
                    <img
                      src={client.image}
                      alt=""
                      className="w-32 h-28 object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography as="div" variant="h5">
                      {client.name}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(client)}
                      className="bg-orange-500 hover:bg-orange-700 lex items-center justify-center text-white px-4 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedClientId(client.id);
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
      <div className="Client-form col-span-1">
        {isEditing ? (
          <EditClient
            selectedClient={selectedClient}
            handleEditClient={handleEditClient}
          />
        ) : (
          <AddClient handleAddClient={handleAddClient} />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        open={open}
        handleOpen={handleOpen}
        itemId={selectedClientId}
        onDelete={confirmDeleteClient} // Confirm deletion function
        itemName="Client" // Change to "Client" for better context
      />
    </div>
  );
};

export default Clients;
