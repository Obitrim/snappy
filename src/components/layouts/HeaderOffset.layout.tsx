import React, { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ComponentProps = ComponentPropsWithoutRef<"div">;

const HeaderOffset = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={clsx("pt-[length:var(--header-h)]", className)} {...props}>
      {children}
    </div>
  );
};

export default HeaderOffset;
