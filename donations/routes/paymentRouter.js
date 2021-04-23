const express = require('express')

const paymentRouter = express.Router()
const stripe = require('stripe')( process.env.SECRET_TEST_APIKEY);

paymentRouter.post('/checkout', async (req,res) => {
    try{
      let {status} = await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        source: req.body.token,
      })
      return res.json({status})
    } catch(err) {
      console.error(err)
      res.status(500).end()
    }
  })


module.exports = paymentRouter