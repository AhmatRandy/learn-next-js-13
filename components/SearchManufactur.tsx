"use client";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
interface manufacturProps {
  manufactur: string;
  setManufactur: (manufactur: string) => void;
}

export default function SearchManufactur({
  manufactur,
  setManufactur,
}: manufacturProps) {
  return (
    <div className="search-manufactur">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car-logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Search"
          />
        </div>
      </Combobox>
    </div>
  );
}
