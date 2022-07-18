import CartWidget from "./CartWidget";
import logo from "./logo.png";
import "../../App.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="encabezado" id="nav">
      <Link to="/" className="">        
      <img src={logo} alt="logo" className="logo"/>
            
      </Link>
    
        <ul className="espacioUl">
          <NavLink to="/categoria/recomendadas" className={({isActive})=>isActive? "link-activo" : "link"}>Recomendadas</NavLink>
          <NavLink to="/categoria/masvistas" className={({isActive})=>isActive? "link-activo" : "link"}>Más Vistas</NavLink>
          <CartWidget />
        </ul>
     </nav>

  );
};

export default Navbar;
