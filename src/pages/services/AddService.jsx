import { Input, Tooltip, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const AddService = ({ handleAddService, isAdding }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles); // Store the dropped files
    setImage(acceptedFiles[0]); // Store the first file as the image
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image for the service.");
      return;
    }

    const newService = {
      id: Date.now(),
      image: image instanceof File ? URL.createObjectURL(image) : image,
      title,
      details,
    };

    // Store in localStorage
    const existingServices =
      JSON.parse(localStorage.getItem("servicesData")) || [];
    localStorage.setItem(
      "servicesData",
      JSON.stringify([...existingServices, newService])
    );

    handleAddService(newService);
    setTitle("");
    setDetails("");
    setImage(null);
    setFiles([]); // Clear the uploaded files after submission
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <div>
          <h1 className="text-xl font-bold">Add Service</h1>
          <p className="text-sm text-gray-500">
            You can add service details from here.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <Typography variant="h6" color="gray" className="mb-1 font-normal">
            Service Image
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
              <div>
                {files.length > 0 && (
                  <div className="mt-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-b py-2"
                      >
                        <span>{file.name}</span>
                        <button
                          className="text-red-600"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the dropzone
                            setFiles(files.filter((_, i) => i !== index));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Images */}
          <div className="grid grid-cols-5 gap-4">
            {files.map((file, index) => (
              <div key={index} className="relative mt-4">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-16 object-cover rounded-md"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFiles(files.filter((_, i) => i !== index));
                  }}
                >
                  X
                </button>
              </div>
            ))}
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
            Details
          </Typography>
          <Input
            type="text"
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        {isAdding ? (
          <button
            type="submit"
            className="mt-5 bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Service
          </button>
        ) : (
          <Tooltip content="Delete Previous Data">
            <button
              type="submit"
              className="mt-5 bg-gray-500 text-white px-4 py-2 rounded"
              disabled
            >
              Add Service
            </button>
          </Tooltip>
        )}
      </form>
    </>
  );
};

export default AddService;
