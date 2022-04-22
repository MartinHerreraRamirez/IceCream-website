import { TYPES } from "../actions/shoppingActions";
import { useReducer, useEffect } from "react";
import {shoppingReducer, shoppingInitialState} from "../reducer/shoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import axios from "axios";

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState) 

  const {products, cart} = state;

  const updateState = async () => {
    const productsURL = "http://localhost:3000/products";
    const cartURL = "http://localhost:3000/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;  
    const newCartItem = await resCart.data;
    dispatch({type: TYPES.READ_STATE, payload: {newProduct, newCartItem}})
  }
  
  useEffect(() => {
   updateState()  
  }, []) 
  
  const addToCart = (id) => {
   
   dispatch({type: TYPES.ADD_TO_CART, payload: id})
    
  };

  const deleteFromCart = (id, all=false) => {
    if (all) {
      dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})  
    } else {
      dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})  
    }
  };

  // const clearCart = () => {
  //   dispatch({type: TYPES.CLEAR_CART})
  // };



  return (
    <>
      <h2 className="p-6 mt-10 font-sans text-2xl font-bold text-center text-blue-900 bg-orange-500 font">
        Carrito de Compras
      </h2>
      <h3 className="p-4 mt-10 font-sans text-xl font-semibold text-left bg-orange-500 text-zinc-700">
        Productos
      </h3>
      <div className="flex flex-row gap-4 mt-6">
        {products.map((product) => (<Product 
        key={product.id}
        data={product}
        addToCart={addToCart}
        />))}

      </div>
      <h3 className="p-6 mt-10 font-sans text-xl font-semibold text-left bg-orange-500 text-zinc-700">
        Carrito
      </h3>
      
      <div className="flex-col w-full mt-6">
          {cart.map((item, index) => <CartItem 
          key={index}
          data={item}
          deleteFromCart={deleteFromCart}  
          />)}
      </div>
      {/* <div className="ml-4">
      <button onClick={()=> clearCart()} 
      className="p-2 mt-10 font-sans text-xl font-semibold text-center rounded bg-slate-500 text-slate-50 hover:bg-orange-500 ">
        Limpiar Carrito
      </button>
      </div>    */}
    </>
  );
};

export default ShoppingCart;
