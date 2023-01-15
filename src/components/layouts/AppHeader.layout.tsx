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
      <AppContainer className="flex h-full items-center justify-between">
        <nav className={clsx("flex items-center gap-5")}>
          <Link href="/">
            <a href="#" className={clsx("text-2xl font-bold")}>
              snappy
            </a>
          </Link>
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
        </nav>
        <div className={clsx("flex items-center gap-2")}>
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
      </AppContainer>
    </header>
  );
};

export default AppHeader;
