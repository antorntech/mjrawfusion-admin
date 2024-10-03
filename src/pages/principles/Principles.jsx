import React, { useEffect, useState } from "react"; // Import the Pagination component
import { DeleteConfirmModal } from "../../components/DeleteConfirmModal";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import EditPrinciple from "./EditPrinciple";
import AddPrinciple from "./AddPrinciple";
import ClientSkeleton from "../../skeleton/ClientSkeleton";

const Principles = () => {
  const [principles, setPrinciples] = useState(
    JSON.parse(localStorage.getItem("principlesData")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  const [open, setOpen] = useState(false); // State for delete confirmation modal
  const [selectedPrincipleId, setSelectedPrincipleId] = useState(null); // ID of the Principle to be deleted

  const handleAddPrinciple = (newPrinciple) => {
    setPrinciples([...principles, newPrinciple]);
  };

  const handleEditPrinciple = (updatedPrinciple) => {
    const updatedPrinciples = principles.map((Principle) =>
      Principle.id === updatedPrinciple.id ? updatedPrinciple : Principle
    );
    setPrinciples(updatedPrinciples);
    setIsEditing(false);
  };

  const handleDeletePrinciple = (id) => {
    const filteredPrinciples = principles.filter(
      (Principle) => Principle.id !== id
    );
    setPrinciples(filteredPrinciples);
    localStorage.setItem("principlesData", JSON.stringify(filteredPrinciples));
  };

  const handleEditClick = (Principle) => {
    setSelectedPrinciple(Principle);
    setIsEditing(true);
  };

  const handleOpen = () => setOpen(!open); // Toggle modal open/close

  // Confirm deletion of the selected Principle
  const confirmDeletePrinciple = () => {
    handleDeletePrinciple(selectedPrincipleId);
    handleOpen(); // Close the modal after deletion
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Column 1: Table */}
      <div className="Principles-table col-span-1">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Principle</h1>
          <p className="text-sm text-gray-500">
            Principles are {principles.length > 0 ? "" : "not"} available here.
          </p>
        </div>
        <div>
          {principles.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              {principles.map((principle) => (
                <Card className="mt-6 w-full">
                  <CardHeader className="relative grid mt-4 h-40 rounded-md place-items-center">
                    <img
                      src={principle.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography as="div" variant="h5">
                      {principle.name}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(principle)}
                      className="bg-orange-500 hover:bg-orange-700 lex items-center justify-center text-white px-4 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPrincipleId(principle.id);
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
      <div className="Principle-form col-span-1">
        {isEditing ? (
          <EditPrinciple
            selectedPrinciple={selectedPrinciple}
            handleEditPrinciple={handleEditPrinciple}
          />
        ) : (
          <AddPrinciple handleAddPrinciple={handleAddPrinciple} />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        open={open}
        handleOpen={handleOpen}
        itemId={selectedPrincipleId}
        onDelete={confirmDeletePrinciple} // Confirm deletion function
        itemName="Principle" // Change to "Principle" for better context
      />
    </div>
  );
};

export default Principles;
