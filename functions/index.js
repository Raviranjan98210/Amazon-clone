const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { default: Stripe } = require("stripe");
const stripe = require("stripe")(
  "sk_test_51HnnDSBCYfjJ30HzmJEaGBpEmmUCLREClQW9XXttxziMDeFYUAw7ibg4etwd3fdciXKlJyUBrLksQE8NW0JgaKNt00tsU9Adtn"
);

//API

// APP CONFIG

const app = express();

//MIDDLEWARES
app.use(cors({ origin: true }));

app.use(express.json());

//API ROUTES

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//LISTEN COMMAND

exports.api = functions.https.onRequest(app);
// localhost: 4001 / functions;
