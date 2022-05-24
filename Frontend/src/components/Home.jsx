import React, { useEffect } from "react";
import SwipeCards from "./SwipeCards";
// import ParticleEffectButton from "react-particle-effect-button";
// import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { GoLinkExternal } from "react-icons/go";

import Aos from "aos";
import "aos/dist/aos.css";
import Carosel from "./Carosel";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import AccessoryHome from "./CategoriesComponents/OthersHome/AccessoryHome";
import JewelryHome from "./CategoriesComponents/OthersHome/JewelryHome";
import BeautyHome from "./CategoriesComponents/OthersHome/BeautyHome";
import BagsHome from "./CategoriesComponents/OthersHome/BagsHome";
import Footer from "./Footer";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ display: "block" }} className="super-root-home">
      <div className="root-home">
        {/* <SideBar /> */}
        <div className="home">
          <div style={{ display: "block" }}>
            <h1>
              BOOST YOUR{" "}
              <span
                style={{
                  color: "red",
                  fontWeight: "600",
                  textShadow:
                    "#fae4bc 0px 5px, orange -2px 6px, orange -1px 1px",
                }}
              >
                STYLE
              </span>{" "}
              SENCE
            </h1>
            <h3>Right here Right now!</h3>

            <Link
              id="btn-explore"
              className="btn btn-lg"
              to="/categories"
              style={
                {
                  // fontSize: "2rem",
                  // color: "black",
                  // borderRadius: "17px",
                  // boxShadow: "0px 5px orange, -2px 6px orange, -1px 1px orange",
                  // border: "1px solid orange",
                  // backgroundColor: "#ffeac5",
                  // transition: "0.5s",
                  // "&:hover": {
                  //   backgroundColor: "black",
                  // },
                }
              }
            >
              EXPLORE <GoLinkExternal />
            </Link>
          </div>

          <SwipeCards />
        </div>
      </div>
      <div className="home-carosel">
        <Carosel />
      </div>
      <Categories />
      <AccessoryHome />
      <JewelryHome />
      <BeautyHome />
      <BagsHome />
      <Footer />
    </div>
  );
};

export default Home;

/* <div
          style={{ marginLeft: "34%", marginTop: "3%" }}
          onClick={() => {
            if (buttonEffect === true) {
              setButtonEffect(false);
            } else if (buttonEffect === false) setButtonEffect(true);
          }}
        >
          <ParticleEffectButton
            color="rgb(247, 8, 235)"
            duration={2000}
            style="stroke"
            direction="left"
            hidden={buttonEffect}
            onBegin={() => {
              if (buttonEffect === true) {
                setButtonEffect(false);
              } else if (buttonEffect === false) setButtonEffect(true);
            }}
            onComplete={() => {
              if (buttonEffect === true) {
                setButtonEffect(false);
                // } else if (buttonEffect === false) setButtonEffect(true);
              }
            }}
          >
            EXPLORE
          </ParticleEffectButton>
        </div> */
