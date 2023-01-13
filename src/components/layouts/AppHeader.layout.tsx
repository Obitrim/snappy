import React from "react";
import clsx from "clsx";
import AppContainer from "src/components/layouts/AppContainer.layout";
import Link from "next/link";

const AppHeader = () => {
  return (
    <header
      className={clsx(
        "h-[length:var(--header-h)] bg-black text-white",
        "fixed top-0 left-0 w-screen"
        // "flex w-full"
      )}
    >
      <AppContainer className="flex h-full items-center justify-between">
        <nav className={clsx("flex items-center gap-10")}>
          <Link href="/">
            <a href="#" className={clsx("text-2xl font-bold")}>
              snappy
            </a>
          </Link>
          <a href="#" className="ml-5">
            Features
          </a>
          <a href="#">Companies</a>
          <a href="#">Careers</a>
          <a href="#">About</a>
        </nav>
        <div className={clsx("flex items-center gap-10")}>
          <button>Login</button>
          <button>Register</button>
        </div>
      </AppContainer>
    </header>
  );
};

export default AppHeader;
