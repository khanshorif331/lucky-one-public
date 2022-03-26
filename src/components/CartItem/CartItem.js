import React from 'react';

const CartItem = ({cartItem}) => {
    return (
        <div>
            {<li>{cartItem.name}</li>}
        </div>
    );
};

export default CartItem;