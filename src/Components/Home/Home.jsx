import React from "react";
import Navbar from "../Common/Navbar";
import HirePhotographer from "./HirePhotographer";
import HomeNavigation from "./HomeNavigation";
import PhotographerCard from "./PhotographerCard";

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeNavigation />
      <hr></hr>
      <HirePhotographer/>
    </div>
  );
}

export default Home;
