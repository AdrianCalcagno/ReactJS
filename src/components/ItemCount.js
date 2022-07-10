import React, { useState } from "react";
  
const ItemCount = ({stock, initial, onAdd}) => {
 const [counter, setCounter] = useState(initial)

 const sumar = () => {
 if(counter<stock){
    setCounter(counter + 1)
  }}
  
  const restar = () => {
    if(counter>initial){
    setCounter(counter - 1)
  }}
  
  return (

<div className="divContador">
<h5 style={{
          fontSize: '200%',
          marginTop: 20,
        }}>¿Cuántos packs queres comprar?</h5>

<div style={{
         fontSize: '200%',
        }}>{counter}
</div>

      <div className="buttons">
        <button style={{
          fontSize: '200%',
          backgroundColor: 'white',
          borderRadius: '8%',
          color: 'black',
          marginRight: 15,
        }}
          onClick={sumar}>+</button>
        <button style={{
          fontSize: '200%',
          backgroundColor: 'white',
          borderRadius: '8%',
          color: 'black',
        }}
          onClick={restar}>−</button>
      </div>


      <div className="buttons">
        
        <button style={{
          fontSize: '200%',
          backgroundColor: 'white',
          borderRadius: '8%',
          color: 'black',
          marginRight: 15,
        }}

          onClick={onAdd}>Agregar al Carrito</button>
       
      </div>

      
    </div>
  )
}
  
export default ItemCount;

