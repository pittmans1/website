import React, { useState, useEffect } from 'react';
import { CardElement} from "@stripe/react-stripe-js";
import axios from "axios"
import {
    useStripe,
    useElements
  } from "@stripe/react-stripe-js"
import './CheckoutForm.css';
import { stringify } from 'uuid';
import { token } from 'morgan';
function CheckoutForm(  {totalCost} ) {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    console.log(totalCost)
    
       

       
       
    
    
    
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const submit = async e => {
        e.preventDefault();
        const {error: backendError, clientSecret} = await fetch("/checkout/create-payment-intent", {
                method: "Post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount:totalCost,
                    currency:""
                    
                })
              })
              .then(res => {
                return res.json();
              });

    const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: elements.getElement(CardElement)
    }
});
if (payload.error) {
    setError(`Payment failed ${payload.error.message}`);
    setProcessing(false);
} else {
    setError(null);
    setProcessing(false);
    setSucceeded(true);
}
};

return (
    <form id="payment-form" onSubmit={submit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange}  />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
        >
        <span id="button-text">
          {processing ? (
              <div className="spinner" id="spinner"></div>
              ) : (
                  "Pay now"
                  )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
          <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
          >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  );
}


export default CheckoutForm
//         console.log(stripe)
//       const payload  = await stripe.createPaymentMethod({
        
//               type:"card",
//               card:cardElement,
             
//       });
      

//     //   if (payload.error) {
//     //     console.log(payload.error);
//     //   } else {
//     //     setPaymentMethod(payload.paymentMethod);
//     //   }
//     // }
  
//         await axios.post('/checkout',{
//         headers: {'Content-Type': "text/plain"},
//         token: token.id,
//         amount: totalCost * 100
//     }).then(res => {
//         if (res.ok) {
//           setStatus('complete');
//         } else{
//             return setStatus('error')
//         }
        

//     })
//     .catch(err => console.log(err.message))

     
  

//   if (status === 'complete') {
//     return <div className="CheckoutForm-complete">Payment successful!</div>;
//   }
// }