import React from "react";

import Carousel from "react-material-ui-carousel";
// import Carousel from "react-elastic-carousel";
import { Paper } from "@material-ui/core";
import "./Carosel.css";
import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Carosel = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      {" "}
      <Carousel
        navButtonsAlwaysVisible="true"
        interval="5000"
        NextIcon={<GrFormNext />}
        PrevIcon={<GrFormPrevious />}
      >
        <Paper>
          <div
            className="slider-div pic1"
            // style={{
            //   backgroundImage: ` url(${a11}) left center/400px 350px no-repeat`,
            // }}
          >
            <h2 className="slider-quote">
              BUY 1 GET 1 <br />
              ( OFFER EXPIRES SOON ) <br />
              <Link
                to="/Men"
                className="btn btn-danger "
                style={{
                  width: "18rem",
                  height: "4rem",
                  background: "#d71144",
                  fontSize: "2rem",
                  borderRadius: "36px",
                  marginTop: "3%",
                }}
              >
                BUY NOW
              </Link>
            </h2>
          </div>
        </Paper>
        <Paper>
          <div
            className="slider-div pic2"
            // style={{
            //   background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${a12})`,
            // }}
          >
            <h2 className="slider-quote">
              UPTO 80% OFF ON KIDS WEARS <br />
              <Link
                to="/Kids"
                className="btn btn-danger "
                style={{
                  width: "18rem",
                  height: "4rem",
                  background: "#d71144",
                  fontSize: "2rem",
                  borderRadius: "36px",
                  marginTop: "3%",
                }}
              >
                BUY NOW
              </Link>
            </h2>
          </div>
        </Paper>
        <Paper>
          <div
            className="slider-div pic3"
            // style={{
            //   background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${a13})`,
            // }}
          >
            <h2 className="slider-quote">
              BEST DEALS OF THE DAY <br />( UPTO 50% OFF ) <br />
              <Link
                to="/Women"
                className="btn btn-warning "
                style={{
                  width: "18rem",
                  height: "4rem",
                  marginTop: "3%",
                  fontSize: "2rem",
                  borderRadius: "36px",
                }}
              >
                EXPLORE
              </Link>
            </h2>
          </div>
        </Paper>
      </Carousel>
    </div>
  );
};

export default Carosel;
