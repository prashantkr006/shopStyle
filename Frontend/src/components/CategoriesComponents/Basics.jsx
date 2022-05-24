import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { useCart } from "react-use-cart";
import BasicsItems from "../constants/CategoriesConstants/BasicsItems";
import Productcard from "../Cards/Productcard";
import "../CommonCategory.css";
const Basics = () => {
  const [isLoading, setLoading] = useState(true);

  const { addItem } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-10" style={{ marginLeft: "5%" }}>
                <div
                  className="row gy-4 "
                  style={{ marginBottom: "5%", marginTop: "5%" }}
                >
                  {BasicsItems.map((m) => (
                    <div className="item-card-container">
                      <Productcard
                        photos={[m.image, m.image2, m.image3]}
                        price={m.price}
                        productName={m.name}
                        description={m.description}
                        addItem={() => addItem(m)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basics;
