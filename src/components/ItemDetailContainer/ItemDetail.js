import "./ItemDetail.css";

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  const {nombre, precio, imgDetalle, stock, descripcion, extra} = item;
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
  setCantidad(cantidad);
  addToCart(item, cantidad);
  }

  return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={imgDetalle} alt={nombre} className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{nombre}</h1>
            {extra && <span>{extra}</span>}
            <h3 style={{color: "whitesmoke"}}>${precio}</h3>
        </div>
        
        <p>
          {descripcion}
        </p>

      { 
cantidad===1 ? (<ItemCount stock={stock} precio={precio} onAdd={onAdd}/>
) : (<Link to='/cart'> <h1 className="titulo-container">Ir al carrito</h1></Link>)

      }
        
      </div>
    </div>
  );
};

export default ItemDetail;
