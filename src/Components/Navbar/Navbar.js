import React from "react";
import Logo from "../../Assets/Img/logo.png";

import { Navbar } from "flowbite-react";

function Navgation() {
  return (
    <Navbar fluid={true} rounded={true} className="myNav fixed w-full">
      <Navbar.Brand href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Smart H2O
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#product">Products and Services</Navbar.Link>
        {/* <Navbar.Link href="#customer">Customer Testimonials</Navbar.Link>*/}
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navgation;
