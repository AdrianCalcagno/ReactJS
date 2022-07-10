import './App.css';
import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {

  const onAdd = () => {};
  
  return (
    <div className="App">
     <Navbar> 
     <CartWidget/>
    </Navbar>
  
     <ItemListContainer listContainer="Bienvenido, Luciano"/>
     <ItemCount stock={5} initial={1}/>

    </div>
  );
}

export default App;
