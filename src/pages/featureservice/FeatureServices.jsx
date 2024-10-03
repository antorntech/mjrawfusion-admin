import React, { useState, useEffect } from "react";
import AddFeatureService from "./AddFeatureService";
import EditFeatureService from "./EditFeatureService";
import { DeleteConfirmModal } from "../../components/DeleteConfirmModal";

const FeatureServices = () => {
  const [featureServices, setFeatureServices] = useState(
    JSON.parse(localStorage.getItem("featureServiceData")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null); // State to track dragged item index

  useEffect(() => {
    if (featureServices.length < 3) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [featureServices]);

  const [selectedFeatureService, setSelectedFeatureService] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedFeatureServiceId, setSelectedFeatureServiceId] =
    useState(null);

  const handleAddFeatureService = (newFeatureService) => {
    setFeatureServices([...featureServices, newFeatureService]);
  };

  const handleEditFeatureService = (updatedFeatureService) => {
    const updatedFeatureServices = featureServices.map((featureService) =>
      featureService.id === updatedFeatureService.id
        ? updatedFeatureService
        : featureService
    );
    setFeatureServices(updatedFeatureServices);
    setIsEditing(false);
  };

  const handleDeleteFeatureService = (id) => {
    const filteredFeatureServices = featureServices.filter(
      (featureService) => featureService.id !== id
    );
    setFeatureServices(filteredFeatureServices);
    localStorage.setItem(
      "featureServiceData",
      JSON.stringify(filteredFeatureServices)
    );
  };

  const handleEditClick = (featureService) => {
    setSelectedFeatureService(featureService);
    setIsEditing(true);
  };

  const handleOpen = () => setOpen(!open);

  const confirmDeleteFeatureService = () => {
    handleDeleteFeatureService(selectedFeatureServiceId);
    handleOpen();
  };

  // Handle drag start
  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  // Handle drop
  const handleDrop = (index) => {
    const draggedItem = featureServices[draggedItemIndex];
    const updatedFeatureServices = [...featureServices];
    updatedFeatureServices.splice(draggedItemIndex, 1); // Remove dragged item
    updatedFeatureServices.splice(index, 0, draggedItem); // Insert dragged item at new position

    setFeatureServices(updatedFeatureServices);
    setDraggedItemIndex(null); // Reset dragged index
    localStorage.setItem(
      "featureServiceData",
      JSON.stringify(updatedFeatureServices)
    ); // Update localStorage
  };

  // Prevent default behavior of dragOver to allow drop
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Column 1: Table */}
      <div className="featureServices-table w-full md:col-span-2">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Feature Services</h1>
          <p className="text-sm text-gray-500">
            feature services are {featureServices.length > 0 ? "" : "not"}{" "}
            available here.
          </p>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  Banner
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  Details
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {featureServices.map((featureService, index) => (
                <tr
                  key={featureService.id}
                  className="hover:bg-gray-100"
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(index)}
                >
                  <td className="px-6 py-4 border-b">
                    {featureService.image ? (
                      <img
                        src={featureService.image}
                        alt={featureService.name || "FeatureService"}
                        className="h-12 w-12 object-cover"
                      />
                    ) : (
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                        className="h-12 w-12 object-cover"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 border-b">{featureService.title}</td>
                  <td className="px-6 py-4 border-b">
                    {featureService.details}
                  </td>
                  <td className="px-6 py-4 border-b">
                    <button
                      onClick={() => handleEditClick(featureService)}
                      className="text-orange-500 hover:text-orange-700 mr-3"
                    >
                      <i className="fa-solid fa-pen-to-square text-xl"></i>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedFeatureServiceId(featureService.id);
                        handleOpen();
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fa-solid fa-trash-can text-xl"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Column 2: Conditional Form */}
      <div className="featureService-form w-full md:col-span-1">
        {isEditing ? (
          <EditFeatureService
            selectedFeatureService={selectedFeatureService}
            handleEditFeatureService={handleEditFeatureService}
          />
        ) : (
          <AddFeatureService
            handleAddFeatureService={handleAddFeatureService}
            isAdding={isAdding}
          />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        open={open}
        handleOpen={handleOpen}
        itemId={selectedFeatureServiceId}
        onDelete={confirmDeleteFeatureService}
        itemName="FeatureService"
      />
    </div>
  );
};

export default FeatureServices;
