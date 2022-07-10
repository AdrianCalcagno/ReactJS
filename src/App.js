import './App.css';
import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {

  const onAdd = () => {
    console.log('hizo click')
  };
  
  return (
    <div className="App">
     <Navbar> 
     <CartWidget/>
    </Navbar>
     <ItemListContainer ListContainer="Bienvenido, Luciano"/>
     <ItemCount stock={5} initial={1} onAdd={onAdd}/>

    </div>
  );
}

export default App;
