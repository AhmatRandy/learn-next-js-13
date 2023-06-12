"use client";
import { useState } from "react";
import SearchManufactur from "./SearchManufactur";

export default function SearchBar() {
  const [manufactur, setManufactur] = useState<string>("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufactur
          manufactur={manufactur}
          setManufactur={setManufactur}
        />
      </div>
    </form>
  );
}
