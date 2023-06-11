import { MouseEventHandler } from "react";

export interface customButtonProps {
  
    title: string,
    className?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    buttonType?: "button" | "submit"
}