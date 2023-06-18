"use client";
import { CardCarProps } from "@/types";
import { calculateCarRent, generateCardImgUrl } from "@/utils";
import Image from "next/image";
import { CustomButton } from "./CustomButton";
import { useState } from "react";
import CardDetail from "./CardDetail";
interface CarProps {
  car: CardCarProps;
}

export const Card = ({ car }: CarProps) => {
  const [open, setIsOpen] = useState<boolean>(false);

  const { city_mpg, model, year, make, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title flex flex-row space-x-2">
          <div>{make}</div>
          <div>{model}</div>
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCardImgUrl(car, "angel")}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering whel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "automatic" : "manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt=" gas" />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            className="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            title="View more"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
        <CardDetail open={open} car={car} closeModal={() => setIsOpen(false)} />
      </div>
    </div>
  );
};
