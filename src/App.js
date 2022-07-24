import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Loader from "./components/Loader/Loader";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Provider from './context/cartContext';

const App = () => {
  return (
    <Provider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='categoria/:categoria' element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Link to="/"><Loader /></Link>} />
      </Routes>
    </BrowserRouter>
    </Provider>

  );
};

export default App;
