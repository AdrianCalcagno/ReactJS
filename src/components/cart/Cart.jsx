import React, { useContext, useState, Fragment } from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import swal from 'sweetalert';


const Cart = () => {

    const { cart, deleteAll, deleteOne, suma } = useContext(CartContext);
    

const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email:'',
    phone: '',
    adress:''
})

    if (cart.length === 0) {
        return (
            <h2 style={{
                marginTop: '50px',
                marginLeft: '20px'
            }}>
                No has agregado ninguna pelicula, ¿Ya viste nuestras <Link to="/categoria/recomendadas">peliculas recomendadas?</Link>
            </h2>
        );
    }


    const order = {

        buyer: {
            name: datos.nombre,
            apellido: datos.apellido,
            email: datos.email,
            phone: datos.phone,
            adress: datos.adress
        },
        items: cart.map(prod => ({ id:prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.cantidad})),
        total: suma,
    }
    
    const handleClick = () => {
    
        const db = getFirestore();
        const orderCollection = collection(db,'orders');
        addDoc(orderCollection,order)
        .then(({id}) => console.log(id))
        swal("¡Listo!", "¡Muchas gracias, ahora a disfrutar el cine en casa!", "success");
        deleteAll();
              
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + ' ' + datos.email + ' ' + datos.phone + ' ' + datos.adress)
    }

    return (
        <div style={{
            marginLeft: '20px'
        }}>

<h1 style={{
            marginTop: '50px',
            marginBottom: '30px'
        }}>Tu carrito de compras</h1>

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
                        marginBottom: '30px',
                     }}>Total: ${suma} </h1>


                  {/* Formulario */}

                     <Fragment>

            <h1 style={{
                        marginBottom: '15px',
                    }}>Formulario de compra</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="input">
                <p className="superChico">Ingrese su nombre</p>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <p className="superChico">Ingrese su Apellido</p>
                <div className="input">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <p className="superChico">Ingrese su Email</p>
                <div className="input">
                    <input type="text" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <p className="superChico">Confirme su Email</p>
                <div className="input">
                    <input type="text" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <p className="superChico">Ingrese su Telefono</p>
                <div className="input">
                    <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="phone"></input>
                </div>
                <p className="superChico">Ingrese su Direccion</p>
                <div className="input">
                    <input type="text" placeholder="Direccion" className="form-control" onChange={handleInputChange} name="adress"></input>
                </div>
            </form>
            <h1 style={{
                        marginTop: '20px',
                        marginBottom: '10px',
                     }}>Verifique los datos ingresados</h1>
            <ul>
                
                <li className="input">{datos.nombre}</li>
                <li className="input">{datos.apellido}</li>
                <li className="input">{datos.email}</li>
                <li className="input">{datos.phone}</li>
                <li className="input">{datos.adress}</li>
            </ul>
        </Fragment>


        <button type="submit" onClick={handleClick}>Comprar</button>
                
        </div>

     );
};

export default Cart;