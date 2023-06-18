"use client";
import React from "react";
import { customButtonProps } from "@/types";
import Image from "next/image";

export const CustomButton = ({
  title,
  className,
  handleClick,
  buttonType,
  textStyles,
  rightIcon,
  isDisabled,
  containerStyles,
}: customButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`custom-btn ${className} ${containerStyles}`}
      type={buttonType || "button"}
    >
      <span className={`flex-1 mt-2 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="w-6 h-6 relative">
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};
