const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
//require stripe and pass private key
const stripe = require('stripe')(
  'sk_test_51I7wrjLZv7WKvm6KG28xzcxFtYWJNNKwX07FjbsX8EqEO3PrXyb2EEWNSLEnooNuYkncZQqLReaDnhSpnWPUllZk00t3hbGUQT'
);

//Setup API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payment/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment Request received for following amount >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-ef788/us-central1/api  --> this is cloud functions run locally to start run: "firebase emulators:start" in the bash console
