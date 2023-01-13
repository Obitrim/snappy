import React from "react";
import clsx from "clsx";
import AppContainer from "src/components/layouts/AppContainer.layout";
import BaseButton from "src/components/buttons/Base.button";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <section>
      <AppContainer
        className={clsx(
          "flex items-center gap-8 ",
          "min-h-[length:calc(100vh-var(--header-h))]"
        )}
      >
        {/* left side */}
        <div className={clsx("flex-1")}>
          <h1 className={clsx("text-4xl font-bold")}>
            Create <br /> fancy snaps
          </h1>
          <p className="my-5 text-2xl">
            Take fancy pictures of beautiful places. <br /> Share it with the
            world
          </p>
          <BaseButton text="Learn more" />
        </div>
        {/* right side */}
        <div className="flex-1">
          <Image
            // className="w-full"
            src="/images/image-hero-desktop.png"
            height={1280}
            width={960}
            alt="banner"
          />
        </div>
      </AppContainer>
    </section>
  );
};

export default HomeBanner;
