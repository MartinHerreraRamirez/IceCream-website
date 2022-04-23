import React, {useReducer,useEffect} from 'react';
import { shoppingInitialState, shoppingReducer} from './reducers/shoppingReducer';
import { TYPES } from './actions/shoppingActions';
import Product from './Product';
import CartItem from './CartItem';
import axios from 'axios';


const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart} = state;

    const udpateState = async () => {
        const productsURL = "http://localhost:5000/products";
        const cartURL = "http://localhost:5000/cart";
        const resProducts = await axios.get(productsURL);
        const resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data;
        const newCartItem = await resCart.data;

        dispatch({type: TYPES.READ_STATE, payload: {newProduct,newCartItem}})
    }

    useEffect(() => {
        udpateState()
    }, [])

    //funciones

    const addToCart = async (data) => {

        let newItem = state.products.find(product => product.id === data.id)

        let itemInCart = state.cart.find(item => item.id === newItem.id)

        if (itemInCart) {

            let endpoint = `http://localhost:5000/cart/${data.id}`

            let options = {
                method: "PUT",
                headers: {"content-type": "application/json"},
                data: JSON.stringify({...data, quantity: itemInCart.quantity + 1})
            },
        
            res = await axios(endpoint, options),
                itemData = await res.data
                
            dispatch({type: TYPES.ADD_TO_CART, payload: {itemData}})
            
        } else {

            let options = {
                method: "POST",
                headers: {"content-type": "application/json"},
                data: JSON.stringify({...data, quantity: 1})
            };

            let res = await axios("http://localhost:5000/cart", options),
                itemData = await res.data
                
            dispatch({type: TYPES.ADD_TO_CART, payload: {itemData}}) 
            
        }
    }

    const deleteFromCart = async (data, all = false) => {

        if(all){

            let endpoint = `http://localhost:5000/cart/${data.id}`

            let options = {
                method: "DELETE",
                headers: {"content-type": "application/json"}
            },
            res = await axios(endpoint, options),
                itemData = await res.data 

            
            dispatch({type: TYPES.REMOVE_ALL_PRODUCT, payload: data.id})
            
        }
        else{

            let itemInCart = state.cart.find(item => item.id === data.id)

            if (itemInCart.quantity > 1) {

                let endpoint = `http://localhost:5000/cart/${data.id}`

                let options = {
                    method: "PUT",
                    headers: {"content-type": "application/json"},
                    data: JSON.stringify({...data, quantity: itemInCart.quantity - 1})
                },
            
                res = await axios(endpoint, options)
                     

                dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id})
                
            } else {

                let endpoint = `http://localhost:5000/cart/${data.id}`

                let options = {
                    method: "DELETE",
                    headers: {"content-type": "application/json"}
                },  
                res = await axios(endpoint, options)

                dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id})

            }          
        }
    }

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    }

    return(
        <div>
            <h2>Carrito De Compras</h2>
            <h3>Productos</h3>
            <div className="box-grid-responsive">
                {products.map(product=> <Product
                    key={product.id}
                    data={product}
                    addToCart={addToCart}
                />)}
            </div>
            <h3>Carrito</h3>
            <div className="box">
                {cart.map((item,index) => <CartItem
                    key={index}
                    data={item}
                    deleteFromCart={deleteFromCart}
                />)}
            </div>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
        </div>
    );

}

export default ShoppingCart