import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
  const {nombre, precio, imgDetalle, stock, descripcion, extra} = item

  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items")
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
        
        <ItemCount stock={stock} precio={precio} onAdd={onAdd}/>
      </div>
    </div>
  );
};

export default ItemDetail;
