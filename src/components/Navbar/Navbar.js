import CartWidget from "./CartWidget";
import logo from "./logo.svg";
import "../../App.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="encabezado" id="nav">
      <Link to="/" className="logo">        
      <img src={logo} alt="logo" id="logo"/>
      </Link>
    
        <ul id="espacioUl">
          <NavLink to="/categoria/recomendadas" style={{textDecoration:'none'}} className={({isActive})=>isActive? "link-activo" : "link"}>Recomendadas</NavLink>
          <NavLink to="/categoria/masvistas" style={{textDecoration:'none'}}  className={({isActive})=>isActive? "link-activo" : "link"}>Más Vistas</NavLink>
          <Link className="links" to="/cart">
                <CartWidget />
            </Link>
        </ul>
     </nav>

  );
};

export default Navbar;
