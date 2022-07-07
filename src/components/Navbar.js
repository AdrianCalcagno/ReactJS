import React from 'react';

const Navbar = ({children}) => {
return (

	<nav className="encabezado" id="nav">
		
		<a href="index.html"><img src="img/logo.png" alt="logo della"></img></a>

			<ol className="contenedorLista">
				<li>
					<a href="pages/planes.html">Planes</a>
				</li>
				<li>
					<a href="pages/nosotros.html">Nosotros</a>
				</li>
				<li>
					<a href="pages/clientes.html">Clientes</a>
				</li>
				<li>
					<a href="pages/contacto.html">Contacto</a>
				</li>
				<li>
					{children}
				</li>
			</ol>

		</nav>
);
}

export default Navbar;