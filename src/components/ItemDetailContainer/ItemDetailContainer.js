import React, { useState, useEffect } from "react";
import {getFirestore,doc,getDoc} from 'firebase/firestore';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

// import lista from "../../mock/asyncmock";

export const ItemDetailContainer = () => {
const [item, setItem] = useState({});
const { id } = useParams();
const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb,'items', id);
    getDoc(queryDoc)
    .then(res => setItem({id: res.id, ...res.data()}))
        setCargando(false)
  }, [id])

  return(<>{cargando ? <Loader /> : <ItemDetail item={item}/>}</>)
};

export default ItemDetailContainer;
