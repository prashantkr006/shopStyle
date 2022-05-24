import React from "react";
import BagImage from "../../images/OthersHomeImages/bag3.jpg";
import HomeImage from "../../images/OthersHomeImages/house1.jpg";
import { Link } from "react-router-dom";

const BagsHome = () => {
  return (
    <>
      <div className="bags-house-container">
        <div className="others-bags">
          <div
            className="others-bag-img"
            style={{
              background: `url(${BagImage}) left center/345px 600px no-repeat`,

              boxShadow: "0px 18px 53px 0px rgb(185 181 181 /95%)",
              borderRadius: "116px 0",
            }}
          >
            <Link to="/bag" className="others-bag-button btn btn-danger">
              BAG COLLECTIONS
            </Link>
          </div>
        </div>
        <div className="others-house">
          <div
            className="others-house-image"
            style={{
              background: `url(${HomeImage}) left center/355px 600px no-repeat`,

              boxShadow: "0px 18px 53px 0px rgb(185 181 181 /95%)",
              borderRadius: "116px 0",
            }}
          >
            <Link to="/house" className="others-house-button btn btn-danger">
              HOME ESSENTIALS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagsHome;
