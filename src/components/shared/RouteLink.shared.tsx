import clsx from "clsx";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type ComponentProps = {
  text: string;
  href: string;
  icon?: React.ReactNode;
} & ComponentPropsWithoutRef<"a">;

const RouteLink = ({
  className,
  href,
  text,
  icon = null,
  ...props
}: ComponentProps) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          "text-gray-300 transition-all duration-150 hover:text-white",
          icon && "flex items-center gap-1",
          className
        )}
        {...props}
      >
        {icon && <div className={clsx("min-w-[25px]")}>{icon}</div>}
        {text}
      </a>
    </Link>
  );
};

export default RouteLink;
