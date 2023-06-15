import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string,
    className?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    buttonType?: "button" | "submit"
}

export interface CardCarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}