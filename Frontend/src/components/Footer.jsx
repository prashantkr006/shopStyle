import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-category-container">
          <h5>CATEGORIES</h5>
          <div className="footer-all-categories">
            <div style={{ display: "block" }}>
              <Link className="footer-category-items" to="/Men">
                Men
              </Link>
              <br />
              <Link className="footer-category-items" to="/Women">
                Women
              </Link>
              <br />
              <Link className="footer-category-items" to="/Kids">
                Kids
              </Link>
              <br />
              <Link className="footer-category-items" to="/">
                Bags
              </Link>
              <br />
            </div>
            <div style={{ display: "block" }}>
              <Link className="footer-category-items" to="/">
                Accessoires
              </Link>
              <br />
              <Link className="footer-category-items" to="/Men">
                Beauty
              </Link>
              <br />
              <Link className="footer-category-items" to="/Men">
                Home
              </Link>
              <br />
              <Link className="footer-category-items" to="/Men">
                Jewelry
              </Link>
              <br />
            </div>
          </div>
        </div>
        <div className="footer-others-container">
          <div className="footer-policy">
            <div className="footer-policy-item">
              <img
                alt="404 Not Found."
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              />
              <h6 style={{ marginLeft: "1%", color: "#696b79" }}>
                <span style={{ fontSize: "1.25rem", color: "black" }}>
                  100% ORIGINAL
                </span>{" "}
                <br />
                guarantee for all our Products.
              </h6>
            </div>
            <div className="footer-policy-item">
              <img
                alt="404 Not Found."
                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
              />
              <h5 style={{ marginLeft: "2%", color: "#696b79" }}>
                {" "}
                <span style={{ fontSize: "1.25rem", color: "black" }}>
                  30 DAYS
                </span>{" "}
                Return Policy
              </h5>
            </div>
          </div>
          <div className="know-the-developer">
            <h5>KNOW THE DEVELOPER</h5>
            <div className="footer-social-icons-container">
              <a
                className="footer-portfolio-link"
                href="https://prashantkr006.github.io/portfolio/"
              >
                {" "}
                *prashantkr006.github.io*{" "}
              </a>
              <a
                className="footer-social-icons"
                href="https://twitter.com/Prashantkr006"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                className="footer-social-icons"
                href="https://www.facebook.com/ironmannext"
              >
                <SiFacebook />
              </a>
              <a
                className="footer-social-icons"
                href="https://www.instagram.com/prashantkr006/"
              >
                <AiFillInstagram />
              </a>
              <a
                className="footer-social-icons"
                href="https://github.com/prashantkr006"
              >
                <BsGithub />
              </a>
              <a
                className="footer-linkedin-icon"
                href="https://www.linkedin.com/in/prashantkr006/"
              >
                <GrLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
