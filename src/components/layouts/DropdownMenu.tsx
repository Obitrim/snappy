import React, { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import ChevronUpIcon from "src/components/svg/icons/chevron-up.icon";
import RouteLink from "src/components/shared/RouteLink.shared";

interface ComponentProps extends ComponentPropsWithoutRef<"div"> {
  triggerClass?: string;
  triggerLabel: string;
  menuItems?: { url: string; label: string; icon?: React.ReactNode }[];
}

const DropdownMenu = ({
  triggerClass,
  triggerLabel,
  className,
  menuItems = [],
  ...props
}: ComponentProps) => {
  return (
    <div className={clsx("group relative", className)} {...props}>
      {/* trigger */}
      <button className={clsx("flex items-center", triggerClass)}>
        <a href="#">{triggerLabel}</a>
        <ChevronUpIcon
          className={
            "h-5 w-5 rotate-180 transition-all duration-150 group-hover:rotate-0"
          }
        />
      </button>
      {/* options */}
      <div
        className={clsx(
          "pointer-events-none absolute top-[length:calc(100%+1rem)] left-1/2 opacity-0",
          "bg-white text-black",
          "rounded shadow-md",
          "-translate-x-1/2",
          " transition-all duration-200 ease-in-out",
          "group-hover:top-[length:calc(100%)] group-hover:opacity-100",
          "min-w-[170px] py-2 group-hover:pointer-events-auto"
        )}>
        {menuItems.map((val, idx) => (
          <RouteLink
            href={val.url}
            icon={val.icon}
            text={val.label}
            className={clsx("block px-4 py-1.5 text-gray-600 hover:text-black")}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
