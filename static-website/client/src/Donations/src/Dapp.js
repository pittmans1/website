import React, {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, StripeProvider } from "@stripe/react-stripe-js";
import {products} from './components/Donations'
import Cart from "./components/Cart/Cart"
import CheckoutForm from "./components/CheckoutForm/CheckoutForm"

import Products from "./Products"


import "./styles.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const promise = loadStripe("pk_test_51Ii486HxoL2opcCfdWK7D7yYKt1v9GRtGSwPXPn5UoAbV1l26CLzZ0HaN9aZBIx5Vsw8BfGfMQ0sRqCz0ckWdmHO00QmpwselZ")
// loadStripe is initialized with your real test publishable API key.
export default function Dapp() {
const [itemsInCart, setItemsInCart]= useState([])
const handleAddToCartClick = id => {
  setItemsInCart(itemsInCart => {
    const itemInCart = itemsInCart.find(product => product.id === id);

    if(itemInCart){
      return itemsInCart.map(product => {
        if(product.id !== id) return product;
        return {...itemInCart, quantity: product.quantity + 1};
      })
    }

    const product = products.find(product => product.id === id);
    return [...itemsInCart, {...product, quantity: 1}];
  })
}

  const totalCost = itemsInCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )
  return (
   <main>
     <div>
        {products.map(product => (
          <Products 
          key={product.id}
           name={product.name}
           desc={product.desc}
           price={product.price}
           img={product.img}
           onAddToCartClick={()=> handleAddToCartClick(product.id)}
           />
        ))}
      </div>
      <Cart itemsInCart={itemsInCart} totalCost={totalCost}/>
      {itemsInCart.length > 0 && (
          <Elements stripe={promise}>
            <CheckoutForm totalCost={totalCost}/>
          </Elements>
      )}
      </main>
  );
}


/** 
 <Elements stripe={promise}>
 <CheckoutForm />
 </Elements>
 * 
*/