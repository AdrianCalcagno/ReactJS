import React, { useContext } from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import swal from 'sweetalert';

const Cart = () => {

    const { cart, deleteAll, deleteOne, suma } = useContext(CartContext);
    
const order = {

    buyer: {
        name: 'Juan',
        email: 'juan@gmail.com',
        phone: '0303456',
        adress: 'Av Siempre Viva 123'
    },
    items: cart.map(prod => ({ id:prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.cantidad})),
    total: suma,
}

const handleClick = () => {

    const db = getFirestore();
    const orderCollection = collection(db,'orders');
    addDoc(orderCollection,order)
    .then(({id}) => console.log(id))
    swal("¡Listo!", "¡A disfrutar el cine en casa!", "success");
    deleteAll();

      
}


    if (cart.length === 0) {
        return (
            <h2 style={{
                marginTop: '50px',
                marginLeft: '20px'
            }}>
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
                    }}onClick={deleteAll}>Vaciar Carrito</button>
            <h1 style={{
                        marginTop: '15px',
                     }}>Total: ${suma} </h1>
                     {/* <button onClick= {compraFinalizada} style={{ fontSize: '15px' }}>Finalizar Compra</button> */}
                     
                     <button onClick={handleClick}>Comprar</button>
        </div>

        
    );
};

export default Cart;