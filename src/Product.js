import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Product({ id, title, price, image, rating }) {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const addToBasket = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      history.push("/login");
    }
  };

  const renderRatings = (ratings) => {
    return Array(rating)
      .fill()
      .map(() => <p>🌟</p>);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__ratings">{renderRatings(rating)}</div>
      </div>

      <img src={image} alt="Product image" />

      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
