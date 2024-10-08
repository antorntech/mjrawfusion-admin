import {
  Input,
  Textarea,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import { useDropzone } from "react-dropzone";

const AddProduct = () => {
  const navigate = useNavigate();
  const date = moment().format("Do MMM, YYYY");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    setImage(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    const existingData = JSON.parse(localStorage.getItem("productsData")) || [];
    const products = [...existingData];
    const newEntry = {
      id: Date.now(),
      name,
      description,
      color,
      brand,
      category,
      price,
      quantity,
      date,
      author: "Admin",
      image: image instanceof File ? URL.createObjectURL(image) : image,
    };

    console.log(newEntry);
    localStorage.setItem(
      "productsData",
      JSON.stringify([...products, newEntry])
    );

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    toast.success("Upload successful", {
      position: "top-right",
      hideProgressBar: false,
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    navigate("/products");

    // Reset the form
    setName("");
    setDescription("");
    setColor("");
    setBrand("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setFiles([]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-1 text-black border-2 border-black px-2 py-2 rounded-md text-sm hover:bg-black hover:text-white transition-all duration-500"
        >
          <i className="fa-solid fa-hand-point-left"></i>
        </button>
        <div>
          <h1 className="text-xl font-bold">Add Product</h1>
          <p className="text-sm text-gray-500">
            You can add product details from here.
          </p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div>
          <Typography variant="h6" color="gray" className="mb-1 font-normal">
            Name
          </Typography>
          <Input
            type="text"
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Typography
            variant="h6"
            color="gray"
            className="mb-1 font-normal mt-4"
          >
            Brand
          </Typography>
          <Input
            type="text"
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />

          <Typography
            variant="h6"
            color="gray"
            className="mb-1 font-normal mt-4"
          >
            Price
          </Typography>
          <Input
            type="number"
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Typography
            variant="h6"
            color="gray"
            className="mb-1 font-normal mt-4"
          >
            Quantity
          </Typography>
          <Input
            type="number"
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* Middle Column */}
        <div>
          <Typography variant="h6" color="gray" className="mb-1 font-normal">
            Category
          </Typography>
          <Select
            value={category}
            onChange={(value) => setCategory(value)}
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          >
            <Option value="" disabled>
              Select category
            </Option>
            <Option value="Electronics">Electronics</Option>
            <Option value="Fashion">Fashion</Option>
            <Option value="Home & Garden">Home & Garden</Option>
            <Option value="Sports">Sports</Option>
            <Option value="Toys">Toys</Option>
            <Option value="Books">Books</Option>
          </Select>

          <Typography
            variant="h6"
            color="gray"
            className="mt-4 mb-1 font-normal"
          >
            Color
          </Typography>
          <Select
            value={color}
            onChange={(value) => setColor(value)}
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          >
            <Option value="" disabled>
              Select color
            </Option>
            <Option value="Red">Red</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Green">Green</Option>
            <Option value="Black">Black</Option>
            <Option value="White">White</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Orange">Orange</Option>
            <Option value="Purple">Purple</Option>
          </Select>

          <Typography
            variant="h6"
            color="gray"
            className="mb-1 font-normal mt-4"
          >
            Description
          </Typography>
          <Textarea
            value={description}
            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:!border-t-border-[#04CAFB] focus:ring-border-[#199bff]/10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
          />
        </div>

        {/* Right Column */}
        <div>
          <Typography variant="h6" color="gray" className="mb-1 font-normal">
            Product Image
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
          <div className="grid grid-cols-5 gap-4 mt-4">
            {files.map((file, index) => (
              <div key={index} className="relative">
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
      </div>

      <button
        onClick={handleUpload}
        className="mt-5 bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
