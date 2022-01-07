import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import * as actions from "./actions";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // Remove item from basket
    dispatch(actions.removeFromBasket(id));
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__container">
        <div className="checkoutProduct__nestedContainer">
          <img className="checkoutProduct__image" src={image} alt="" />

          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
              <strong>${price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            {!hideButton && <button onClick={removeFromBasket}>Delete</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
