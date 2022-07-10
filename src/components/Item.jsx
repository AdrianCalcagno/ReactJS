import React from 'react';

const Styles = {

    listStyles: {
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
    }
}

const Styles2 = {

list2: {
    margin: '10px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-around',
    }
}

const Styles3 = {

    list3: {
        width: '100px',
        marginBottom: '20px',
        }
    }

const Item = ({item}) => {
  return (

    <div style={Styles2.list2}>

        <div style={Styles.listStyles}>
        <h2>{item.titulo}</h2>
        <h5>Stock: {item.stock}</h5>
        <h5>Precio: ${item.precio}</h5>
        <img style={Styles3.list3} src={item.imagenUrl} alt="" />
          </div>

    </div>

  )
}

export default Item