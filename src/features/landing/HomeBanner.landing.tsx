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
          "items-center gap-8 md:flex ",
          "min-h-[length:calc(100vh-var(--header-h))]"
        )}
      >
        {/* left side */}
        <div className={clsx("flex-1 py-20 md:py-0")}>
          <h1 className={clsx("text-5xl font-bold")}>
            Create <br /> fancy snaps
          </h1>
          <p className="my-8 text-base">
            Take fancy pictures of beautiful places. <br /> Share it with the
            world
          </p>
          <BaseButton
            text="Learn more"
            className="text-xl font-medium"
            size="large"
          />

          <div className={clsx("mt-20", "flex flex-wrap items-center gap-8")}>
            <Image
              alt="sponsors"
              width={114}
              height={20}
              src="/images/client-databiz.svg"
            />
            <Image
              alt="sponsors"
              width={73}
              height={33}
              src="/images/client-audiophile.svg"
            />
            <Image
              alt="sponsors"
              width={90}
              height={20}
              src="/images/client-meet.svg"
            />
            <Image
              alt="sponsors"
              width={83}
              height={24}
              src="/images/client-maker.svg"
            />
          </div>
        </div>
        {/* right side */}
        <div className="hidden flex-1 md:block">
          <Image
            src="/images/image-hero-desktop.png"
            height={1280}
            width={960}
            alt="banner"
          />
        </div>
        <div className="md:hidden">
          <Image
            src="/images/image-hero-mobile.png"
            height={564}
            width={750}
            alt="banner"
          />
        </div>
      </AppContainer>
    </section>
  );
};

export default HomeBanner;
