import React, { useEffect } from "react";
import "./CategoryCards.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const BrandsCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        className="col-md-3 col-sm-6 col-6 "
        data-aos="zoom-in-down"
        style={{ marginBottom: "10%" }}
        title={props.name}
      >
        <Link to={props.to} style={{ textDecoration: "none" }}>
          <div className="category-card-dimension1">
            <h4
              className="card-title11 font-weight-bold"
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
            >
              {props.title}
            </h4>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BrandsCard;
