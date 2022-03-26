import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({cart,removeItem}) => {

    const [randomProducts,setRandomProducts] = useState([])
    

    let item = cart.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
    

    const randomProduct=()=>{
        const random = Math.floor(Math.random()*cart.length)
        setRandomProducts(cart[random])
    }

    
    return (
        <div className='cart-info'>
            <h1>Selected :{cart.length}</h1>
            <div>{item}</div>
            <h1>{cart.name}</h1>
            <button onClick={randomProduct}>Chose 1 For Me</button>
            <p>{randomProducts?.name}</p>
            <button onClick={removeItem}>Choose Again</button>
        </div>
    );
};

export default Cart;