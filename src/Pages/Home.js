import React from "react";
import About from "../Components/About/About";
import FooterPage from "../Components/Footer/Footer";
import Heading from "../Components/Header/Heading";
import Navgation from "../Components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navgation />
      <Heading />
      <About />
      <FooterPage />
    </div>
  );
}

export default Home;
