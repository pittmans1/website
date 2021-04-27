import React from 'react'
import CartItem from "./cartItem"
import './Cart.css'
import { products } from '../Donations'

export default function  Cart ({itemsInCart, totalCost}) {
    return (
        <div className="Cart">
            <h2 className="Cart-title">Your Shopping cart</h2>
            {itemsInCart.length > 0 ? (
                <div>
                    {itemsInCart.map(product => (
                        <CartItem
                        key={product.id}
                        name={product.name}
                        cost={product.price * product.quantity}
                        quantity={product.quantity}
                        />
                    ))}
                    <div className="Cart-Total-cost">
                        Total cost : ${totalCost.toFixed(2)}
                        </div>
                    </div>
            ):(
                <div>Your Cart is empty!</div>
            )}
        </div>
    );
}

