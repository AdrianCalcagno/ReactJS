import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const Cart = () => {

    const { cart, deleteAll, deleteOne, suma } = useContext(CartContext);
    if (cart.length === 0) {
        return (
            <h2>
                No has agregado ninguna pelicula, ¿Ya viste nuestras <Link to="/categoria/recomendadas">recomendadas?</Link>
            </h2>
        );
    }
    return (
        <div>
            {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        margin: '10px',
                        display: 'flex',
                    }}
                >
                    <img src={prod.imgDetalle} width="70px" alt={prod.nombre} />
                    <div style={{
                        margin: '5px',
                    }}>
                        <h2>{prod.nombre}</h2>
                        <h2>$ {prod.precio}.-</h2>
                        <h2>Cantidad: {prod.cantidad}</h2>
                    </div>
                    <button style={{
                        marginLeft: '15px',
                        fontSize: '15px',
                        padding: '5px',
                        height: '40px',
                    }} onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button style={{
                        fontSize: '15px',
                    }}onClick={deleteAll}>Eliminar todos los productos</button>
            <h1 style={{
                        marginTop: '15px',
                    }}>Total: ${suma} </h1>
                     <button style={{
                        fontSize: '15px',
                    }}>Finalizar Compra</button>
        </div>
    );
};

export default Cart;