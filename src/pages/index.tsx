import type { NextPage } from "next";
import AppHeader from "src/components/layouts/AppHeader.layout";
import HeaderOffset from "src/components/layouts/HeaderOffset.layout";
import HomeBanner from "src/features/landing/HomeBanner.landing";

const HomePage: NextPage = () => {
  return (
    <main>
      <AppHeader />
      <HeaderOffset>
        <HomeBanner />
      </HeaderOffset>
    </main>
  );
};

export default HomePage;
