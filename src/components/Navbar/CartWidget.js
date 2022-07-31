//import Cart from "../cart/Cart";
import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return(

     <div style={{ display: 'flex', alignContent: 'center', alignItems:'center', justifyContent: 'center', marginBottom: 5}}>
    <img src="../img/carrito.png" alt="Logo Carrito" className="logoCarrito" />
    <p style={{ fontSize: 20, color:'white', marginLeft: 5}}> {cart.length} </p>
    </div>
  
  )
};



export default CartWidget;
