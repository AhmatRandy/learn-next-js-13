"use client";
import { ReactComponentElement, ReactEventHandler, useState } from "react";
import SearchManufactur from "./SearchManufactur";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface searchBarProps {
  setManufacturer: (e: string) => void;
  setModel: (e: string) => void;
}

export default function SearchBar({
  setManufacturer,

  setModel,
}: searchBarProps) {
  const router = useRouter();

  const [searchManufacturer, setSearchManufacturer] = useState<string>("");
  const [searchModel, setSearchModel] = useState<string>("");

  const submitSearch = (e: React.FormEvent<HTMLElement>) => {
    e?.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      alert("please select ur type");
    } else {
      setManufacturer(searchManufacturer);
      setModel(searchModel);
    }
  };

  return (
    <form className="searchbar" onSubmit={submitSearch}>
      <div className="searchbar__item">
        <SearchManufactur
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
      </div>

      <button type="submit" className="-ml-3 z-10 sm:hidden">
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="bar"
          width={25}
          height={25}
          className="absolute w-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="tiguan"
          className="searchbar__input"
        />
        <button type="submit" className="-ml-3 z-10 sm:hidden">
          <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>
      </div>
      <button type="submit" className="-ml-3 z-10 max-sm:hidden">
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </form>
  );
}
