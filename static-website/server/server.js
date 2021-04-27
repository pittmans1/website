const express = require('express')
const app = express()
require('dotenv').config
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressjwt= require('express-jwt')
const env= require('dotenv').config({path:"./.env"})
const stripe= require('stripe')("sk_test_51Ii486HxoL2opcCf2lYMHimYFmMn9bOAULYTwdV4JQ1uvhUDS2Pf8g4OGeALxpqXhE6FEXcPqCqtrdc4KzdTxtwF00uQNgGpe0")

const PORT = process.env.PORT || 4242


app.use(
    express.json({
      // We need the raw body to verify webhook signatures.
      // Let's compute it only when hitting the Stripe webhook endpoint.
    //   verify: function(req, res, buf) {
    //     if (req.originalUrl.startsWith('/webhook')) {
    //       req.rawBody = buf.toString();
    //     }
    //   }
    })
  );
  app.get('/config', (req, res) => {
    res.send({
      publishableKey: process.env.PUBLISH_TEST_APIKEY,
    });
  });
app.post("/checkout/create-payment-intent", async (req, res) => {
    
    console.log(req.body)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(req.body.amount * 100),
      currency: "usd",
    //   stripe:stripe,
    });
    res.send({
       clientSecret: paymentIntent.client_secret
    })
})

// mongoose.connect('mongodb://localhost:27017/paymentSystem', {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// }, console.log('db connected...'))

//Route goes here
// app.use('/checkout', require('./routes/paymentRouter'))


app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`)
})