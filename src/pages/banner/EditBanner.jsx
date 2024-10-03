import { Input, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const EditBanner = ({ selectedBanner, handleEditBanner }) => {
  const [title, setTitle] = useState(selectedBanner.title);
  const [subtitle, setSubTitle] = useState(selectedBanner.subtitle);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Preload the selected category's image in the files array
    if (selectedBanner.image) {
      setImage(selectedBanner.image); // Preload the image URL
    }
  }, [selectedBanner]);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    setImage(acceptedFiles[0]); // Set the uploaded file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBanner = {
      ...selectedBanner,
      image: image instanceof File ? URL.createObjectURL(image) : image,
      title,
      subtitle,
    };

    // Update localStorage
    const existingBanners =
      JSON.parse(localStorage.getItem("bannersData")) || [];
    const updatedBanners = existingBanners.map((category) =>
      category.id === updatedBanner.id ? updatedBanner : category
    );
    localStorage.setItem("bannersData", JSON.stringify(updatedBanners));

    handleEditBanner(updatedBanner);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <div>
          <h1 className="text-xl font-bold">Edit Banner</h1>
          <p className="text-sm text-gray-500">
            You can edit Banner details from here.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <Typography variant="h6" color="gray" className="mb-1 font-normal">
            Banner Image
          </Typography>

          {/* Dropzone for Images */}
          <div
            {...getRootProps({
              className:
                "dropzone border-2 border-dashed border-[#04CAFB] rounded-md p-4 text-center cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/smwmetfi.json"
                trigger="loop"
                colors="primary:#545454"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <p className="text-2xl text-gray-600">
                Drop files here or click to upload.
              </p>
            </div>
          </div>

          {/* Preview Image */}
          <div className="grid grid-cols-5 gap-4">
            {image && (
              <div className="relative mt-4">
                <img
                  src={
                    image instanceof File ? URL.createObjectURL(image) : image
                  }
                  alt="Preview"
                  className="w-full h-16 object-cover rounded-md"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded p-1"
                  onClick={() => setImage(null)} // Remove the image
                >
                  X
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <Typography
            variant="h6"
            color="gray"
            className="mb-1 font-normal mt-2"
          >
            Title
          </Typography>
          <Input
            type="text"
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Typography
            variant="h6"
            color="gray"
            className="mb-1 font-normal mt-2"
          >
            Subtitle
          </Typography>
          <Input
            type="text"
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={subtitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-5 bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </>
  );
};

export default EditBanner;
