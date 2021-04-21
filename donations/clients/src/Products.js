import React from 'react'

import './Products.scss'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export default function Products({onAddToCartClick, price, name, desc, img, id}){
    
      return (
        <div className="product" key={id}>
          <section>
            <h2>{name}</h2>
            <p>{desc}</p>
            <h3>{'$' + price}</h3>
            <button onClick={onAddToCartClick}>
              Add to Cart
            </button>
          </section>
          <img src={img} alt={name} />
        </div>
      )
  }