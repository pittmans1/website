require('dotenv').config();
const stripe = require('stripe')('sk_test_51Ii486HxoL2opcCf2lYMHimYFmMn9bOAULYTwdV4JQ1uvhUDS2Pf8g4OGeALxpqXhE6FEXcPqCqtrdc4KzdTxtwF00uQNgGpe0');

exports.handler = (event, context, callback) => {
  // This will allow us to freeze open connections to a database
  // context.callbackWaitsForEmptyEventLoop = false;

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }

  const data = JSON.parse(event.body);

  if (!data.token || parseInt(data.amount) < 1) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Some required fields were not supplied.',
      }),
    });
  }

  stripe.charges
    .create({
      amount: parseInt(data.amount),
      currency: 'usd',
      description: 'Donations',
      source: data.token,
    })
    .then(({ status }) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ status }),
      });
    })
    .catch(err => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          message: `Error: ${err.message}`,
        }),
      });
    });
};

 