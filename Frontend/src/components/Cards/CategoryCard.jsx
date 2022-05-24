import React, { useEffect } from "react";
import "./CategoryCards.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="col-md-3 col-sm-6 col-6 " data-aos="zoom-in">
        <Link to={props.to} style={{ textDecoration: "none" }}>
          <div className="category-card-dimension">
            <div
              className="category-body"
              style={{
                width: "100%",
                height: "100%",
                background: `url(${props.imgsrc}) center/13rem 12rem no-repeat`,
                borderRadius: "12px",
                // paddingTop: "76.68%",
              }}
            >
              <h4
                className="card-title1 font-weight-bold"
                style={{
                  textAlign: "center",
                  color: "white",
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: "0 0 12px 12px ",
                }}
              >
                {props.title}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
