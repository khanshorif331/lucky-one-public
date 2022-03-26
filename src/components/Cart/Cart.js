import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    const [randomProducts,setRandomProducts] = useState([])
    

    let item = cart.map(cartItem=><li>{cartItem.name}</li>)
    const random = Math.floor(Math.random()*10)
    // setRandomProducts(item[random])
    // console.log(random);
    // console.log(cart[random])
    const randomProduct=()=>{
        setRandomProducts(cart[random])

        // console.log(randomProducts) 
    }
    
    // console.log(item.length);

    const [cleanItem,setCleanItem] =useState([])
    const removeItem = ()=>{
        item.length=0
       setCleanItem(item.length=0)
    //    console.log(item);
    }
    console.log(cleanItem);
    return (
        <div className='cart-info'>
            <h1>Selected :{cart.length}</h1>
            <p>{item}</p>
            <h1>{cart.name}</h1>
            <button onClick={randomProduct}>Chose 1 For Me</button>
            <p>{randomProducts?.name}</p>
            <button onClick={removeItem}>Choose Again</button>
        </div>
    );
};

export default Cart;