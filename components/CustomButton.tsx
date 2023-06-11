"use client";
import React from "react";
import { customButtonProps } from "@/types";

export const CustomButton = ({
  title,
  className,
  handleClick,
  buttonType,
}: customButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={className}
      type={buttonType || "button"}
    >
      <span>{title}</span>
    </button>
  );
};
