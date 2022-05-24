import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { useCart } from "react-use-cart";
import MoodyItems from "../constants/CategoriesConstants/MoodyItems";
import Productcard from "../Cards/Productcard";
import "../CommonCategory.css";
const Moody = () => {
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
                  {MoodyItems.map((m) => (
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

export default Moody;
