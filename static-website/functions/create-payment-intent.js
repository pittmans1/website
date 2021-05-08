const { get } = require('mongoose');


const stripe = require('stripe')("sk_test_51Ii486HxoL2opcCf2lYMHimYFmMn9bOAULYTwdV4JQ1uvhUDS2Pf8g4OGeALxpqXhE6FEXcPqCqtrdc4KzdTxtwF00uQNgGpe0");


exports.handler = async (event, context, callback,  res, err) => {

 
// post("/.netlify/functions/checkout/create-payment-intent", async (req, res) => {
    
//     console.log(req.body)
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Math.round(req.body.amount * 100),
//       currency: "usd",
//     //   stripe:stripe,
//     });
//     res.send({
//        clientSecret: paymentIntent.client_secret
//     })
// })


console.log(event.body)

  const amount = JSON.parse(event.body)
  // res.send({
    //   publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    // });
    //items [ { sku: 'black-medium-shirt', quantity: 1 } ]
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
    })
    if (status === 404){
      console.log(err.message)
    }
    return {
      
      
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        
    }),
  }
}