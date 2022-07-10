import React, {useState} from 'react';
import {useEffect} from 'react';
import {productos} from '../mock/productos';
import ItemList from '../components/ItemList';

const Styles = {

    listStyles: {
        color:'white',
        fontSize: '20px',
        backgroundColor: '#AB6550',
        marginTop: '20px',
        padding: '5px',
        marginBottom: '20px',
    }
}

const ListContainer = ({ListContainer}) => {
    const [items, setItems] = useState ([]);    

useEffect(() => {

    const traerProductos = new Promise ((res,rej) => {
        setTimeout(()=>{
        res(productos);
        },2000)
    });

    traerProductos
    .then ((data) => {

        setItems(data);
    })
.catch((error) => {
    console.log(error)
})
    
})

return (
    <div>

<h5 style={Styles.listStyles}>

    {ListContainer}
</h5>

<h1>Pack de peliculas para el finde</h1>

<ItemList items={items}/>
    </div>
	
);
}

export default ListContainer;