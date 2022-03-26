import React from 'react';
import './Cart.css'

const Cart = ({addToCart,cart}) => {
    return (
        <div className='cart-info'>
            <h1>Selected :</h1>
            <h1>{cart.name}</h1>
            <button>Chose 1 For Me</button>
            <button>Choose Again</button>
        </div>
    );
};

export default Cart;