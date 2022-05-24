import TinderCard from "react-tinder-card";
import SwipeCardElements from "./constants/SwipeCardElements";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

// ...
const SwipeCards = () => {
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the Screen! ");
  };

  return (
    // <TinderCard
    //   onSwipe={onSwipe}
    //   onCardLeftScreen={() => onCardLeftScreen("fooBar")}
    //   preventSwipe={["right", "left"]}
    // >
    //   Hello, World!
    // </TinderCard>

    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {SwipeCardElements.map((item) => (
          <TinderCard
            className="swipe"
            key={item.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, item.id)}
            onCardLeftScreen={() => outOfFrame(item.id)}
          >
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="card"
            >
              {item.id === 7 && (
                <h6>
                  <RiErrorWarningLine /> Hold and swipe left or right to view
                  other pics.
                </h6>
              )}
              {item.id === 7 ? (
                <h4>
                  <BsArrowLeftShort style={{ fontSize: "2rem" }} /> {item.name}{" "}
                  <BsArrowRightShort style={{ fontSize: "2rem" }} />
                </h4>
              ) : (
                <h4>{item.name}</h4>
              )}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};
export default SwipeCards;
