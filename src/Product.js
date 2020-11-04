import React from "react";
import "./Product.css";

function Product({ title, price, image, rating }) {
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
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div class="product__ratings">{renderRatings(rating)}</div>
      </div>

      <img src={image} alt="Product image" />

      <button>Add to cart</button>
    </div>
  );
}

export default Product;
