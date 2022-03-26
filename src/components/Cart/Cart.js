import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    const [randomProducts,setRandomProducts] = useState([])
    

    let item = cart.map(cartItem=><li>{cartItem.name}</li>)
    const random = Math.floor(Math.random()*cart.length)
    const randomProduct=()=>{
        setRandomProducts(cart[random])

        // console.log(randomProducts) 
    }
    
    // console.log(item.length);

    const [removeCart,setRemoveCart] =useState([])
    const removeItem = (cart)=>{
        console.log(cart=[]);
        cart=[]
       setRemoveCart(cart.pop())
    //    console.log(item);
    }
    console.log(cart);
    return (
        <div className='cart-info'>
            <h1>Selected :{cart.length}</h1>
            <p>{item}</p>
            <h1>{cart.name}</h1>
            <button onClick={randomProduct}>Chose 1 For Me</button>
            <p>{randomProducts?.name}</p>
            <button onClick={()=>removeItem(cart)}>Choose Again</button>
        </div>
    );
};

export default Cart;