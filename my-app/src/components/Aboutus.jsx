import React from "react";
import Img1 from "../assets/aboutus.png";
import "./Aboutus.css";
import { FaBeer, FaPencilAlt } from "react-icons/fa";

function Aboutus() {
  return (
    <div className="Aboutus">
      {/* <FaPencilAlt className='rotate linear infinite' width="550" height="550" /> */}
      <div className="upperSection">
        <p className="upperText1">About us</p>
        <p className="upperText2">Lorem ipsum dolor sit amet,</p>
      </div>
      <div className="lowerSection">
        <div className="leftImg">
          <img src={Img1} />
        </div>
        <div className="rightText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            repellendus aspernatur esse ex cumque! Voluptates corrupti
            repellendus vel cum, inventore quod perferendis deleniti recusandae,
            impedit hic dolorem possimus maxime ea?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            repellendus aspernatur esse ex cumque! Voluptates corrupti
            repellendus vel cum, inventore quod perferendis deleniti recusandae,
            impedit hic dolorem possimus maxime ea?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            repellendus aspernatur esse ex cumque! Voluptates corrupti
            repellendus vel cum,
          </p>
          <button type="button" className="aboutButton">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
