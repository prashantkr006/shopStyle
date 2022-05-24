import React, { useState } from "react";
import { ProductCard } from "react-ui-cards";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

//CSS of this component is in CommonCategory.css

const Productcard = (props) => {
  const { inCart } = useCart();

  const [selectButton, setSelectButton] = useState(inCart(props.id));
  //console.log(inCart(props.id));
  return (
    <div
      className="col-md-3 col-sm-6 col-6 "
      style={{
        marginBottom: "10%",
        margin: "5%",
        position: "relative",
        width: "100%",
      }}
      title={props.productName}
    >
      <ProductCard
        key={props.id}
        photos={props.photos}
        price={"$ " + props.price}
        productName={props.productName}
        description={props.description}
        // style={{ height: "10rem" }}
        style={{ width: "100%" }}
      />
      <div
        onClick={() => {
          setSelectButton(true);
          toast.success("Item Added to Cart", {
            theme: "colored",
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }}
        className="product-card-btn"
      >
        <button
          className="btn btn-warning btn-lg "
          onClick={props.addItem}
          style={{
            color: selectButton === true ? "white" : "Black",
            background: selectButton === true ? "#238636" : "#ffc107",
            borderColor: selectButton === true ? "#238636" : "#ffc107",
            fontSize: selectButton && "1.1rem",
            width: "100%",
            pointerEvents: selectButton && "none",
            cursor: selectButton && "not-allowed",
          }}
        >
          {selectButton === true ? "ITEM ADDED TO CART!" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default Productcard;
