import React, { useState } from "react";
import Contact from "../../components/contact";
import Header from "../../components/header";
import MoreInfo from "../../components/moreInfo";
import PopUp from "../../components/popUp";
import PriceSection from "../../components/priceList";
import ProcessSection from "../../components/process";

function MainPage() {
  const [popUp, setPopUp] = useState(false);
  return (
    <div>
      <Header setPopUp={setPopUp} />
      <ProcessSection />
      <PriceSection setPopUp={setPopUp} />
      <MoreInfo />
      <Contact />
      {popUp && <PopUp setPopUp={setPopUp}/>}
    </div>
  );
}

export default MainPage;
