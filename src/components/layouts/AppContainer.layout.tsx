import React, { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ComponentProps = ComponentPropsWithoutRef<"div">;

const AppContainer = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={clsx("mx-auto max-w-7xl px-4", className)} {...props}>
      {children}
    </div>
  );
};

export default AppContainer;
