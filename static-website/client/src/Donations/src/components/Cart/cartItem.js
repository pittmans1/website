import React from "react"
import "./CartItem.css"

export default function CartItem({name, cost, desc, quantity}){
    return(
        <div className="CartItem">
            <div>{name}</div>
            <div className="CartItem-details">
        <div className="CartItem-quantity">Qty: {quantity}</div>
        <div>{desc}</div>
        <div>${cost.toFixed(2)}</div>
      </div>
        </div>
    )
}