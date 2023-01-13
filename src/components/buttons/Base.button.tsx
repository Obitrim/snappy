import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import clsx from "clsx";

type ComponentProps = {
  text?: string;
  variant?: "outline" | "primary" | "ghost";
} & ComponentPropsWithRef<"button">;

const BaseButton = ({
  text,
  variant = "primary",
  className,
  children,
}: ComponentProps) => {
  return (
    <button
      className={clsx(
        [" text-xl font-semibold", "px-4 py-3"],
        [
          variant === "primary" && ["border border-black bg-black text-white"],
          variant === "ghost" && [],
          variant === "outline" && [],
        ],
        className
      )}
    >
      {text || children}
    </button>
  );
};

export default BaseButton;
