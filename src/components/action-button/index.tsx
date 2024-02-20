import React from "react";
import { Button } from "../ui/button";

interface ActionButtonProps {
  color?: "purple" | "white" | "red";
  label: string;
  className?: React.ComponentProps<"div">["className"];
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "fullWidth";
}

export const ActionButton = ({
  color = "purple",
  label,
  className = "",
  size = "md",
}: ActionButtonProps) => {
  const colorClass =
    color === "purple"
      ? "bg-custom-purple text-white hover:bg-custom-purple"
      : color === "red"
      ? "bg-soft-red hover:bg-soft-red"
      : "bg-white text-black hover:bg-white";

  let sizeClass = "w-30";

  switch (size) {
    case "xs":
      sizeClass = "w-20";
      break;
    case "sm":
      sizeClass = "w-24";
      break;
    case "md":
      sizeClass = "w-30";
      break;
    case "lg":
      sizeClass = "w-36";
      break;
    case "xl":
      sizeClass = "w-48";
      break;
    default:
      sizeClass = "w-30";
  }

  return (
    <Button className={`${colorClass} ${sizeClass} m-auto ${className}`}>
      {label}
    </Button>
  );
};
