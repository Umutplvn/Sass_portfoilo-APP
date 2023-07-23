import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Footer from "../../components/Footer/Footer";
import "./Contact.scss"
const Contac = () => {
  return (
    <div>

      <div className="contact">
      <h1>Contact Me...</h1>

      <div className="contactDetail">
        <h3>
          <AiOutlineMail />
          &nbsp;&nbsp;Email
        </h3>
        <h3>wednesday@nevermoreacademy.edu</h3>
      </div>

      <div className="contactDetail">
        <h3>
          <AiOutlinePhone /> &nbsp;Phone
        </h3>
        <h3>+40 (571) 360-1234</h3>
      </div>
      <div className="contactDetail">
        <h3>
          <GoLocation />&nbsp;
          Address
        </h3>
        <h3>Strada Zamorei 1, Bușteni 105500, Romania</h3>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contac;
