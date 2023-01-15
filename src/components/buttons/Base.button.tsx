import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import clsx from "clsx";

type ComponentProps = {
  text?: string;
  size?: "large" | "small";
  variant?: "outline" | "primary" | "ghost";
} & ComponentPropsWithRef<"button">;

const BaseButton = ({
  text,
  variant = "primary",
  size = "small",
  className,
  children,
}: ComponentProps) => {
  return (
    <button
      className={clsx(
        "relative overflow-hidden",
        "mix-blend-difference",
        [
          size === "small" ? "px-3 py-1.5" : "px-4 py-3",
          variant === "primary" && [
            "border border-black bg-black text-white",
            "border border-black",

            "z-10 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:transition-all before:duration-200",
            "before:bg-white hover:text-black  hover:before:w-full",
          ],
          variant === "ghost" && [],
          variant === "outline" && [],
        ],
        className
      )}
    >
      <span className="relative z-20">{text || children}</span>
    </button>
  );
};

export default BaseButton;
