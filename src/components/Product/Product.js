import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = ({product,icon}) => {
    console.log(icon);
    const {name,picture,price} = product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <div>
                <button>Add To Cart <FontAwesomeIcon icon={ faShoppingCart }/></button>
                
            </div>
        </div>
    );
};
export default Product;