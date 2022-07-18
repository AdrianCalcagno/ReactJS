import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import lista from "../../mock/asyncmock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(true)

  const { id } = useParams();

  const traerItemPorId = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(lista.find(obj => obj.id === id));
      }, 500);
    });
  };

  useEffect(() => {
    traerItemPorId().then(respuesta => {
      setItem(respuesta);
      setCargando(false)
    });
  },[id]);

  return(<>{cargando ? <Loader /> : <ItemDetail item={item} /> }</>)
};

export default ItemDetailContainer;
