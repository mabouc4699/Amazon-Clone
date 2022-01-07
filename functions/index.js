const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JQwdDKg3X64UbB36luC8DOluRGlmMRaTc3BJt0UUV581bvj8VAEXIqepAZSxzQXIK7eF6EaWaZir6cyg7xL69WJ00hF2mMTeD"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-b3039/us-central1/api
