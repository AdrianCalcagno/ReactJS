import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Loader from "./components/Loader/Loader";
import Contenido from "./components/Navbar/Contenido/contenido"
import Cart from "./components/cart/Cart"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Provider from './context/cartContext';

const App = () => {
  return (
    <Provider>
    <BrowserRouter>
      <Navbar />
      <Contenido />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='categoria/:categoria' element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="*" element={<Link to="/"><Loader /></Link>} />
      </Routes>
    </BrowserRouter>
    </Provider>

  );
};

export default App;
