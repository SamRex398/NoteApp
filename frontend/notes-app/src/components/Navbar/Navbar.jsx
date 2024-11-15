import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate;

  const onLogout = () => {
    navigate("/login");

  };

  const handleSearch = () => {

  };

  const onClearsearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes </h2>

      <SearchBar
        value={searchQuery}
        onchange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearsearch}

      />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
