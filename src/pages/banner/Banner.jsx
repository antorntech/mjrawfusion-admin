import React, { useEffect, useState } from "react"; // Import the Pagination component
import { DeleteConfirmModal } from "../../components/DeleteConfirmModal";
import EditBanner from "./EditBanner";
import AddBanner from "./AddBanner";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import BannerSkeleton from "../../skeleton/BannerSkeleton";

const Banner = () => {
  const [banners, setBanners] = useState(
    JSON.parse(localStorage.getItem("bannersData")) || []
  );
  const [isAdding, setIsAdding] = useState(true);
  useEffect(() => {
    if (banners.length === 0) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [open, setOpen] = useState(false); // State for delete confirmation modal
  const [selectedBannerId, setSelectedBannerId] = useState(null); // ID of the Banner to be deleted

  const handleAddBanner = (newBanner) => {
    setBanners([...banners, newBanner]);
  };

  const handleEditBanner = (updatedBanner) => {
    const updatedBanners = banners.map((Banner) =>
      Banner.id === updatedBanner.id ? updatedBanner : Banner
    );
    setBanners(updatedBanners);
    setIsEditing(false);
  };

  const handleDeleteBanner = (id) => {
    const filteredBanners = banners.filter((Banner) => Banner.id !== id);
    setBanners(filteredBanners);
    localStorage.setItem("bannersData", JSON.stringify(filteredBanners));
  };

  const handleEditClick = (Banner) => {
    setSelectedBanner(Banner);
    setIsEditing(true);
  };

  const handleOpen = () => setOpen(!open); // Toggle modal open/close

  // Confirm deletion of the selected Banner
  const confirmDeleteBanner = () => {
    handleDeleteBanner(selectedBannerId);
    handleOpen(); // Close the modal after deletion
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Column 1: Table */}
      <div className="Banners-table">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Banner</h1>
          <p className="text-sm text-gray-500">
            Banners are {banners.length > 0 ? "" : "not"} available here.
          </p>
        </div>
        <div>
          {banners.length > 0 ? (
            <div>
              {banners.map((banner) => (
                <Card className="mt-6 w-full">
                  <CardHeader className="relative grid mt-4 h-64 place-items-center">
                    <img
                      src={banner.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography as="div" variant="h1">
                      {banner.title}
                    </Typography>
                    <Typography
                      as="div"
                      variant="paragraph"
                      className="mb-2 w-full "
                    >
                      {banner.subtitle}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(banner)}
                      className="bg-orange-500 hover:bg-orange-700 lex items-center justify-center text-white px-4 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBannerId(banner.id);
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
            <BannerSkeleton />
          )}
        </div>
      </div>

      {/* Column 2: Conditional Form */}
      <div className="Banner-form">
        {isEditing ? (
          <EditBanner
            selectedBanner={selectedBanner}
            handleEditBanner={handleEditBanner}
          />
        ) : (
          <AddBanner handleAddBanner={handleAddBanner} isAdding={isAdding} />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        open={open}
        handleOpen={handleOpen}
        itemId={selectedBannerId}
        onDelete={confirmDeleteBanner} // Confirm deletion function
        itemName="Banner" // Change to "Banner" for better context
      />
    </div>
  );
};

export default Banner;
