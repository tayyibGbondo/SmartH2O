import React from "react";
import Member1 from "../../Assets/Img/tayyib.jpeg";
import Member2 from "../../Assets/Img/alpha pic.jpeg";
import Member3 from "../../Assets/Img/bol.jpg";
import Member4 from "../../Assets/Img/lucy.png";

import { SiLinkedin, SiFacebook, SiTwitter } from "react-icons/si";

function OurTeam() {
  return (
    <div className="bg-gray-200">
      <h1 className="text-4xl font-extrabold text-center py-8">Our Team</h1>
      <div className="bg-gray-200 md:flex md:items-center md:justify-center">
        <div className="text-center p-3">
          <img
            src={Member1}
            alt="Tayyib Gbondo"
            className="w-[100px] rounded-full m-auto"
          />
          <h1 className="font-bold">Tayyib Gbondo</h1>
          <p>Fullstack Software Engineer</p>

          <div className="flex gap-5 justify-center py-5">
            <a href="https://www.linkedin.com/in/tayyib-gbondo-a623721b4/">
              {" "}
              <SiLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/tayyib.gbondo/">
              {" "}
              <SiFacebook size={30} />
            </a>
            <a href="https://twitter.com/MOHAMEDALPHA13">
              {" "}
              <SiTwitter size={30} />
            </a>
          </div>
        </div>

        {/*Mohamed Alpha */}

        <div className="text-center p-3">
          <img
            src={Member2}
            alt="Tayyib Gbondo"
            className="w-[100px] rounded-full m-auto"
          />
          <h1 className="font-bold">Mohamed Alpha</h1>
          <p>Electronics | Telecommunications Engineer</p>

          <div className="flex gap-5 justify-center py-5">
            <a href="https://www.linkedin.com/in/mohamed-alpha-282652104/">
              {" "}
              <SiLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/mohamed.alpha3">
              {" "}
              <SiFacebook size={30} />
            </a>
            <a href="https://twitter.com/TahibGbondo">
              {" "}
              <SiTwitter size={30} />
            </a>
          </div>
        </div>
        {/*Bolkanda Mansaray */}

        <div className="text-center p-3">
          <img
            src={Member3}
            alt="Tayyib Gbondo"
            className="w-[100px] rounded-full m-auto"
          />
          <h1 className="font-bold">Umar Bolokada Mansaray </h1>
          <p>Activists | Frontend software Engineer</p>

          <div className="flex gap-5 justify-center py-5">
            <a href="https://www.linkedin.com/in/umar-bolokada-mansaray-86755a21b">
              {" "}
              <SiLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100079727716046">
              {" "}
              <SiFacebook size={30} />
            </a>
            <a href="https://twitter.com/UmarBolokada">
              {" "}
              <SiTwitter size={30} />
            </a>
          </div>
        </div>
        {/*Lucy */}

        <div className="text-center p-3">
          <img
            src={Member4}
            alt="Tayyib Gbondo"
            className="w-[100px] rounded-full m-auto"
          />
          <h1 className="font-bold">Lucinda Brewah </h1>
          <p>Business Analyst</p>

          <div className="flex gap-5 justify-center py-5">
            <a href="">
              {" "}
              <SiLinkedin size={30} />
            </a>
            <a href="">
              {" "}
              <SiFacebook size={30} />
            </a>
            <a href="">
              {" "}
              <SiTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
