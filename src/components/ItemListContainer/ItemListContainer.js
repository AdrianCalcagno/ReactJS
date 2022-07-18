import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import lista from "../../mock/asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

  const traerItems = () => {
    return new Promise(resolve => {
      setCargando(true)
      setTimeout(() => {
        resolve(
          categoria ? lista.filter(obj => obj.categoria === categoria) : lista
        );
      }, 1000);
    });
  };

  useEffect(
    () => {
      traerItems().then(res => {
        setItems(res);
        setCargando(false);
      });
    },
    [categoria]
  );

  return(<>{cargando ? <Loader /> : <ItemList items={items} />}</>)
  
};

export default ItemListContainer;
