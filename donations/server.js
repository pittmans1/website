const express = require('express')
const path= require('path')
const app = express()
require('dotenv').config
const morgan = require('morgan')
const mongoose= require('mongoose')
const expressJwt = require('express-jwt')
const uuid = require('uuid/v4')
const port = process.env.PORT || 7000
process.env.SECRET
app.use(express.json())
app.use(morgan('dev'))
const stripe = require("stripe")("sk_test_51Ii486HxoL2opcCf2lYMHimYFmMn9bOAULYTwdV4JQ1uvhUDS2Pf8g4OGeALxpqXhE6FEXcPqCqtrdc4KzdTxtwF00uQNgGpe0");
app.use(express.static("."));

app.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
  });
  
  app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
  
      const customer = await stripe.customers.create({
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = error.message;
    }
  
    res.json({ error, status });
  });
  
app.listen(port, () => console.log('Running on port 4242'));


