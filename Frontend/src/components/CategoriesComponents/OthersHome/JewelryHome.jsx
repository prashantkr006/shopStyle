import React, { useEffect } from "react";
import JewelryImage from "../../images/OthersHomeImages/jewelry1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const JewelryHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="others-container" style={{ marginTop: "10%" }}>
        <img
          alt="404 Not Found"
          className="others-first-child others-image"
          src={JewelryImage}
          data-aos="zoom-out"
        />
        <div style={{ marginLeft: "10%" }}>
          <h1 className="others-text">
            Surprise Your Loved One's With Our{" "}
            <span style={{ color: "rgb(248 18 41)" }}>Jewellery</span>{" "}
            Collection.
          </h1>
          <Link
            to="/jewelry"
            className="others-expore-btn btn btn-warning btn-lg"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default JewelryHome;
