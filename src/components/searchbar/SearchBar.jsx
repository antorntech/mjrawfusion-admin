// components/SearchBar.js
import React from "react";
import { Input, Button } from "@material-tailwind/react";

const SearchBar = ({ searchText, handleSearch }) => {
  return (
    <div className="relative w-full max-w-[24rem]">
      <Input
        type="text"
        size="md"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#04CAFB] focus:ring-border-[#199bff]/10"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  );
};

export default SearchBar;
