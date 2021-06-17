const functions = require("firebase-functions");
const admin = require('firebase-admin');
      admin.initializeApp();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J2ACtHI24BKleyfOEDBL2PqbUYIuewgZvGDJdd33oa0V8WkwxRyufAm9Iim8xiPtaaEisj1EyhHLo2WNgry3bfo00c1vijvmz"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "ksh",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
