import React from "react";

const Product = ({data, addToCart}) => {
    
    const {name, price} = data;

    return (
        <div className='product'>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={ () => addToCart(data)}>Agregar al carrito</button>
        </div>
    )
}

export default Product