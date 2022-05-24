import React, { useEffect } from "react";
import AccessoryImage from "../../images/OthersHomeImages/accessory1.png";
import "./OthersHome.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AccessoryHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="others-container">
        <div className="others-first-child">
          <h1 className="others-accesory-text">
            Your <span style={{ color: "rgb(248 18 41)" }}> Accessories</span>{" "}
            <br /> Search Ends Here.
          </h1>
          <Link
            to="/accessories"
            className="others-expore-btn btn btn-warning btn-lg"
          >
            EXPLORE
          </Link>
        </div>
        <img
          alt="404 Not Found"
          className="others-image"
          src={AccessoryImage}
          data-aos="zoom-out"
        />
      </div>
    </>
  );
};

export default AccessoryHome;
