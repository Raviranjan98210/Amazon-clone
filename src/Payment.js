import React, { useState, useEffect } from "react";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getTotalValue } from "./totalAmount";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { db } from "./firbase";

function Payment() {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succedded, setSuccedded] = useState(false);
  const [proccessing, setProccessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecretKey = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getTotalValue(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecretKey();
  }, [basket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setProccessing(true);
    const response = stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSuccedded(true);
        setError(null);
        setProccessing(false);
        //Save orders to the database of firebase
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        //After successful payment just make basket empty

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error.message);
  };

  return (
    <div className="payment">
      <div class="payment__container">
        <div class="payment__section">
          <div class="payment__title">
            <h3>Basic Address</h3>
          </div>
          <div class="payment__address">
            <p>{basket?.email}</p>
            <p>Hariharpur, near thakurbari</p>
            <p>chhapra, 841414</p>
          </div>
        </div>
        <div class="payment__section">
          <div class="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div class="payment__products">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div class="payment__section">
          <div class="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div class="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div class="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Total order: {value}</h3>}
                  thousandSeparator={true}
                  prefix={"₹"}
                  displayType={"text"}
                  decimalScale={2}
                  value={getTotalValue(basket)}
                />

                <button disabled={proccessing || disabled || succedded}>
                  <span>{proccessing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
