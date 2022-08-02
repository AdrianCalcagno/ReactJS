import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

    useEffect( () => {
    
    const querydb = getFirestore();
    const queryCollection = collection(querydb,'items');
    if(categoria) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoria))
    getDocs(queryFilter)
    .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }else {
      getDocs(queryCollection)
      .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()})))) 
    }
    setCargando(false);
    },
    [categoria]
  );



  return(<>{cargando ? <Loader /> : <ItemList items={items} />}</>)
  
};

export default ItemListContainer;
