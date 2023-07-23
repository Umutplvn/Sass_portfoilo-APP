import React from "react";
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <AiOutlineTwitter />
        <BsFacebook />
        <AiFillInstagram />
        <BsGithub />
      </div>
      <div className="footer-text">

        <h3>© Copyright 2023</h3>
      </div>
    </div>
  );
};

export default Footer;
