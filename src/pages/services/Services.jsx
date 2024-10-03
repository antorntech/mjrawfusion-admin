import React, { useEffect, useState } from "react"; // Import the Pagination component
import { DeleteConfirmModal } from "../../components/DeleteConfirmModal";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import EditService from "./EditService";
import AddService from "./AddService";
import ServiceSkeleton from "../../skeleton/ServiceSkeleton";

const Services = () => {
  const [services, setServices] = useState(
    JSON.parse(localStorage.getItem("servicesData")) || []
  );
  const [isAdding, setIsAdding] = useState(true);
  useEffect(() => {
    if (services.length < 7) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [open, setOpen] = useState(false); // State for delete confirmation modal
  const [selectedServiceId, setSelectedServiceId] = useState(null); // ID of the Service to be deleted

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleEditService = (updatedService) => {
    const updatedServices = services.map((Service) =>
      Service.id === updatedService.id ? updatedService : Service
    );
    setServices(updatedServices);
    setIsEditing(false);
  };

  const handleDeleteService = (id) => {
    const filteredServices = services.filter((Service) => Service.id !== id);
    setServices(filteredServices);
    localStorage.setItem("servicesData", JSON.stringify(filteredServices));
  };

  const handleEditClick = (Service) => {
    setSelectedService(Service);
    setIsEditing(true);
  };

  const handleOpen = () => setOpen(!open); // Toggle modal open/close

  // Confirm deletion of the selected Service
  const confirmDeleteService = () => {
    handleDeleteService(selectedServiceId);
    handleOpen(); // Close the modal after deletion
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Column 1: Table */}
      <div className="Services-table col-span-1">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Service</h1>
          <p className="text-sm text-gray-500">
            Services are {services.length > 0 ? "" : "not"} available here.
          </p>
        </div>
        <div>
          {services.length > 0 ? (
            <div className="w-full">
              {services.map((service) => (
                <Card className="mt-6 w-full">
                  <CardHeader className="relative grid mt-4 w-16 h-16 rounded-full place-items-center">
                    <img
                      src={service.image}
                      alt=""
                      className="w-12 h-12 object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography as="div" variant="h5">
                      {service.title}
                    </Typography>
                    <Typography
                      as="div"
                      variant="paragraph"
                      className="mb-2 w-full "
                    >
                      {service.details}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(service)}
                      className="bg-orange-500 hover:bg-orange-700 lex items-center justify-center text-white px-4 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedServiceId(service.id);
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
            <ServiceSkeleton />
          )}
        </div>
      </div>

      {/* Column 2: Conditional Form */}
      <div className="Service-form col-span-1">
        {isEditing ? (
          <EditService
            selectedService={selectedService}
            handleEditService={handleEditService}
          />
        ) : (
          <AddService handleAddService={handleAddService} isAdding={isAdding} />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        open={open}
        handleOpen={handleOpen}
        itemId={selectedServiceId}
        onDelete={confirmDeleteService} // Confirm deletion function
        itemName="Service" // Change to "Service" for better context
      />
    </div>
  );
};

export default Services;
