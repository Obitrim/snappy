import React from "react";
import clsx from "clsx";
import AppContainer from "src/components/layouts/AppContainer.layout";
import Link from "next/link";
import BaseButton from "src/components/buttons/Base.button";
import RouteLink from "src/components/shared/RouteLink.shared";
import DropdownMenu from "src/components/layouts/DropdownMenu";
import Image from "next/image";
import {
  COMPANY_DROPDOWN_NAV_ITEMS,
  FEATURES_DROPDOWN_NAV_ITEMS,
} from "src/data/header.data";

const AppHeader = () => {
  return (
    <header
      className={clsx(
        "h-[length:var(--header-h)] bg-black text-white",
        "fixed top-0 left-0 z-50 w-screen"
      )}
    >
      <AppContainer className=" h-full ">
        <nav className={clsx("flex h-full items-center gap-5")}>
          <Link href="/">
            <a href="#" className={clsx("text-2xl font-bold")}>
              snappy
            </a>
          </Link>
          <div
            className={clsx(
              "flex flex-1 flex-col  sm:flex-row sm:justify-between",
              "fixed right-0 top-0 h-screen w-[300px] bg-white ",
              "sm:static sm:h-auto sm:w-auto sm:bg-transparent"
            )}
          >
            <div className={"flex flex-col gap-4 sm:flex-1 sm:flex-row"}>
              <DropdownMenu
                className="ml-8"
                triggerLabel="Features"
                menuItems={FEATURES_DROPDOWN_NAV_ITEMS}
                triggerClass={clsx(
                  "text-gray-300 transition-all duration-150 hover:text-white"
                )}
              />
              {/* todo list, reminders, calendars, planning */}
              <DropdownMenu
                triggerLabel="Company"
                menuItems={COMPANY_DROPDOWN_NAV_ITEMS}
                triggerClass={clsx(
                  "text-gray-300 transition-all duration-150 hover:text-white"
                )}
              />
              <RouteLink
                href="/careers"
                className={clsx(
                  "text-gray-300 transition-all duration-150 hover:text-white"
                )}
                text="Careers"
              />
              <RouteLink
                href="/about"
                className={clsx(
                  "text-gray-300 transition-all duration-150 hover:text-white"
                )}
                text="About"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <RouteLink
                href="/login"
                className={clsx(
                  "text-gray-300 transition-all duration-150 hover:text-white",
                  "py-1 px-3"
                )}
                text="Login"
              />
              <RouteLink
                href="/register"
                className={clsx(
                  "text-gray-400 transition-all duration-150 ",
                  "bg-white hover:text-black",
                  "py-1 px-3"
                )}
                text="Register"
              />
            </div>
          </div>
        </nav>
      </AppContainer>
    </header>
  );
};

export default AppHeader;
