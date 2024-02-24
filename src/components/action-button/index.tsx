import React from "react";
import { Button } from "../ui/button";

interface ActionButtonProps {
  color?: "purple" | "white" | "red";
  label: string;
  className?: React.ComponentProps<"div">["className"];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  onClick?: () => {};
}

export const ActionButton = ({
  color = "purple",
  label,
  className = "",
  size = "md",
  onClick,
  disabled = false,
}: ActionButtonProps) => {
  const colorClass =
    color === "red"
      ? "bg-soft-red hover:bg-soft-red text-white"
      : color === "white"
      ? "bg-white text-very-dark-blue hover:bg-white"
      : "bg-custom-purple text-white hover:bg-custom-purple";

  const sizeClass = `w-${
    size === "xl"
      ? 48
      : size === "lg"
      ? 36
      : size === "sm"
      ? 24
      : size === "xs"
      ? 20
      : 30
  }`;

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={`${colorClass} ${sizeClass} m-auto ${className} shadow-lg`}
    >
      {label}
    </Button>
  );
};
