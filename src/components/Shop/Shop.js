import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    
    const [products , setProducts] = useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    const [cart,setCart] = useState([])
    
    const addToCart = (product)=>{
        const newCart = [...cart,product]
        setCart(newCart);
    }
    const removeItem = (cart)=>{
        setCart(cart=[])
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product key={product.id} 
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className='cart'>
                <Cart addToCart={addToCart} cart={cart} key={cart.id} removeItem={removeItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;
