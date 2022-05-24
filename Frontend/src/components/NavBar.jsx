import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

import { BiCategory } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdPower } from "react-icons/io";
import { useCart } from "react-use-cart";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/actions/AuthActions";

import Aos from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  const [logOut, setLogOut] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("loggedOut") === true) {
      setLogOut(true);
    } else {
      setLogOut(false);
    }
  }, []);

  const { totalItems } = useCart();

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div
          className="col-10 "
          style={{ marginTop: 0, width: "100%", padding: 0 }}
        >
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ borderRadius: 0 }}
          >
            <div className="container-fluid">
              <Link
                to="/"
                className="navbar-brand"
                id="nav-brand"
                style={{ paddingTop: 0 }}
                title="Shopkeeper"
              >
                <FaShopify />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse nav-final"
                id="navbarSupportedContent"
              >
                {/* //   <form className="d-flex search">
              //     <input 
              //       name="valData"
              //       onChange={() => {}}
              //       className="form-control me-2"
              //       type="search"
              //       placeholder="Search products"
              //       aria-label="Search"
              //       style={{
              //         width: "17rem",
              //         borderRadius: "25px",
              //         background: "white",
              //       }}
              //     />
              //     <div
              //       type="submit"
              //       onClick={() => {}}
              //       style={{
              //         paddingLeft: "4px",
              //         fontSize: "23px",
              //         paddingBottom: "2%",
              //       }}
              //     >
              //       <BsSearch />
              //     </div>
              //   </form>
              */}
                <ul
                  className="navbar-nav ml-auto mb-2 mb-lg-0"
                  id="navbar-list"
                >
                  <li className="nav-item nav-category-item">
                    <Link
                      to="/men"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      MEN
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/women"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      WOMEN
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/kids"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      KIDS
                    </Link>
                    <span></span>
                  </li>
                  {/* //////////////// */}
                  {/* <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/women"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      ACCESSORIES
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/women"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      BAGS
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/women"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      BEAUTY
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/women"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      HOUSE
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/women"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      JEWELRY
                    </Link>
                    <span></span>
                  </li> */}
                  <div className="nav-icons-list">
                    <li
                      className="nav-item menuitem"
                      id="nav-brand1"
                      style={{ fontSize: "1.55rem", paddingTop: "3%" }}
                      title="Categories"
                    >
                      <Link
                        to="/categories"
                        activeclassname="menu-active"
                        className="nav-link"
                        id="navbar-icons"
                      >
                        <BiCategory />
                      </Link>
                      <span></span>
                    </li>
                    <li
                      className="nav-item menuitem"
                      id="nav-brand2"
                      style={{
                        fontSize: "1.55rem",
                        paddingTop: "3%",
                        color: "#238636",
                      }}
                      title="Cart"
                    >
                      <Link
                        to="/cart"
                        activeclassname="menu-active"
                        className="nav-link"
                        id="navbar-icons"
                        style={{
                          color: totalItems > 0 ? "#238636" : "#79797e",
                        }}
                      >
                        <HiShoppingCart />
                        {totalItems > 0 ? (
                          <sup
                            style={{
                              color: "red",
                              borderRadius: "6px",
                              fontWeight: 600,
                            }}
                          >
                            {totalItems}{" "}
                          </sup>
                        ) : (
                          ""
                        )}
                      </Link>
                      <span></span>
                    </li>
                    <li
                      className="nav-item menuitem"
                      id="nav-brand3"
                      style={{ fontSize: "1.55rem", paddingTop: "3%" }}
                      title="Profile"
                    >
                      <Link
                        to="/profile"
                        activeclassname="menu-active"
                        className="nav-link"
                        id="navbar-icons"
                      >
                        <BsFillPersonFill />
                      </Link>
                      <span></span>
                    </li>
                    {logOut && (
                      <li
                        className="nav-item menuitem"
                        id="nav-brand3"
                        style={{ fontSize: "1.55rem", paddingTop: "3%" }}
                        title="Log Out"
                      >
                        <Link
                          to="/"
                          activeclassname="menu-active"
                          className="nav-link"
                          id="navbar-icons"
                          onClick={() => {
                            dispatch(signOut());
                            setLogOut(false);
                          }}
                        >
                          <IoMdPower />
                        </Link>
                        <span></span>
                      </li>
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
