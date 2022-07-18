import "./Item.css";
import { Link } from "react-router-dom"


const Item = ({nombre, imgItem, extra, id}) => {

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={imgItem} alt={nombre} className="img-item"/>
      </div>

      <h3 className="">{nombre}</h3>
      {extra && <span>{extra}</span> }
      <Link to={`/item/${id}`}><button>DETALLE</button></Link>
    </div>
  );
};

export default Item;
