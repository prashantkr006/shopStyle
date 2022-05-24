import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { otpForOrderConfirm } from "../redux/actions/AuthActions";
import "./style2.css";

import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsBagXFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { HiMinusCircle } from "react-icons/hi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Cart = () => {
  const [isLoading, setLoading] = useState(true);

  const [userEmail, setUserEmail] = useState(null);

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (localStorage.getItem("token")) {
      var token = localStorage.getItem("token");
      var decoded = jwt_decode(token);

      setUserEmail(decoded.email);
    }
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isEmpty ? (
        <div className="empty-cart-container">
          <BsBagXFill />
          <br />
          <h2 style={{ color: "black" }}>YOUR CART IS EMPTY</h2>
          <Link
            className="btn btn-warning"
            style={{
              width: "16rem",
              fontSize: "1.5rem",
              borderRadius: "15px",
            }}
            to="/"
          >
            SHOP NOW
          </Link>
        </div>
      ) : (
        <div>
          <div className="table-responsive shopping-cart">
            <table className="table">
              <thead>
                <tr>
                  <th>PRODUCTS</th>
                  <th className="text-center">QUANTITY</th>
                  <th className="text-center">PRICE</th>

                  <th className="text-center">
                    <button
                      className="btn btn-sm btn-danger remove-all"
                      onClick={emptyCart}
                    >
                      RESET CART
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody style={{ alignItems: "center" }}>
                {items.map((item) => (
                  /* <li key={item.id}>
                <img src={item.image_url} />
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li> */
                  <tr key={item.id}>
                    <td className="image-td">
                      <div className="product-item">
                        {/* <a class="product-thumb" href="#"> */}
                        <img
                          src={item.image_url}
                          style={{ height: "14rem" }}
                          alt="Product"
                        />
                        {/* </a> */}
                        <div
                          className="product-info"
                          style={{ paddingTop: "19.1%", paddingLeft: "2%" }}
                        >
                          <span>
                            <em>{item.subcategory}</em>{" "}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center" style={{ paddingTop: "2.5%" }}>
                      {/* <button
                        class="btn btn-success"
                        style={{ fontSize: "1rem", borderRadius: "50%" }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      > */}
                      <IoMdAddCircle
                        // class="btn btn-success"
                        style={{
                          fontSize: "3rem",
                          borderRadius: "50%",
                          color: "green",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      />

                      <br />
                      <br />

                      {item.quantity}
                      <br />
                      <br />
                      <HiMinusCircle
                        // class="btn btn-warning"
                        style={{
                          fontSize: "3rem",
                          borderRadius: "50%",
                          color: "#dc3545",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      />
                    </td>
                    <td
                      className="text-center text-lg text-medium"
                      style={{ paddingTop: "8%" }}
                    >
                      $ {Math.round(item.price * item.quantity * 100) / 100}
                    </td>
                    <td className="text-center" style={{ paddingTop: "6.7%" }}>
                      {/* <a> */}
                      <RiDeleteBin2Fill
                        onClick={() => removeItem(item.id)}
                        style={{
                          fontSize: "2rem",
                          color: "red",
                          cursor: "pointer",
                        }}
                        data-original-title="Remove item"
                        title="Remove Item"
                      />
                      {/* </a> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              position: "fixed",
              width: "100%",
              bottom: "0",
              background: "white",
            }}
          >
            <div className="shopping-cart-footer">
              <div className="column text-lg total-amount">
                TOTAL AMOUNT :{" "}
                <span
                  className="text-medium"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  $ {Math.round(cartTotal * 100) / 100}
                </span>
              </div>
            </div>
            <div className="shopping-cart-footer">
              <div className="column">
                <Link className="btn btn-secondary" to="/">
                  <TiArrowBack style={{ fontSize: "1.5rem" }} /> BACK TO HOME
                </Link>
              </div>
              <div className="column buy-now-btn">
                <Link
                  className="btn btn-success"
                  to={
                    localStorage.getItem("token") !== null
                      ? "/confirmorder"
                      : "/profile"
                  }
                  onClick={() => {
                    if (!localStorage.getItem("token")) {
                      toast.error(
                        `Please Login/SignUp to Continue with Your Order!`,
                        {
                          theme: "colored",
                          position: toast.POSITION.TOP_RIGHT,
                        }
                      );
                    } else {
                      emptyCart();
                      dispatch(otpForOrderConfirm(userEmail));
                    }
                  }}
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
