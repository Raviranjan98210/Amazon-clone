import React from "react";
import moment from "moment";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order?.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order?.id}</small>
      </p>
      {order?.data.basket.map((item) => {
        return (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        );
      })}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Total order: {value}</h3>
        )}
        thousandSeparator={true}
        prefix={"₹"}
        displayType={"text"}
        decimalScale={2}
        value={order?.data.amount / 100}
      />
    </div>
  );
}

export default Order;
