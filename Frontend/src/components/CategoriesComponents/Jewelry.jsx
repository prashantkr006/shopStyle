import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { useCart } from "react-use-cart";
import JewelryItems from "../constants/Jewelry";
import Productcard from "../Cards/Productcard";
import "../CommonCategory.css";
const Jewelry = () => {
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
                  {JewelryItems.map((m) => (
                    <div key={m.id} className="item-card-container">
                      <Productcard
                        key={m.id}
                        id={m.id}
                        photos={[
                          m.variation_0_image,
                          m.variation_1_image,
                          m.image_url,
                        ]}
                        price={m.price}
                        productName={m.subcategory}
                        description={m.name}
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

export default Jewelry;
