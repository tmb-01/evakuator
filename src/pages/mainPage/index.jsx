import React from "react";
import Contact from "../../components/contact";
import Header from "../../components/header";
import MoreInfo from "../../components/moreInfo";
import PriceSection from "../../components/priceList";
import ProcessSection from "../../components/process";

function MainPage() {
  return (
    <div>
      <Header />
      <ProcessSection />
      <PriceSection />
      <MoreInfo />
      <Contact />
    </div>
  );
}

export default MainPage;
